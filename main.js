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
// task 1 and lesson-6 task 1

const palindrome = string => string === string.split('').reverse().join('');

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

//task 2 and lesson-6 task 2
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

const findHotel = str => {
    const result = [];
    data.forEach(el => {
        const temp = el.country.toLowerCase() + el.city.toLowerCase() + el.hotel.toLowerCase();
        if (temp.includes(str.toLowerCase())) {
            result.push(`${el.country}, ${el.city}, ${el.hotel}`);
        }
    });
    return result.join('\n');
}
console.log(findHotel('germany'));

//  lesson-6 task 3
const hotels = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];

  const findCities = arr => {
    const result = {};
    arr.forEach(el => {
        if (!result[`${el.country}`]) {
          result[`${el.country}`] = [];
          result[`${el.country}`].push(el.city);
        } else {
          if (result[`${el.country}`].indexOf(el.city) == -1) {
            result[`${el.country}`].push(el.city);
          }
        }
    });
    return result;
  }
  

  console.log(findCities(hotels));

  //lesson-7

  const obj1 = {
    a: 'a',
    b: {
      a: 'a',
      b: 'b',
      c: {
        a: 1,
      },
    },
  };
  const obj2 = {
    b: {
      c: {
        a: 1,
      },
      b: 'b',
      a: 'a',
    },
    a: 'a',
  };
  const obj3 = {
    a: {
      c: {
        a: 'a',
      },
      b: 'b',
      a: 'a',
    },
    b: 'b',
  };
  
  const deepEqual = (object1, object2) => {
    if (object1 === object2) {   // сравниваем два объекта
      return true; 
    }
    for (let key in object1) { // перебираем ключи одного объекта и проверяем их наличие во втором объекте
      if (!(key in object2) || !deepEqual(object1[key], object2[key])) { // если ключи есть в обоих объектах, рекурсивно вызываем нашу функцию
        return false;
      }
    }
    return true; // 
  };
  
  console.log(deepEqual(obj1, obj2)); // true
  console.log(deepEqual(obj1, obj3)); // false