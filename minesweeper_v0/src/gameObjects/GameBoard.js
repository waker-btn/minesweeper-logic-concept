import {Button} from '../gameObjects/Button.js'

export class GameBoard {

    

    constructor(scene){

        this.scene = scene;
        this.gameGrid = [];
        this.gridGraphic = null;
        this.gridBox = null;

    }

    generateGridDisplay(){

        this.gridGraphic = this.scene.add.grid(
            250, 250,           // x, y (center of grid)
            400, 400,           // width, height
            40, 40,             // cellWidth, cellHeight
            undefined,          // fillColor (skipped)
            undefined,          // fillAlpha (skipped)
            0x000000,           // outlineColor
            1                   // outlineAlpha
        );

        this.gridBox = this.scene.add.graphics();
        this.gridBox.lineStyle(2, 0x000000, 1); // thickness, color, alpha
        this.gridBox.strokeRect(
            this.gridGraphic.x - this.gridGraphic.width / 2,
            this.gridGraphic.y - this.gridGraphic.height / 2,
            this.gridGraphic.width,
            this.gridGraphic.height
        );

    }

    generateGridButtons(){

        let noCol = 10;
        let noRow = 10;
        let baseRowPosition = 70;
        let baseColPosition = 70;

        for (let i=0; i < 10; i++){

            this.gameGrid[i] = []

            for (let y=0; y < 10; y++){

                 
               let button = new Button(this.scene, (baseRowPosition + (40*i)), (baseColPosition + (40*y)), 'tiles');
               button.setFrame(12);
               button.setScale(40/16);
               this.scene.add.existing(button);
               this.gameGrid[i][y] = button;


            }
        }


    }

    updateTiles(){

        for(let i=0;i < this.gameGrid.length; i++){
            for (let j=0; j < this.gameGrid[i].length; j++)
            {

                if (this.gameGrid[i][j].getHiddenValue() != 11){
                this.gameGrid[i][j].setHiddenValue(this.gameGrid[i][j].getSurrounded() - 1);
                }
                if (this.gameGrid[i][j].getHiddenValue() == -1){
                this.gameGrid[i][j].setHiddenValue(8);
                }



            }
        }

    }

}