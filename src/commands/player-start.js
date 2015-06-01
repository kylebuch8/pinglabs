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
        // I designed the module layout poorly in some places, so a regular
        // import can't be used here for 'scores' due to a circular dependency.
        // Fall back to RequireJS's circular dependency solution of
        // `require('scores')`.
        let score_obj = require('scores')[this.player.name];
        console.log(`JOIN: player ${this.player.name} joined`);
        score_obj.reset();
        this.player.playing = true;
    }

    undo() {
        // I designed the module layout poorly in some places, so a regular
        // import can't be used here for 'scores' due to a circular dependency.
        // Fall back to RequireJS's circular dependency solution of
        // `require('scores')`.
        let score_obj = require('scores')[this.player.name];
        console.log(`JOIN: player ${this.player.name} left`);
        score_obj.reset();
        this.player.playing = false;
    }

}

export default player_start;
