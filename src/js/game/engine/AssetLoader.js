///<reference path="../lib/pixi.d.ts" />
var towngame;
(function (towngame) {
    var AssetLoader = (function () {
        function AssetLoader() {
        }
        AssetLoader.LoadAssets = function (callback) {
            var assetsToLoad = [
                "img/logo.png", "img/hackwestern_logo.png", "maps/sample_indoor.tmx", "maps/sample_map.tmx",
                "img/clouds.jpg", "img/musicon.png", "img/musicoff.png", "img/wrench.png", "img/yellowSheet.png",
                "img/roguelikeSheet_transparent.png", "img/TileA5.png", "img/backplate.svg"
            ];
            assetsToLoad.forEach(function (asset) { return PIXI.loader.add(asset); });
            PIXI.loader.once('complete', callback);
            PIXI.loader.load();
        };
        return AssetLoader;
    })();
    towngame.AssetLoader = AssetLoader;
})(towngame || (towngame = {}));
//# sourceMappingURL=AssetLoader.js.map