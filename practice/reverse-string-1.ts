// function reverse(str: string): string {
//     return str.split("").reverse().join("");
// }

// console.log(reverse("Jyotindra"))

// function reverse(str: string): string {
//     let reversed = "";
//     for (let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed;
//     }
//     return reversed;
// }

// console.log(reverse("Jyotindra"));

// function reverseInteger(x: number): number {
//     const INT_MAX = 2 ** 31;
//     const INT_MIN = - (2 ** 31);

//     let reversed = 0;
     
//     while(x !== 0) {
//         const digit = x % 10;
//         x = (x / 10) | 0;

//         if (reversed > Math.floor(INT_MAX / 10) || (reversed === Math.floor(INT_MAX / 10) && digit > 7)) {
//             return 0;
//         }
//         if (reversed < Math.ceil(INT_MIN / 10) || (reversed === Math.ceil(INT_MIN / 10) && digit < -8)) {
//             return 0;
//         }

//         reversed = reversed * 10 + digit
//     }

//     return reversed
// }

// console.log(reverseInteger(123456789))
