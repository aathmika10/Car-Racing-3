class Form{
    constructor(){
        this.title=createElement('h2')
        this.input= createInput('Name')
        this.button= createButton('play')
        this.greeting= createElement('h3')
    }
    display(){
      
        this.title.html('Car Racing Game')
        this.title.position(130,0);
        
        this.input.position(130,160);
       
        this.button.position(250,200);
       
        this.button.mousePressed(()=>{
            this.input.hide();
           this.button.hide();
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            console.log(playerCount)
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(130,160);
        })
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
}