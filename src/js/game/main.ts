import TileMaker = towngame.TileMaker;

$(function() {
    towngame.AssetLoader.LoadAssets(function () {
        TileMaker.MakeTiles(function() {
            window.socket = io('http://localhost:3001');
            socket.on('connect', function() {
                console.log("Connected");
                //get reference of ScenesManager;
                var scenesManager = towngame.ScenesManager;
                EZGUI.renderer = scenesManager.renderer;

                //create
                scenesManager.create(window.innerWidth, window.innerHeight, false);

                //create a the gamers scene
                scenesManager.createScene('intro', towngame.IntroScene);
                scenesManager.createScene('intro_western', towngame.IntroWesternScene);
                scenesManager.createScene('menu_main', towngame.MenuMainScene);
                scenesManager.createScene('world', towngame.WorldScene);

                scenesManager.goToScene('menu_main');
            });
        });
    });
})
