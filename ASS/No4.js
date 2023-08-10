function findAddress(addressObject) {
    if (typeof addressObject !== 'object' || addressObject === null) {
        return "Invalid Input";
    }

    const street = addressObject.street || "__";
    const house = addressObject.house || "__";
    const society = addressObject.society || "__";

    return `${street},${house},${society}`;
}

// Sample inputs and outputs
console.log(findAddress({street: 10, house: "15A", society: "Earth Perfect"})); // Output: 10,15A,Earth Perfect
console.log(findAddress({street: 10, society: "Earth Perfect"})); // Output: 10,__,Earth Perfect
console.log(findAddress({street: 10})); // Output: 10,__,__ 
