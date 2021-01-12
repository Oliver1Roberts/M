class Menu{
    constructor(){
        this.begin=createButton("");
        this.start=createButton("Start");
        this.normal=createButton("Normal Mode");
        this.hard=createButton("Hard Mode");
        this.extra=createButton("Extras");
        this.multiplayer=createButton("Multiplayer Mode");

    }

    setUp(){
        
        if(gamestate==0){
            textSize(30);
            fill("red")
            textFont(retroFont);
            text("Press any button to begin.", windowWidth/2 -370, windowHeight/2);
            this.start.hide();
            this.normal.hide();
            this.hard.hide();
            this.extra.hide();
            this.multiplayer.hide();
            this.begin.position(0,0);
            this.begin.size(windowWidth/5,windowHeight/5);
            //this.begin.hide();
            this.begin.mousePressed(()=>{
                gamestate=1;
                console.log(gamestate);
                this.begin.hide();
            })
        }
        if(gamestate==1){
            background(menuImage);
            textSize(45);
            fill("black");
            textFont(retroFont)
            text("Space Game", 920, 500);
            this.start.size(100, 100);
            this.start.position(windowWidth/2, windowHeight/2);
            this.start.show();
            this.start.mousePressed(()=>{
                gamestate=2;
                console.log(gamestate);
                this.start.hide();
            })


        }
        if(gamestate==2){
            background(menuImage);
            player0.Display();
            asteriod1.display();

            textSize(45);
            console.log(gamestate);
            }
        }
        
    }
