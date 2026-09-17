// leetcode link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// Greedy algo

// Approach 1: 
var maxProfit = function (prices) {
    // Initialize max profit to 0
    let maxProfit = 0;

    // Loop through each day as potential buy day
    for (let i = 0; i < prices.length; i++) {
        // Loop through each future day as sell day
        for (let j = i + 1; j < prices.length; j++) {
            // Calculate profit
            let profit = prices[j] - prices[i];

            // Update max profit if higher
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    // Return the max profit
    return maxProfit;
};

//Approach 2
var maxProfit = function (prices) {
    // Initialize the minimum price to a large number
    let minPrice = Infinity;

    // Initialize the maximum profit to 0
    let maxProfit = 0;

    // Traverse each price in the array
    for (let price of prices) {
        // If current price is less than minPrice, update minPrice
        if (price < minPrice) {
            minPrice = price;
        }
        // Else calculate profit and update maxProfit if it's greater
        else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    // Return the maximum profit found
    return maxProfit;
};