
import {GameBoard} from '../gameObjects/GameBoard.js'
import {GameLogic} from '../logic/GameLogic.js'

export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {

        this.load.spritesheet('tiles', 'assets/minesweeper.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        
     }

    create() {

        this.input.mouse.disableContextMenu();

        this.gameBoard = new GameBoard(this);
        this.gameBoard.generateGridDisplay();
        this.gameBoard.generateGridButtons();
        this.gameLogic = new GameLogic(this.gameBoard);
        this.gameLogic.buildBoard(10);
        this.gameBoard.updateTiles();

        
            
        

        
    }

    update() {
        
    }

    
    
}
