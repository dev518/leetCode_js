var maxProfit = function(prices) {
    let profit = 0;
    let buy = 1000000;
    for (let index = 0; index < prices.length; ++index) {
       buy = Math.min(prices[index],buy);
       profit = Math.max(profit,prices[index] - buy)
       console.log(buy ,prices[index])
    }
    return profit;
};

