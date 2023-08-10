function canPay(items, cost) {
    if (!Array.isArray(items) || items.length === 0) {
        console.log("Empty array. Please provide items.");
        return false;
    }
    
    const total = items.reduce((sum, item) => sum + item, 0);
    
    return total >= cost;
}

// Sample inputs and outputs
console.log(canPay([1, 2, 5], 10)); // Output: false
console.log(canPay([1, 5, 5], 10)); // Output: true
canPay([], 10); // Output: Empty array. Please provide items.
