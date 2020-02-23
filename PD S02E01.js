// 1)	Write a program that prints all prime numbers in given range. Take sub from 1-100.
const showPrimeNumber=number =>{
    if(number < 2) return false;
    for (var i = 2; i <= number/2; i++) {
        if(number%i==0)
            return false;
    }
    return true;
}
for(var j = 0; j < 10; j++){
    if(showPrimeNumber(j))
        console.log(j);
}


// 2)	Write a guessing game where the user has to guess a secret number. After every guess the program
// tells the user whether their number was too large or too small. At the end the number of tries needed should be printed.
// It counts only as one try if they input the same number multiple times consecutively. Range 1-100.


// 3)	Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.

// let numbers = [1, 2, 3, 4, 5, 6];
// const rotate = k => {
//   for (let i = 0; i <k ; i++) {
//     numbers.push(numbers[0]);
//     numbers.splice(0, 1);
//   }
//   console.log(numbers);
// }
// rotate(5);

// 4)	Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1.
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.


// fib(n){
//     if ((n == 0) || (n == 1))
//        return 1
//     else {
//        let result = (n + fib(n-1) );
//        return result;
//     }
//  }
// let a = fib(10)
// console.log(a);


// 5.)Write a code that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].
//  Has to work for both number and string. 

// let item = 'pawel';
// let change = item.split('').map(String);
// console.log(change);


// const number = 123456;
// let numbers = Array.from(number.toString()).map(Number);
// console.log(numbers)

// 6)	Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word,
//  moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

// const convertToPigLatin = (string) => { 
//       let array = string.split('');
//       var vowels = ['a','e','i','o','u'];
//       var newWord = '';
//       for(var i = 0; i < vowels.length-1; i++)  
//      {
//         for(var y = 0; y < array.length-1; y++) 
//         {
//             if(array[y] == vowels[i])
//             {
//               for(var x = y; x < array.length; x++)
//                 {
//                  newWord = newWord + array[x];
//                 }
//                 for(var n = 0; n < y; n++)
//                 { 
//                      newWord = newWord + array[n];
//                 }
//                 newWord += "ay";
//             }       
//         }
//     }
  
//     return newWord;
// }
//     console.log(convertToPigLatin()); 
// console.log(pigLatin(text));