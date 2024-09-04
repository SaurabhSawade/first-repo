// Question 1
// const arr =[4,13,5,9,6,3,8];
// const sqr = arr.map(num => num*num);
// console.log(sqr);

// Question 2
// function Getgrade(score){
//     return score >= 90 ? 'A':
//     score >= 80 ? 'B':
//     score >= 70 ? 'C':
//     score >= 60 ? 'D':
//     score >= 50 ? 'E':'F' ;
// }
// console.log(Getgrade(65));
// console.log(Getgrade(75));
// console.log(Getgrade(45));
// console.log(Getgrade(95));
// console.log(Getgrade(85));

//Question 3
// const car = {
//     company: "Tata",
//     model: "Punch",
//     year: 2020
//   };
//   function changeCarYear(newYear) {
//     car.year = newYear;
//   }
//   changeCarYear(2024);
//   console.log(car.year);
// const { model, year } = car;
// console.log(`Model: ${model}`);
// console.log(`Year: ${year}`); 

//Question 4
// const arr = [7,9,11,12,5,8];
// const isPrime = arr.filter(num => {
//     if (num <= 1) return false;
//     if (num === 2) return true;
    
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
    
//     return true
// })
// console.log(isPrime);

// Question 5
// use case of map funtion:1,Transforming Data: Convert an array of objects to an array of specific properties.
//2 Changing Data Format: Convert data types or structures.
//3 Perform calculations on each element.
 //
 //filter 1:Filtering Based on Conditions
//  2 :Removing Unwanted Data and Searching Data
// 3 Validating Data:

// Reduce 
// 1reduce is used for aggregating or combining data into a single output.
// 2Calculating Averages
// 3Flattening Arrays

//Question 6
// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
//   fetchData();

//Question 7 
// const person = {
//     name: "Saurabh",
//     address: {
//       street: "Gandhi chowk",
//       city: "Indore",
//       postalCode: "453331"
//     },
//     contact: {
//       email: "xyz@gmail.com",
//       phone: "1234567990"
//     }
//   };
//   //  optional chaining
// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber);