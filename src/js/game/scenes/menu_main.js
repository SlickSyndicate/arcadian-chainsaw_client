///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var towngame;
(function (towngame) {
    var MenuMainScene = (function (_super) {
        __extends(MenuMainScene, _super);
        function MenuMainScene() {
            _super.call(this);
            this.setBackgroundColor(0xffffff);
            var _this = this;
            var guiTitle = {
                id: 'title',
                text: 'Arcadian Conquest',
                font: {
                    size: '80px',
                    family: 'Skranji',
                    color: 'red'
                },
                component: 'Label',
                position: { x: towngame.ScenesManager.width / 2 - 300, y: towngame.ScenesManager.height / 4 },
                width: 600,
                height: 80
            };
            var guiPlayButton = {
                id: 'playButton',
                text: 'Play',
                component: 'Button',
                skin: 'bluebutton',
                padding: 4,
                position: { x: towngame.ScenesManager.width / 2 - 150, y: towngame.ScenesManager.height / 4 + 100 },
                width: 300,
                height: 80
            };
            var guiOptionsButton = {
                id: 'optionsButton',
                text: 'Options',
                component: 'Button',
                skin: 'bluebutton',
                padding: 4,
                position: { x: towngame.ScenesManager.width / 2 - 150, y: towngame.ScenesManager.height / 4 + 200 },
                width: 300,
                height: 80
            };
            EZGUI.Theme.load(['other/kenney-theme/kenney-theme.json'], function () {
                var title = EZGUI.create(guiTitle, 'kenney');
                var playButton = EZGUI.create(guiPlayButton, 'kenney');
                var optionsButton = EZGUI.create(guiOptionsButton, 'kenney');
                playButton.on('click', function (event) {
                    socket.emit('game.play');
                });
                optionsButton.on('click', function (event) {
                    towngame.ScenesManager.goToScene('options');
                });
                _this.addChild(title);
                _this.addChild(playButton);
                _this.addChild(optionsButton);
            });
            socket.on('game.play', function (data) {
                if (data.ready) {
                    socket.emit("world.info");
                    towngame.ScenesManager.goToScene('world');
                }
                else
                    alert("Unfortunately the server was unable to accept you at this time.");
            });
        }
        MenuMainScene.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return MenuMainScene;
    })(towngame.Scene);
    towngame.MenuMainScene = MenuMainScene;
})(towngame || (towngame = {}));
//# sourceMappingURL=menu_main.js.map