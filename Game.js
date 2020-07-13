class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
        gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            player= new Player();
            player.getCount();
            console.log(playerCount);
            form=new Form();
            form.display();
        }
    }
    play(){
        form.hide();
      //  player.getCount();
        Player.getPlayerInfo()
        textSize(30);
        text("Game Start",120,100)
        if(allPlayers!==undefined){
            var display_position=130;
            for(var i in allPlayers){
                if(i==="player"+player.index){
                    fill("red");
                }
                else {
                    fill("black");
                }
                display_position+=20
                textSize(15);
                text(allPlayers[i].name+":"+allPlayers[i].distance,120, display_position);
            }
        }
        if(keyIsDown(UP_ARROW)& player.inder!==null){
            player.distance+=50;
            player.update();
        }
    }
}
