///<reference path="../lib/pixi.d.ts" />
///<reference path="../engine/Scene.class.ts" />

module towngame {
    import Sprite = PIXI.Sprite;
    export class HomeScene extends Scene {
        constructor() {
            super();
            this.setBackgroundColor(0xffffff);

            var soundOn = PIXI.Sprite.fromImage("./img/musicon.png");

            var soundOff = PIXI.Sprite.fromImage("./img/musicoff.png");
            var options = PIXI.Sprite.fromImage("./img/wrench.png");
            var multiplayer = PIXI.Texture.fromImage("./img/yellowSheet.png");
            var button1 = new Sprite(new PIXI.Texture(multiplayer, new PIXI.Rectangle(0, 0, 190, 49)));
            var button2 = new Sprite(new PIXI.Texture(multiplayer, new PIXI.Rectangle(0, 0, 190, 49)));
            var text = new PIXI.Text("Slick Syndicate", {font: "50px Arial", fill: "red"});
            var bg = PIXI.Sprite.fromImage("./img/clouds.jpg");
            bg.width = ScenesManager.width;
            bg.height = ScenesManager.height;

/*//Plz include these in the server side
 var io = require('socket.io');//creates the io object which will used for communication
 var http = require("http");//include all libraries
 var url = require('url');
 var fs = require('fs');
 var io = require('socket.io');//creates the io object which will used for communication

 var server = http.createServer(function (request, response) {
 var path = url.parse(request.url).pathname;
 //console.log("NetPath = " + path);

 fs.readFile(__dirname + '/socket.html', function (error, data) {
 if (error) {//if readFile returns error
 response.writeHead(404);
 response.write("opps this doesn't exist - 404");
 response.end();
 }
 else {//normal loading of html page
 response.writeHead(200, {"Content-Type": "text/html"});
 response.write(data, "utf8");//loads the html page in utf8 format
 response.end();
 }
 });




            */
            //var socket = io.connect(); //<-Commented out but actually needed here, io is red due to the absence of declaration
            var checkvalue = 0;//initiates it, shoud NOT be 0 when returned

            socket.on('confirmation', function (data:any) {
                //check for correct connection
                checkvalue = (data.confirmation);
                socket.emit('feedback', {'feedback': checkvalue});


                socket.on('shutconnection', function(){//If connection not correct, shut down connection somehow
                    //Shut down the client website
                });
            })
            var graphics = new PIXI.Graphics();

            var rectPos = ScenesManager.width / 3;
            var rectSize = 400;

            soundOn.interactive = true;
            soundOn.on('click', function (mouseData:any) {
                soundOn.visible = false;
                soundOff.visible = true;
            });

            soundOff.interactive = true;
            soundOff.on('click', function (mouseData:any) {
                soundOn.visible = true;
                soundOff.visible = false;
            });

            soundOn.position.x = ScenesManager.width - soundOn.width;
            soundOn.position.y = 0;
            soundOff.position.x = ScenesManager.width - soundOff.width;
            soundOff.position.y = 0;
            soundOff.visible = false;

            options.interactive = true;
            options.on('click', function (mouseData:any) {
                console.log("options pressed");
                socket.emit('options');
            });
            options.position.x = ScenesManager.width - soundOn.width - options.width;
            options.position.y = 0;


            button1.scale.set(1.5, 1.5);
            button1.interactive = true;
            button1.position.x = rectPos + 80;
            button1.position.y = rectPos;
            button1.on('click', function (mouseData:any) {
                console.log("button 1 presses");
                socket.emit('play');
            });
            button2.scale.set(1.5, 1.5);
            button2.interactive = true;
            button2.position.x = rectPos + 80;
            button2.position.y = rectPos + 100;
            button2.on('click', function (mouseData:any) {
                console.log("button 2 pressed");
                socket.emit('controls');
            });

            graphics.beginFill(0x9995ae);
            graphics.lineStyle(10, 0xc3e1f9, 1);
            graphics.drawRoundedRect(rectPos, rectPos / 2, rectSize + 50, rectSize / 2, 5);
            graphics.endFill();
            text.x = rectPos / 2 + 300;
            text.y = rectPos / 2;

            this.addChild(bg);
            this.addChild(soundOn);
            this.addChild(soundOff);
            this.addChild(options);
            this.addChild(graphics);
            this.addChild(button1);
            this.addChild(button2);
            this.addChild(text);
        }

        public update() {
            super.update();
        }
        }
    }

