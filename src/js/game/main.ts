towngame.AssetLoader.LoadAssets(function () {
    //get reference of ScenesManager;
    var scenesManager = towngame.ScenesManager;

    //create
    scenesManager.create(window.innerWidth, window.innerHeight, true);

    //create a the game scene
    var game = scenesManager.createScene('intro', towngame.IntroScene);
    var game = scenesManager.createScene('intro_western', towngame.IntroWesternScene);
    var game = scenesManager.createScene('home', towngame.HomeScene);
    var game = scenesManager.createScene('world', towngame.WorldScene);

    scenesManager.goToScene('intro');
});