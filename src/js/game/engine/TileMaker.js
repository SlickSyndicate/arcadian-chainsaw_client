///<reference path="../lib/pixi.d.ts" />
var towngame;
(function (towngame) {
    var TileMaker = (function () {
        function TileMaker() {
        }
        TileMaker.MakeTiles = function (cb) {
            window.tiles = [];
            var spritesheet = PIXI.Texture.fromImage("img/TileA5.png");
            console.log("Making " + (spritesheet.width / 32) * (spritesheet.height / 32) + " tiles");
            for (var y = 0; y < (spritesheet.height / 32); y++) {
                window.tiles[y] = [];
                for (var x = 0; x < (spritesheet.width / 32); x++) {
                    window.tiles[y][x] = new PIXI.Texture(spritesheet, new PIXI.Rectangle(x * 32, y * 32, 32, 32));
                }
            }
            cb();
        };
        return TileMaker;
    })();
    towngame.TileMaker = TileMaker;
})(towngame || (towngame = {}));
//# sourceMappingURL=TileMaker.js.map