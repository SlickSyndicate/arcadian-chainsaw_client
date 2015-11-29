///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />

module towngame {
    export class IntroScene extends Scene {
        private logo:PIXI.Sprite;
        private ticks:number = 0;

        constructor() {
            super();
            this.setBackgroundColor(0xffffff);

            this.logo = PIXI.Sprite.fromImage("img/logo.png");

            this.logo.scale.x = (ScenesManager.defaultWidth * 0.5) / this.logo.width;
            this.logo.scale.y = this.logo.scale.x;

            this.logo.anchor.set(0.5, 0.5);
            this.logo.alpha = 0;

            // move the sprite to the center of the screen
            this.logo.position.x = ScenesManager.defaultWidth / 2;
            this.logo.position.y = ScenesManager.defaultHeight / 2;

            this.addChild(this.logo);
        }

        public update() {
            super.update();
            this.ticks++;
            if (this.logo.alpha < 1) this.logo.alpha += 0.01;

            if (this.ticks >= 200) {
                ScenesManager.goToScene('intro_western');
            }
        }
    }
}