// ============================= QUESTION NO 1 ================================
let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");

if(num1>num2){
    console.log(num1 + " is greater than your another number");
}
else if(num1<num2){
    console.log(num2 + " is greater than your another number");
}
else{
    console.log("Only Numbers Are Acceptable");
}
// ============================== QUESTION NO 1 IS END ===============================


// ============================= QUESTION NO 2 ================================
let userNum = prompt("Enter Your Number ");
if(userNum<0){
    alert("It's Negative Integer")
}
else {
    alert("It's Positive Integer")
}
// ============================== QUESTION NO 2 IS END ===============================


// ============================= QUESTION NO 3 ================================
let userNum1 = +prompt("Enter Your First Number");
let userNum2 = +prompt("Enter Your Second Number");
let userNum3 = +prompt("Enter Your Third Number");
let userNum4 = +prompt("Enter Your Fourth Number");
let userNum5 = +prompt("Enter Your Fifth Number");
let largest = Math.max(userNum1 , userNum2 , userNum3 , userNum4 , userNum5)
console.log(largest + " Is Greater Number Among Another Numbers You Put")
// ============================== QUESTION NO 3 IS END ===============================



// ============================= QUESTION NO 4 ================================
for(let i =1 ; i <=15 ; i++){
    if (i % 2){
        console.log(i + " is odd")
    }
    else {
        console.log(i + " is even")
    }
}
// ============================== QUESTION NO 4 IS END ===============================


// ============================= QUESTION NO 5 ================================
let userMarks = prompt("Enter Your Marks Out Of 550");
let total = Math.round(userMarks / 550 * 100)
if(total >= 90){
    console.log("CONGRATULATION YOU ARE PASSED WITH A-1 GRADE YOUR PERCENTAGE IS " + total + "%")
}
else if(total >= 80){
    console.log("CONGRATULATION YOU ARE PASSED WITH A GRADE YOUR PERCENTAGE IS " + total + "%")
} 
else if(total >= 70){
    console.log("KEEP IT UP! YOU ARE PASSED WITH B GRADE YOUR PERCENTAGE IS " + total + "%")
} 
else if(total >= 60){
    console.log("NEED SOME WORK HARD BUT GOOD YOU ARE PASSED WITH C GRADE YOUR PERCENTAGE IS " + total + "%")
} 
else{
    console.log("YOU ARE FAIL YOUR PERCENTAGE IS " + total + "%")
}
// ============================== QUESTION NO 5 IS END ===============================


// ============================= QUESTION NO 6 ================================
for (let i = 1 ; i<=100 ; i++){
    console.log(i)
    if(i % 3 === 0 && i % 5 === 0){
        console.log( i + " is FizzBuzz")
    }
    else if(i % 3 ===0){
        console.log( i + " is Fizz")
    }
    else if(i % 5 === 0){
        console.log( i + " is Buzz")
    } 
}
// ============================== QUESTION NO 6 IS END ===============================


// ============================= QUESTION NO 7 ================================
let i,j,k;
for (i=1 ; i<=5 ; i++){
    for(k=1 ; k<=(5-i) ; k++){
        document.write("&nbsp");
    }
    for(j=1 ; j<=i ; j++){
        document.write("? ")
    }
    document.write("<br>")
}
// ============================== QUESTION NO 7 IS END ===============================
