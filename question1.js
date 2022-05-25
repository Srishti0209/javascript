/*

                                        Given a variety of coin types defining a currency system, 
                                        find the minimum number of coins required to express a given amount of money. 
                                        Assume an infinite supply of coins of every type.

*/

const minimumCoinsRequired = (coinsArray, amountMoney) => {

    console.log(coinsArray);
        
    const coinsObject = {};
    let minimumCoins = 0;
    /*coinsArray.array.forEach(element => {
        coinsObject[element] = element;
    });*/
    coinsArray = coinsArray.reverse();
    let amountRemaining = amountMoney;
    
    const totalNumOfCoins = coinsArray.map(coinType => {
        debugger;
        const coinTotal = parseInt(amountRemaining/coinType);
         amountRemaining = amountRemaining%coinType;
        if(amountRemaining === 0){
            return minimumCoins;
        }
        else{
            minimumCoins = minimumCoins + coinTotal;
        }
    });
    console.log(coinsObject);
    return totalNumOfCoins;
    }
    
    
    const results = minimumCoinsRequired([1,2,5,10,20,50,100], 563);
    console.log("Coins required :", results);
    
    /*
    
    50 -- > 1
    200 --> 100 -- 2 -- modulus 
    object check --> same amount value is there then return from there --> return 1;
    
    
    
    */