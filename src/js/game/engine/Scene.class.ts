///<reference path="../lib/pixi.d.ts" />
module towngame {
    export class Scene extends PIXI.Container {
        private paused: boolean = false;
        private updateCB = function () { };
        private backgroundColor: number = 0x000000;

        constructor() {
            super();
        }

        public onUpdate(updateCB: () => void ) {
            this.updateCB = updateCB;
        }

        public update() {
            this.updateCB();
        }
        public pause() {
            this.paused = true;
        }
        public resume() {
            this.paused = false;
        }
        public isPaused() {
            return this.paused;
        }
        public getBackgroundColor() {
            return this.backgroundColor;
        }
        public setBackgroundColor(backgroundColor: number) {
            this.backgroundColor = backgroundColor;
        }

    }

}