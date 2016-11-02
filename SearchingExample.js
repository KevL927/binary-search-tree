// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on one day, and sell the shares on one of the following days, write an algorithm to work out what the maximum profit you could make would be.

function bestBuyAndSellDay(arr) {
	var maximumMargin=0,
		sellDay=0,
		buyDay=0;

	for(var i = 0; i < arr.length; i++){
		for(var j=i+1; j < arr.length; j++){
			if(arr[j]-arr[i] > maximumMargin){
				maximumMargin = arr[j]-arr[i];
				buyDay = i+1;
				sellDay = j+1;
			}
		}
	}
var result= "You should buy on day: " +buyDay+ " and sell on day: " + sellDay+ ". This will make your profit: " +maximumMargin;

return result;	
}


bestBuyAndSellDay([8,3,7,5,10,2,1]);


//Imagine that you wanted to find what the highest floor of a 100 story building you could drop an egg was, without the egg breaking. But you only have two eggs. Write an algorithm to work out which floors you should drop the eggs from to find this out in the most efficient way.

var counter = 0;
var x = 0;
var function1 = function (greatestNumOfLevelEggCanTake) {
    while(greatestNumOfLevelEggCanTake > x && greatestNumOfLevelEggCanTake <= 100){
        counter++;
        
            x += 10;
            
        }
        for(var y = (x - 10); y < x + 10; y++){
            if(greatestNumOfLevelEggCanTake != y){
                counter++;
                
            }
            else {
                break;
            }
        }
    return "This is the counter number:" + (counter - 1);
};


console.log(function1(35)); 