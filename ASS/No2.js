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
