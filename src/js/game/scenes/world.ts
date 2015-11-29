///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />
///<reference path="../engine/Collections.ts" />

module towngame {
    import Sprite = PIXI.Sprite;
    import Texture = PIXI.Texture;
    import Set = collections.Set;
    import Rectangle = PIXI.Rectangle;
    import Graphics = PIXI.Graphics;
    export class WorldScene extends Scene {
        private avatar:Graphics;
        private keys:any;

        constructor() {
            super();
            this.setBackgroundColor(0x000000);

            socket.on("world.info", (terrain:any) => {
                for (var x = 0; x < terrain.length; x++) {
                    for (var y = 0; y < terrain[x].length; y++) {
                        var sprite:Sprite;
                        var tile = terrain[x][y];
                        if (tile === 0) sprite = new Sprite(tiles[0][0]);
                        else if (tile === 1) sprite = new Sprite(tiles[2][0]);
                        sprite.x = x * 32;
                        sprite.y = y * 32;

                        this.addChild(sprite);
                    }
                }

                this.avatar = new Graphics();

                this.addChild(this.avatar);
                socket.emit('player.ready');
            });
            socket.on("player.update", (data) => {
                this.x = data.x;
                this.y = data.y;
                this.avatar.clear();
                this.avatar.beginFill(0xFF0000);
                this.avatar.drawCircle(ScenesManager.width / 2 - this.x, ScenesManager.height / 2 - this.y, 30);
                this.avatar.endFill();
            });

            this.keys = {};
            this.keys.w = this.getKey(87);
            this.keys.a = this.getKey(65);
            this.keys.s = this.getKey(83);
            this.keys.d = this.getKey(68);
        }

        private tick:number = 0;

        public update() {
            super.update();
            this.tick++;

            // Cull non-visible tiles for a performance boost
            if (this.tick % 15 === 0) {
                var viewport:Rectangle = new Rectangle(this.x, this.y, ScenesManager.width, ScenesManager.height);

                var culled:number = 0;
                for (var i = 0; i < this.children.length; i++) {
                    var child = this.children[i];
                    if (viewport.contains(child.position.x, child.position.y)) {
                        child.visible = true;
                    } else {
                        culled++;
                        child.visible = false;
                    }
                }
                console.log("Culled " + (culled / this.children.length) * 100 + "% (" + culled + ") of tiles");
            }

            // Movement
            var x = 0, y = 0;
            if (this.keys.w.isDown) y++;
            if (this.keys.s.isDown) y--;
            if (this.keys.a.isDown) x++;
            if (this.keys.d.isDown) x--;
            // Don't talk to the server unless we're moving in some direction
            if (x !== 0 || y !== 0) socket.emit('player.move', {x: x, y: y});
        }

        private getKey(keyCode) {
            var key = {};
            key.code = keyCode;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;
            //The `downHandler`
            key.downHandler = function (event) {
                if (event.keyCode === key.code) {
                    if (key.isUp && key.press) key.press();
                    key.isDown = true;
                    key.isUp = false;
                }
                event.preventDefault();
            };

            //The `upHandler`
            key.upHandler = function (event) {
                if (event.keyCode === key.code) {
                    if (key.isDown && key.release) key.release();
                    key.isDown = false;
                    key.isUp = true;
                }
                event.preventDefault();
            };

            //Attach event listeners
            window.addEventListener(
                "keydown", key.downHandler.bind(key), false
            );
            window.addEventListener(
                "keyup", key.upHandler.bind(key), false
            );
            return key;
        }
    }
}