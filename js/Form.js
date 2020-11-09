class Form {
  constructor() {
    this.title = createElement('h2');  
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }

  display(){
   
    this.title.html("Car Racing Game");
    this. title.position(130, 0);
    
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
 
      
      
      playerCount+=1;
      player.index=playerCount;
      
      player.updateCount(playerCount);
      player.name = this.input.value();
      player.update();
      this. greeting.html("Hello " + player.name );
      this. greeting.position(130, 160)
    });

  }
}
