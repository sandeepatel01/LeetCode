/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let low = Math.max(...weights);   // can't be less than heaviest package
    let high = weights.reduce((a, b) => a + b, 0); // max possible capacity
    
    const canShip = (capacity) => {
        let dayCount = 1;
        let currentLoad = 0;

        for (let weight of weights) {
            if (currentLoad + weight > capacity) {
                dayCount++;
                currentLoad = 0;
            }
            currentLoad += weight;
        }

        return dayCount <= days;
    };

    // Binary search for the minimum capacity
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (canShip(mid)) {
            high = mid;  // Try smaller capacity
        } else {
            low = mid + 1;  // Increase capacity
        }
    }

    return low;
};
