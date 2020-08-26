var coins = function(amount:number):number {
    const coinsUsed : number[] =[];  
    const coinsAvailable : number[] =[1,2,5,10,20,50,100,500,1000 ];  
    let pos = coinsAvailable.length-1;
    while(amount >0 && pos >=0){
        if(coinsAvailable[pos]<=amount)
        {
            amount = amount - coinsAvailable[pos];
            coinsUsed.push(coinsAvailable[pos]);
            console.log("coin used: "+coinsAvailable[pos]);
        }
        else if(pos > 0){
            pos = pos -1;
        }
        if(amount ==0)
        {
            break;
        }
    }
    console.log(coinsUsed);
    return coinsUsed.length;
}
export default coins;
const count = coins(27);
console.log(count);