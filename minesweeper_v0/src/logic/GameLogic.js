export class GameLogic {

    constructor (gameBoard){

        this.gameBoard = gameBoard;

    }

    generateLogic(bombs){

        let b = bombs;

        for (let n = 0; n < b; n++){
            let x = Phaser.Math.Between(0,this.gameBoard.gameGrid.length-1);
            let y = Phaser.Math.Between(0,this.gameBoard.gameGrid[0].length-1);

            if (this.gameBoard.gameGrid[x][y].getHiddenValue() != 11){
                this.gameBoard.gameGrid[x][y].setHiddenValue(11);
            } else {
                n -= 1;
            }
            

        }

    }

    buildBoard(bombs){

        this.generateLogic(bombs);

        for (let x=0; x < this.gameBoard.gameGrid.length; x++){
            for (let y=0; y<this.gameBoard.gameGrid[x].length; y++){

                if (this.gameBoard.gameGrid[x][y].getHiddenValue() == 11){ continue; } 

                this.checkSurroundings(x,y);

                


            }
        }

    }

    checkSurroundings(x,y){

                for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue; // skip the center cell

                let nx = x + dx;
                let ny = y + dy;

                if (
                    nx >= 0 && nx < this.gameBoard.gameGrid.length &&
                    ny >= 0 && ny < this.gameBoard.gameGrid[0].length
                ) {
                this.gameBoard.gameGrid[x][y].surroundingBtns.push(this.gameBoard.gameGrid[nx][ny]);
                }
            }
        }

        let count = 0;
        this.gameBoard.gameGrid[x][y].surroundingBtns.forEach(tile => {
            if (tile.getHiddenValue() === 11) {
                count++;
        }
    });

        this.gameBoard.gameGrid[x][y].setSurrounded(count);
    }

}