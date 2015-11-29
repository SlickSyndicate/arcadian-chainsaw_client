///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var towngame;
(function (towngame) {
    var Sprite = PIXI.Sprite;
    var HomeScene = (function (_super) {
        __extends(HomeScene, _super);
        function HomeScene() {
            _super.call(this);
            this.setBackgroundColor(0xffffff);
            var soundOn = PIXI.Sprite.fromImage("./img/musicon.png");
            var soundOff = PIXI.Sprite.fromImage("./img/musicoff.png");
            var options = PIXI.Sprite.fromImage("./img/wrench.png");
            var multiplayer = PIXI.Texture.fromImage("./img/yellowSheet.png");
            var button1 = new Sprite(new PIXI.Texture(multiplayer, new PIXI.Rectangle(0, 0, 190, 49)));
            var button2 = new Sprite(new PIXI.Texture(multiplayer, new PIXI.Rectangle(0, 0, 190, 49)));
            var text = new PIXI.Text("Slick Syndicate", { font: "50px Arial", fill: "red" });
            var bg = PIXI.Sprite.fromImage("./img/clouds.jpg");
            bg.width = towngame.ScenesManager.width;
            bg.height = towngame.ScenesManager.height;
            var checkvalue = 0;
            socket.on('confirmation', function (data) {
                checkvalue = (data.confirmation);
                socket.emit('feedback', { 'feedback': checkvalue });
                socket.on('shutconnection', function () {
                });
            });
            var graphics = new PIXI.Graphics();
            var rectPos = towngame.ScenesManager.width / 3;
            var rectSize = 400;
            soundOn.interactive = true;
            soundOn.on('click', function (mouseData) {
                soundOn.visible = false;
                soundOff.visible = true;
            });
            soundOff.interactive = true;
            soundOff.on('click', function (mouseData) {
                soundOn.visible = true;
                soundOff.visible = false;
            });
            soundOn.position.x = towngame.ScenesManager.width - soundOn.width;
            soundOn.position.y = 0;
            soundOff.position.x = towngame.ScenesManager.width - soundOff.width;
            soundOff.position.y = 0;
            soundOff.visible = false;
            options.interactive = true;
            options.on('click', function (mouseData) {
                console.log("options pressed");
                socket.emit('options');
            });
            options.position.x = towngame.ScenesManager.width - soundOn.width - options.width;
            options.position.y = 0;
            button1.scale.set(1.5, 1.5);
            button1.interactive = true;
            button1.position.x = rectPos + 80;
            button1.position.y = rectPos;
            button1.on('click', function (mouseData) {
                console.log("button 1 presses");
                socket.emit('play');
            });
            button2.scale.set(1.5, 1.5);
            button2.interactive = true;
            button2.position.x = rectPos + 80;
            button2.position.y = rectPos + 100;
            button2.on('click', function (mouseData) {
                console.log("button 2 pressed");
                socket.emit('controls');
            });
            graphics.beginFill(0x9995ae);
            graphics.lineStyle(10, 0xc3e1f9, 1);
            graphics.drawRoundedRect(rectPos, rectPos / 2, rectSize + 50, rectSize / 2, 5);
            graphics.endFill();
            text.x = rectPos / 2 + 300;
            text.y = rectPos / 2;
            this.addChild(bg);
            this.addChild(soundOn);
            this.addChild(soundOff);
            this.addChild(options);
            this.addChild(graphics);
            this.addChild(button1);
            this.addChild(button2);
            this.addChild(text);
        }
        HomeScene.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return HomeScene;
    })(towngame.Scene);
    towngame.HomeScene = HomeScene;
})(towngame || (towngame = {}));
//# sourceMappingURL=home.js.map