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
const arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
  result *= arr[i]; 
}
console.log(result);

//task 4 

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

//task 5

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 == 0 && arr3[i] != 0) {
    console.log(arr3[i]);
  }
}

// LESSON-3
// task 1

const palindrome = (string) => {
    return string === string.split('').reverse().join('');
}

console.log(palindrome('шалаш'));

// task 2

const min = (a, b,) => {
  if (a < b) {
      return a;
  } else if (a > b) {
      return b;
  } else {
      return 'a = b';
  }
}

console.log(min(1,2));

const max = (a, b) => {
  if (a > b) {
      return a;
  } else if (a < b) {
      return b;
  } else {
      return 'a = b';
  }
}

console.log(max(1,2));


// task 3

const array = [0, 10, 7, 3, 0, 30, 39, 40, 100];

const addZero = arr => {
    let result = [];

    for (let i = 0; i < arr.length; i++ ) {
        if (!(arr[i] % 10)) {
            let temp = '';
            arr[i] = String(arr[i]);
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == 0) {
                    temp += 'zero';
                } else {
                    temp += arr[i][j];
                }
            }
            result.push(temp);
        } else {
            if (arr[i] == 0 ) {
                result.push('zero');
            } else {
                result.push(arr[i]);
            }
        }  
    }
    return result;
}

console.log(addZero(array));

// Lesson-4
//task 1

function sum(a){
    return function(b) {
        return a + b
    }
}

console.log(sum(5)(2));

//task 2

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text = document.querySelectorAll('p');

for (let i = 0; i < text.length; i++) {
    const changeColor = makeCount(text[i]);
    text[i].addEventListener('click', changeColor);
}

function makeCount(el) {
    let count = 0;
    return function() {
        if (count >= colors.length) {
            count = 0;
        }
        el.style.color = colors[count];
        return count++;
    }
}

//lesson-5
//task 1
const date = '2020-11-26';

const transformDate = str => {
    return str.split('-').reverse().join('.');
}

console.log(transformDate(date));

//task 2
const data = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];

const toFindCity = str => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'object') {
            for (let key in data[i]) {
                if (data[i][key].toLowerCase() == str.toLowerCase()) {
                    result.push(Object.values(data[i]).join(', '));
                }
            }
        }
    }
    return result.join('\n');
}
console.log(toFindCity('germany'));