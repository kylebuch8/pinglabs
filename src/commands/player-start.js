import * as command from 'commands/command';
import * as conf from 'conf';

/**
 * These are executed when a player presses Start.
 */

class player_start extends command {

    constructor(player) {
        super('player-start');
        this.player = player;
    }

    execute() {
        console.log(`JOIN: player ${this.player.name} joined`);
        hide_press_start_prompt(this.player);
        this.player.playing = true;
    }

    undo() {
        console.log(`JOIN: player ${this.player.name} left`);
        show_press_start_prompt(this.player);
        this.player.playing = false;
    }

}

function hide_press_start_prompt(player) {
    let el = document.querySelector(`#player-${player.name}-status .press-start`);
    el.classList.add('hide');
}

function show_press_start_prompt(player) {
    let el = document.querySelector(`#player-${player.name}-status .press-start`);
    el.classList.remove('hide');
}

export default player_start;
