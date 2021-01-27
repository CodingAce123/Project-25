class dustbin{
constructor(x,y){

this.x = x;
this.y = y;
this.dustbinWidth = 200;
this.dustbinHeight = 213;
this.wallThickness = 20;

this.image = loadImage("dustbingreen.png")
this.LeftWall = Bodies.rectangle(this.x - this.dustbinWidth/2,this.y - this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
this.DownWall = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
this.RightWall = Bodies.rectangle(this.x + this.dustbinWidth/2,this.y - this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
		
World.add(world,this.LeftWall)
World.add(world,this.DownWall)
World.add(world,this.RightWall)
}
	
display(){
var Leftpos = this.LeftWall.position;
var Downpos = this.DownWall.position;
var Rightpos = this.RightWall.position;
push()
translate(Leftpos.x,Leftpos.y);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS)
fill(255)
rotate(this.angle)
//rect(0,0,this.wallThickness,this.dustbinHeight);
pop()

push()
translate(Rightpos.x,Rightpos.y);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS)
fill(255)
rotate(-1*this.angle)
//rect(0,0,this.wallThickness,this.dustbinHeight);
pop()

push()
translate(Downpos.x,Downpos.y+10);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS)
fill(255)
imageMode(CENTER);
image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
//rect(0,0,this.dustbinWidth, this.wallThickness);
pop()
}
}

