var maxProfit = function(prices) {
    let pfofit = 0;
    for (let index = 0; index < prices.length - 1; ++index) {
        if(prices[index + 1]> prices[index]){
            profit += prices[index + 1] - prices[index];
        }
    }
};
//贪心算法，因为是个单向流，