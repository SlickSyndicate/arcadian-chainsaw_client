var TileMaker = towngame.TileMaker;
$(function () {
    towngame.AssetLoader.LoadAssets(function () {
        TileMaker.MakeTiles(function () {
            window.socket = io('http://localhost:3001');
            socket.on('connect', function () {
                console.log("Connected");
                var scenesManager = towngame.ScenesManager;
                EZGUI.renderer = scenesManager.renderer;
                scenesManager.create(window.innerWidth, window.innerHeight, false);
                scenesManager.createScene('intro', towngame.IntroScene);
                scenesManager.createScene('intro_western', towngame.IntroWesternScene);
                scenesManager.createScene('menu_main', towngame.MenuMainScene);
                scenesManager.createScene('world', towngame.WorldScene);
                scenesManager.goToScene('menu_main');
            });
        });
    });
});
//# sourceMappingURL=main.js.map