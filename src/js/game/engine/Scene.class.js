var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../lib/pixi.d.ts" />
var towngame;
(function (towngame) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.paused = false;
            this.updateCB = function () { };
            this.backgroundColor = 0x000000;
        }
        Scene.prototype.onUpdate = function (updateCB) {
            this.updateCB = updateCB;
        };
        Scene.prototype.update = function () {
            this.updateCB();
        };
        Scene.prototype.pause = function () {
            this.paused = true;
        };
        Scene.prototype.resume = function () {
            this.paused = false;
        };
        Scene.prototype.isPaused = function () {
            return this.paused;
        };
        Scene.prototype.getBackgroundColor = function () {
            return this.backgroundColor;
        };
        Scene.prototype.setBackgroundColor = function (backgroundColor) {
            this.backgroundColor = backgroundColor;
        };
        return Scene;
    })(PIXI.Container);
    towngame.Scene = Scene;
})(towngame || (towngame = {}));
//# sourceMappingURL=Scene.class.js.map