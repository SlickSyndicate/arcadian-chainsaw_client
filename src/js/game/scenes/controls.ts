/**
 * Created by user on 11/28/2015.
 */
module towngame {
    import Sprite = PIXI.Sprite;
    export class ControlScene extends Scene {
        constructor() {
            super();
            //this.setBackgroundColor(0xc3e1f9);
            var graphics = new PIXI.Graphics();

            graphics.beginFill(0xc3e1f9);
            graphics.drawRect(100,100,200,200);
            graphics.endFill();

            this.addChild(graphics);
        }
        public update(){
                super.update();
            }
        }
}

