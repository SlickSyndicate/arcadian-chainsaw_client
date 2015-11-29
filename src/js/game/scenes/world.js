///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />
///<reference path="../engine/Collections.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var towngame;
(function (towngame) {
    var Sprite = PIXI.Sprite;
    var Rectangle = PIXI.Rectangle;
    var Graphics = PIXI.Graphics;
    var WorldScene = (function (_super) {
        __extends(WorldScene, _super);
        function WorldScene() {
            var _this = this;
            _super.call(this);
            this.tick = 0;
            this.setBackgroundColor(0x000000);
            socket.on("world.info", function (terrain) {
                for (var x = 0; x < terrain.length; x++) {
                    for (var y = 0; y < terrain[x].length; y++) {
                        var sprite;
                        var tile = terrain[x][y];
                        if (tile === 0)
                            sprite = new Sprite(tiles[0][0]);
                        else if (tile === 1)
                            sprite = new Sprite(tiles[2][0]);
                        sprite.x = x * 32;
                        sprite.y = y * 32;
                        _this.addChild(sprite);
                    }
                }
                _this.avatar = new Graphics();
                _this.addChild(_this.avatar);
                socket.emit('player.ready');
            });
            socket.on("player.update", function (data) {
                _this.x = data.x;
                _this.y = data.y;
                _this.avatar.clear();
                _this.avatar.beginFill(0xFF0000);
                _this.avatar.drawCircle(towngame.ScenesManager.width / 2 - _this.x, towngame.ScenesManager.height / 2 - _this.y, 30);
                _this.avatar.endFill();
            });
            this.keys = {};
            this.keys.w = this.getKey(87);
            this.keys.a = this.getKey(65);
            this.keys.s = this.getKey(83);
            this.keys.d = this.getKey(68);
        }
        WorldScene.prototype.update = function () {
            _super.prototype.update.call(this);
            this.tick++;
            if (this.tick % 15 === 0) {
                var viewport = new Rectangle(this.x, this.y, towngame.ScenesManager.width, towngame.ScenesManager.height);
                var culled = 0;
                for (var i = 0; i < this.children.length; i++) {
                    var child = this.children[i];
                    if (viewport.contains(child.position.x, child.position.y)) {
                        child.visible = true;
                    }
                    else {
                        culled++;
                        child.visible = false;
                    }
                }
                console.log("Culled " + (culled / this.children.length) * 100 + "% (" + culled + ") of tiles");
            }
            var x = 0, y = 0;
            if (this.keys.w.isDown)
                y++;
            if (this.keys.s.isDown)
                y--;
            if (this.keys.a.isDown)
                x++;
            if (this.keys.d.isDown)
                x--;
            if (x !== 0 || y !== 0)
                socket.emit('player.move', { x: x, y: y });
        };
        WorldScene.prototype.getKey = function (keyCode) {
            var key = {};
            key.code = keyCode;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;
            key.downHandler = function (event) {
                if (event.keyCode === key.code) {
                    if (key.isUp && key.press)
                        key.press();
                    key.isDown = true;
                    key.isUp = false;
                }
                event.preventDefault();
            };
            key.upHandler = function (event) {
                if (event.keyCode === key.code) {
                    if (key.isDown && key.release)
                        key.release();
                    key.isDown = false;
                    key.isUp = true;
                }
                event.preventDefault();
            };
            window.addEventListener("keydown", key.downHandler.bind(key), false);
            window.addEventListener("keyup", key.upHandler.bind(key), false);
            return key;
        };
        return WorldScene;
    })(towngame.Scene);
    towngame.WorldScene = WorldScene;
})(towngame || (towngame = {}));
//# sourceMappingURL=world.js.map