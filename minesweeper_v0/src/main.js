import { Start } from './scenes/Start.js';

const config = {
    type: Phaser.AUTO,
    title: 'Minesweeper',
    description: '',
    parent: 'game-container',
    width: 500,
    height: 500,
    backgroundColor: '#575757',
    pixelArt: false,
    scene: [
        Start
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            