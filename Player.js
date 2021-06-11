class Player{
    constructor(){

    }
    getCount(){
        var playerCountPosition=database.ref('PlayerCount')
        playerCountPosition.on("value",function(data){PlayerCount=data.val()});

    }
    updateCount(count){
        database.ref('/').update({PlayerCount:count})
    }
    update(name){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({name:Name})
    }
}