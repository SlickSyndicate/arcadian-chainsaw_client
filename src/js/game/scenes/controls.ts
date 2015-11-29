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
            var dUP  = PIXI.Sprite.fromImage("");
            var dDN = PIXI.Sprite.fromImage("");
            var dLF = PIXI.Sprite.fromImage("");
            var dRT = PIXI.Sprite.fromImage("");
            var dNE = PIXI.Sprite.fromImage("");
            graphics.beginFill(0xc3e1f9);
            graphics.drawRect(0,0,ScenesManager.width,ScenesManager.height);



            this.addChild(graphics);
        }
        public update(){
                super.update();
            }
        }
}

