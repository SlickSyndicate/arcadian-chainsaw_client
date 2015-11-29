towngame.AssetLoader.LoadAssets(function () {
    var scenesManager = towngame.ScenesManager;
    scenesManager.create(window.innerWidth, window.innerHeight, true);
    var game = scenesManager.createScene('intro', towngame.IntroScene);
    var game = scenesManager.createScene('intro_western', towngame.IntroWesternScene);
    var game = scenesManager.createScene('home', towngame.HomeScene);
    var game = scenesManager.createScene('world', towngame.WorldScene);
    scenesManager.goToScene('intro');
});
//# sourceMappingURL=main.js.map