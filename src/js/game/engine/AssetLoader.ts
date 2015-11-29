///<reference path="../lib/pixi.d.ts" />

module towngame {
    export class AssetLoader {
        public static LoadAssets(callback: Function) {
            var assetsToLoad = [
                "img/logo.png", "img/hackwestern_logo.png", "maps/sample_indoor.tmx", "maps/sample_map.tmx",
                "img/clouds.jpg","img/musicon.png","img/musicoff.png","img/wrench.png","img/yellowSheet.png",
                "DPAD_all.png","DPAD_down.png","DPAD_left.png","DPAD_right.png","DPAD_up.png"
            ];
            assetsToLoad.forEach((asset) => PIXI.loader.add(asset));
            PIXI.loader.once('complete', callback);
            PIXI.loader.load();
        }
    }
}