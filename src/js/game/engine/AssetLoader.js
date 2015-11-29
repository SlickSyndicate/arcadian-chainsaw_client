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
                "DPAD_all.png", "DPAD_down.png", "DPAD_left.png", "DPAD_right.png", "DPAD_up.png"
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