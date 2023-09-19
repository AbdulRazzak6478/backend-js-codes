const arr=[1,2,3,4,5,6,7];

const arr2=arr[Symbol.iterator]();

console.log(arr);
console.log(arr2);
console.log(arr2.next);

console.log(arr2.next());
console.log(arr2.next());
console.log(arr2.next());
console.log(arr2.next());
console.log(arr2.next());
console.log(arr2.next());
console.log(arr2.next());
console.log(arr2.next());
console.log(arr2.next());