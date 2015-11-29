///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />

module towngame {
    import Sprite = PIXI.Sprite;
    export class HomeScene extends Scene {
        constructor() {
            super();
            //this.setBackgroundColor(0xffffff);

            var soundOn = PIXI.Sprite.fromImage("img/musicon.png");
            var soundOff = PIXI.Sprite.fromImage("img/musicoff.png");
            var options = PIXI.Sprite.fromImage("img/wrench.png");
            var multiplayer = PIXI.Texture.fromImage("img/yellowSheet.png");
            var button1 = new Sprite(new PIXI.Texture(multiplayer, new PIXI.Rectangle(0, 0, 190, 49)));
            var button2 = new Sprite(new PIXI.Texture(multiplayer, new PIXI.Rectangle(0, 0, 190, 49)));
            var text = new PIXI.Text("Arcadian-Chainsaw", {font: "50px Arial", fill: "black"});
            var playtext = new PIXI.Text("Play", {font:"40px Arial", fill: "black"});
            var controltext = new PIXI.Text("Controls", {font:"40px Arial", fill: "black"});
            var bg = PIXI.Sprite.fromImage("img/clouds.jpg");
            bg.width = ScenesManager.width;
            bg.height = ScenesManager.height;

            var graphics = new PIXI.Graphics();

            var rectPos = ScenesManager.width / 3;
            var rectSize = 400;

            soundOn.interactive = true;
            soundOn.on('click', function (mouseData:any) {
                soundOn.visible = false;
                soundOff.visible = true;
            });

            soundOff.interactive = true;
            soundOff.on('click', function (mouseData:any) {
                soundOn.visible = true;
                soundOff.visible = false;
            });

            soundOn.position.x = ScenesManager.width - soundOn.width;
            soundOn.position.y = 0;
            soundOff.position.x = ScenesManager.width - soundOn.width;
            soundOff.position.y = 0;
            soundOff.visible = false;

            options.interactive = true;
            options.on('click', function (mouseData:any) {
                console.log("options pressed");
            });
            options.position.x = ScenesManager.width - soundOn.width - soundOff.width;
            options.position.y = 0;


            button1.scale.set(1.5, 1.5);
            button1.interactive = true;
            button1.position.x = rectPos + 80;
            button1.position.y = rectPos;
            button1.on('click', function (mouseData:any) {
                console.log("button 1 presses");
            });
            playtext.position.x = rectPos + 90;
            playtext.position.y = rectPos + 10;

            button2.scale.set(1.5, 1.5);
            button2.interactive = true;
            button2.position.x = rectPos + 80;
            button2.position.y = rectPos + 100;
            button2.on('click', function (mouseData:any) {
                console.log("button 2 pressed");
            });
            controltext.position.x = rectPos + 90;
            controltext.position.y = rectPos + 110;

            graphics.beginFill(0x9995ae);
            graphics.lineStyle(10, 0xc3e1f9, 1);
            graphics.drawRoundedRect(rectPos, rectPos / 2, rectSize + 50, rectSize / 2, 5);
            graphics.endFill();
            text.x = rectPos / 2 + 235;
            text.y = rectPos / 2;

            this.addChild(bg);
            this.addChild(soundOn);
            this.addChild(soundOff);
            this.addChild(options);
            this.addChild(graphics);
            this.addChild(button1);
            this.addChild(button2);
            this.addChild(text);
            this.addChild(playtext);
            this.addChild(controltext);
        }

        public update() {
            super.update();
        }
    }
}
