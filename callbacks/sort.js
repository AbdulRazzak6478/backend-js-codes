

let arr=[3,6,1,89,53,245,-76,100,1000,10000,12,-34,-1];


arr.sort();
console.log("arr:" ,arr);

let incre_arr=arr;

incre_arr.sort(function cmp(a,b){
    return a-b;
})
console.log(incre_arr);
console.log(arr);