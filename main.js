'use strict';

// task 1

let user = 'John Doe';
console.log(user);

let student = 'Nastya';
console.log(student);

user = student;     //Nastya
console.log(user);

//task 2

let test = 1;
test +=1;
test +='1';          //'21'
console.log(test);

test = Boolean(test); //true
console.log(test);

//task 3

let result = 1;
let arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
  result *= arr[i]; 
}
console.log(result);

//task 4 

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

//task 5

let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 == 0 && arr3[i] != 0) {
    console.log(arr3[i]);
  }
}