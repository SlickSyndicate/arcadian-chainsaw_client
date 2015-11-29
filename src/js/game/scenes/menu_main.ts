///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />

module towngame {
    import Sprite = PIXI.Sprite;
    import AsciiFilter = PIXI.filters.AsciiFilter;
    import BloomFilter = PIXI.filters.BloomFilter;
    import FXAAFilter = PIXI.filters.FXAAFilter;
    export class MenuMainScene extends Scene {
        constructor() {
            super();
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
                position: { x: ScenesManager.width / 2 - 300, y: ScenesManager.height / 4 },
                width: 600,
                height: 80
            };

            var guiPlayButton = {
                id: 'playButton',
                text: 'Play',
                component: 'Button',
                skin: 'bluebutton',
                padding: 4,
                position: { x: ScenesManager.width / 2 - 150, y: ScenesManager.height / 4 + 100 },
                width: 300,
                height: 80
            };

            var guiOptionsButton = {
                id: 'optionsButton',
                text: 'Options',
                component: 'Button',
                skin: 'bluebutton',
                padding: 4,
                position: { x: ScenesManager.width / 2 - 150, y: ScenesManager.height / 4 + 200 },
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
                    ScenesManager.goToScene('options');
                });

                _this.addChild(title);
                _this.addChild(playButton);
                _this.addChild(optionsButton);
            });

            socket.on('game.play', function(data) {
                if (data.ready) {
                    socket.emit("world.info"); // Ask for the terrain now
                    ScenesManager.goToScene('world');
                } else alert("Unfortunately the server was unable to accept you at this time.")
            });
        }

        public update() {
            super.update();
        }
    }
}
