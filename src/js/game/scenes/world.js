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
    var Rectangle = PIXI.Rectangle;
    var WorldScene = (function (_super) {
        __extends(WorldScene, _super);
        function WorldScene() {
            _super.call(this);
            this.tick = 0;
            var tileMap = new PIXI.extras.TiledMap("maps/sample_indoor.tmx");
            this.setBackgroundColor(0x000000);
            this.addChild(tileMap);
            var start = Date.now();
            console.log("Took " + (Date.now() - start) + "ms time to generate");
        }
        WorldScene.prototype.update = function () {
            _super.prototype.update.call(this);
            this.tick++;
            if (this.tick % 15 === 0) {
                var viewport = new Rectangle(this.x, this.y, this.height, this.width);
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
                console.log("Culled " + (culled / this.children.length) * 100 + "% of tiles");
            }
        };
        return WorldScene;
    })(towngame.Scene);
    towngame.WorldScene = WorldScene;
})(towngame || (towngame = {}));
//# sourceMappingURL=world.js.map