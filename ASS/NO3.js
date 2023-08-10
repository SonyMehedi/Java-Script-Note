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