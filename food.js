class food{
constructor(x,y){
    this.image=loadImage("Milk.png");
    
}
display(){
    var x=80,y=100
    imageMode(CENTER);
    if(this.body!==0){
        for(var i=0;i<this.body;i++){
if(i%10===0){
    x=80;
    y=y+50
}
        }
        image(this.image,x,y,30,40);
        x=x+30;

    }
}
getFoodStock(){
    var foodStockRef=database.ref('foodStock');
    foodStockRef.on("value",(data)=>{
    foodStockRef=data.val();
    })
}
updateFoodStock(stock){
    database.ref('/').update({
        foodStock:stock
    })
   
}
}