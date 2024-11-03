// let arr = [1, 2, 3, 4, 5, 6, 7]
// let first = arr[0]
// let last = arr[arr.length - 1]
// console.log(first + last);


//3-MASALA

// let arr = [2,3,4,5,6,7,8,9]
// for(let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 1
// }
// console.log(arr);



//2-MASALA

// let arr = [1, 2134, 345, 345, 12]
// console.log(Math.max(...arr));


//4-MASALA

    
// let a = parseInt(prompt("Son kiriting"))

// for (let i = 0; i <= a; i++) {
//     if(a % i == 0) {
//       console.log(i);
//     }


//5-MASALA

// let arr1 = [1,23,456,23,455]
// let arr2 = [12,23,46,223,455]
// let resArr = []

// for(let num1 of arr1) {
//     for(let num2 of arr2) {
//         if(num1 == num2) {
//             resArr.push(num1)
//         }
//     }
// }
// console.log(resArr);



//---------|--------|---------|--------|-----------2-VAZIFA---------|--------|--------|--------|--------|--------|----

//1-MASALA

// let first = prompt("Brinchi sonni kiriting")
// let second = prompt("Ikkinchi sonni kiriting")
// let third = prompt("Uchinchi sonni kirting")

// if(first > second || second > third && third > second || second > first) {
//     alert("O'rtancha son " + second);
// }
// else if (first > third || third > second && second > third || third > first) {
//     alert("O'rtancha son " + third);
// }
// else if(second > first || first > third && third > first || first > second) {
//     alert("O'rtancha son " + first);
// }



//2-MASALA

// let num = prompt("3 xonali son kiriting") 
// let firstDigit = Math.floor(num / 100)
// if(firstDigit % 2 == 0) {
//     alert(firstDigit + " son juft");
// }
// else if (firstDigit % 2 != 0) {
//     alert(firstDigit + " son toq");
    
// }
// else {
//     alert("To'g'ri qiymat kiriting, iltimos!")
// }


//3-MASALA

// let score = prompt("Ballni kiriting:")
// let earnedScore = Math.floor(score / 1.5)
// if(earnedScore <= 100) {
//     alert(earnedScore + "% natija qayd ettingiz")
// }
// else {
//     alert("Siz noto'g'ri ball kirittingiz!")
// }



//4-MASALA

// for(let i = 5; i <= 20; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }



//5-MASALA

// let arr = ["Salom", "O'zbekiston", "Tursinboy", "iPhone", "McDonald's"]
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == "Salom") {
//         console.log(arr[i]);
//     }
//     else{
//         console.log("Salom so'zi topilmadi");
//     }
// }



//6-MASALA

// let arr = ["Salom", 456, true, "iPhone", false]
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] == `boolean`) {
//         console.log(i);
//     }
// }



//7-MASALA

// let numbers = [2, 12, 42, 31, 5, 90, 82, 28, 9, 100]; 
// let evenSum = 0;
// let oddSum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenSum += numbers[i];
//     } else {
//         oddSum += numbers[i];
//     }
// }
// console.log("Juft sonlar yig'indisi:", evenSum); 
// console.log("Toq sonlar yig'indisi:", oddSum);



//8-MASALA

// let num1 = prompt("Birinchi raqamni kiriting") * 1;
// let num2 = prompt("Ikkinchi raqamni kiriting") * 1;
// let operator = prompt("Actionni kiriting");
// let result;
// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         alert(result);
//         break;
//     case "-":
//         result = num1 - num2;
//         alert(result);
//         break;
//     case "*":
//         result = num1 * num2;
//         alert(result);
//         break;
//     case "/":
//         if (num2 !== 0) {
//             result = num1 / num2;
//             alert(result);
//         } else {
//             alert("0 ga bo'lish mumkin emas");
//         }
//         break;
//     default:
//             alert("shulardan kiriting: +, -, *, or /.");
//}



//9-MASALA


// let numbers = [15, -8, 23, -42, 7, -16, 34];
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = Math.abs(numbers[i]);
// }

// console.log(numbers);