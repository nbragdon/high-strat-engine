const uuidv4 = require('uuid/v4');

class Player {
    constructor() {
        this.playerBoard = null;
        this.playerId = uuidv4();
    }
}