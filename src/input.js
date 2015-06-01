import Phaser from 'Phaser';
import { each } from 'lodash';

let gamepads = {};
let buttons_pressed = {
    pad1: { a: false, b: false, start: false },
    pad2: { a: false, b: false, start: false },
    pad3: { a: false, b: false, start: false },
    pad4: { a: false, b: false, start: false }
};

function init(game) {
    if (!game.input.gamepad.active) {
        game.input.gamepad.start();
        gamepads.pad1 = game.input.gamepad.pad1;
        gamepads.pad2 = game.input.gamepad.pad2;
        gamepads.pad3 = game.input.gamepad.pad3;
        gamepads.pad4 = game.input.gamepad.pad4;

        each(gamepads, set_connect_callback);
    }
}

function set_connect_callback(gamepad) {
    gamepad.onConnectCallback = connect_callback;
}

function connect_callback() {
    console.log(`INPUT: gamepad connected, index ${this.index}`);
}

function connected(pad) {
    return gamepads[pad].connected;
}

function left(pad) {
    return gamepads[pad].axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < 0.0;
}
function right(pad) {
    return gamepads[pad].axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.0;
}
function up(pad) {
    return gamepads[pad].axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < 0.0;
}
function down(pad) {
    return gamepads[pad].axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.0;
}

function pressed_once(pad, button_code, button_name) {

    // was this button already down, last frame?
    let already_pressed   = buttons_pressed[pad][button_name];

    // is the button held down this frame?
    let currently_pressed = gamepads[pad].isDown(Phaser.Gamepad[button_code]);

    // update the button state so next frame we know whether the button was
    // pressed this frame
    buttons_pressed[pad][button_name] = currently_pressed;

    return currently_pressed && !already_pressed;
}

function start_pressed(pad) {
    return pressed_once(pad, 'BUTTON_9', 'start');
}
function a(pad) {
    return pressed_once(pad, 'BUTTON_1', 'a');
}
function b(pad) {
    return pressed_once(pad, 'BUTTON_0', 'b');
}

export default {
    init,
    gamepads,
    connected,
    left,
    right,
    up,
    down,
    a,
    b,
    start_pressed
};


