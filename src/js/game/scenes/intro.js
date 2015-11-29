///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var towngame;
(function (towngame) {
    var IntroScene = (function (_super) {
        __extends(IntroScene, _super);
        function IntroScene() {
            _super.call(this);
            this.ticks = 0;
            this.setBackgroundColor(0xffffff);
            this.logo = PIXI.Sprite.fromImage("img/logo.png");
            this.logo.scale.x = (towngame.ScenesManager.defaultWidth * 0.5) / this.logo.width;
            this.logo.scale.y = this.logo.scale.x;
            this.logo.anchor.set(0.5, 0.5);
            this.logo.alpha = 0;
            this.logo.position.x = towngame.ScenesManager.defaultWidth / 2;
            this.logo.position.y = towngame.ScenesManager.defaultHeight / 2;
            this.addChild(this.logo);
        }
        IntroScene.prototype.update = function () {
            _super.prototype.update.call(this);
            this.ticks++;
            if (this.logo.alpha < 1)
                this.logo.alpha += 0.01;
            if (this.ticks >= 200) {
                towngame.ScenesManager.goToScene('intro_western');
            }
        };
        return IntroScene;
    })(towngame.Scene);
    towngame.IntroScene = IntroScene;
})(towngame || (towngame = {}));
//# sourceMappingURL=intro.js.map