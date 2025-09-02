export class Button extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        this.hiddenValue = 8;
        this.surrounded = 0;
        this.surroundingBtns = [];
        this.clicked = false;

        

        this.setInteractive();

        this.on('pointerdown', (pointer) =>
        {
            if (pointer.button === 0){
                this.setFrame(this.hiddenValue);
                this.setClicked(true);
                if (this.hiddenValue == 8){
                    this.edgeClear();
                }
            }

            if (pointer.button === 2 && (this.frame.name == 12 || this.frame.name == 10)){
                if(this.frame.name === 12){
                    this.setFrame(10);
                } else {
                    this.setFrame(12);
                }

            }

        });

        


    }

    setHiddenValue(value){

        this.hiddenValue = value;

    }

    getHiddenValue(){

        return this.hiddenValue;

    }

    setSurrounded(value){

        this.surrounded = value;

    }

    getSurrounded(){
        return this.surrounded;
    }

    getClicked(){
        return this.clicked;
    }

    setClicked(t){
        this.clicked = t;
    }

    edgeClear(){

        this.surroundingBtns.forEach(tile => {
            tile.setFrame(tile.getHiddenValue());
            if (tile.getHiddenValue() == 8 && !tile.getClicked()){
                        tile.setClicked(true);
                        tile.edgeClear();
            } else {
                tile.setClicked(true);
            }
            

           }

    );
    }
}
