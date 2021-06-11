class Object{
    constructor(){

    }
    getState(){
        var gameStatePosition=database.ref('GameState')
        gameStatePosition.on("value", function(data){GameState=data.val()})
       
    }
    update(state){
        database.ref('/').update({GameState:state})
    }
    start(){
        if(GameState===0){
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()
        }
    }
}