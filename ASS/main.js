// No.1
function cubeNumber(number) {
    if (typeof number !== 'number' || number <= 0) {
        return "Please provide a positive number.";
    }
    
    const result = number ** 3;
    return result;
}

const input1 = 3;
const input2 = 4;

console.log(cubeNumber(input1));
console.log(cubeNumber(input2));

// No.2
function matchFinder(String1, String2) {
    if (typeof String1 !== 'string' || typeof String2 !== 'string') {
        return "ami asi re vai asi.";
    }
    
    if (String1.includes(String2)) {
        return true;
    } else {
        return false;
    }
}

console.log(matchFinder("John Doe", 766)); 
console.log(matchFinder("JavaScript", "Code")); 
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet")); 

// No.3
function sortMaker(arr){
    if(arr[0])
    if((arr[0]>0 && arr[1]>0) && (arr[0]!=arr[1])){
        return arr.sort((a,b)=>b-a);
    }

    if(arr[0]==arr[1]){
        return "equal";
    }

    if(arr[0]<0 || arr[1]<0){
        return "Invalid input";
    }   
}
     
const brr= [-2,6];
console.log(sortMaker(brr));

// No.4
function findAddress(addressObject) {
    if (typeof addressObject !== 'object' || addressObject === null) {
        return "Invalid Input";
    }

    const street = addressObject.street || "__";
    const house = addressObject.house || "__";
    const society = addressObject.society || "__";

    return `${street},${house},${society}`;
}

console.log(findAddress({street: 10, house: "15A", society: "Earth Perfect"}));
console.log(findAddress({street: 10, society: "Earth Perfect"}));
console.log(findAddress({street: 10}));

// No.5
function canPay(items, cost) {
    if (!Array.isArray(items) || items.length === 0) {
        console.log("Empty array. Please provide items.");
        return false;
    }
    
    const total = items.reduce((sum, item) => sum + item, 0);
    
    return total >= cost;
}

console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10)); 
canPay([], 10); 
