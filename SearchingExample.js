// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on one day, and sell the shares on one of the following days, write an algorithm to work out what the maximum profit you could make would be.

function bestBuyAndSellDay(arr) {
	var leastNumber = Infinity,
		largestNumber = 0,
		leastNumberIndex = 0,
		largestNumberIndex = 0;

	for(var i = 0; i < arr.length; i++){
		if(leastNumber>arr[i] && (i < arr.length-2) ) {
			leastNumber = arr[i];
			leastNumberIndex = i;
			
		}
		
	}
	for(var j=leastNumberIndex; j< arr.length-1 ; j++ ){
		if(largestNumber < arr[j]) {
			largestNumber = arr[j];
			largestNumberIndex = j;
		}
	}

	var result="Best day to buy it is on " + (leastNumberIndex+1) + " day for " + leastNumber + " and sell it on: " + (largestNumberIndex+1) + " day for " + largestNumber +".";
	console.log(result);	
}


bestBuyAndSellDay([456,122,344,788,100,787,100]);

// function bestBuyAndSellDay(arr) {
// 	var leastNumber = Infinity,
// 		largestNumber = 0,
// 		leastNumberIndex = 0,
// 		largestNumberIndex = 0;

// 	for(var i = 0; i < arr.length; i++){
// 		if(leastNumber>arr[i] && (i < arr.length-2) && (leastNumberIndex < largestNumberIndex)) {
// 			leastNumber = arr[i];
// 			leastNumberIndex = i;
// 		}
// 		if(largestNumber < arr[i] && i > leastNumberIndex ){
// 			largestNumber = arr[i];
// 			largestNumberIndex = i;
// 		}
// 	}
// 	var result="Best day to buy it is on " + (leastNumberIndex+1) + " day for " + leastNumber + " and sell it on: " + (largestNumberIndex+1) + " day for " + largestNumber +".";
// 	console.log(result);	
// }


// bestBuyAndSellDay([456,122,344,788,100,787,100]);
