///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />
///<reference path="../engine/Collections.ts" />

module towngame {
    import Sprite = PIXI.Sprite;
    import Texture = PIXI.Texture;
    import Set = collections.Set;
    import Rectangle = PIXI.Rectangle;
    export class WorldScene extends Scene {
        constructor() {
            super();

            //PIXI.loader
            //    .add('maps/sample_indoor.tmx')
            //    .load( function () {
            //        /**
            //         *   PIXI.extras.TiledMap() is an extended PIXI.Container()
            //         *   so you can render it right away
            //         */
            //        var tileMap = new PIXI.extras.TiledMap( "maps/sample_indoor.tmx" );
            //        renderer.render( tileMap );
            //    }

            var tileMap = new PIXI.extras.TiledMap( "maps/sample_indoor.tmx" );
            this.setBackgroundColor(0x000000);

            this.addChild(tileMap);

            var start = Date.now();
            console.log("Took " + (Date.now() - start) + "ms time to generate");
        }

        private tick: number = 0;
        public update() {
            super.update();
            this.tick++;

            if (this.tick % 15 === 0) {
                var viewport: Rectangle = new Rectangle(this.x, this.y, this.height, this.width);

                var culled: number = 0;
                for (var i = 0; i < this.children.length; i++) {
                    var child = this.children[i];
                    if (viewport.contains(child.position.x, child.position.y)) {
                        child.visible = true;
                    } else {
                        culled++;
                        child.visible = false;
                    }
                }
                console.log("Culled " + (culled / this.children.length) * 100 + "% of tiles");
            }

            //this.position.x += 30;
            //this.position.y += 30;
        }
    }
}