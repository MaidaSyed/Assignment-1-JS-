// ============================ QUESTION NUMBER 1 START ==================================
// function add(num1){
//     return function(num2){
//         console.log(num1 + num2);
//     }
// }
// let innerValue1 = add(4);
// let innerValue2 = add(7);
// innerValue1(7);
// innerValue2(4);
// ============================ QUESTION NUMBER 1 END ==================================


// ============================ QUESTION NUMBER 2 START ==================================
// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
// function find(num){
//     if(arr > 1){
//         return arr.length * find(arr.length - 1);
//     }
//     return false;

// }
// console.log(find(arr.length));
// ==============f============== QUESTION NUMBER 2 END ==================================


// ============================ QUESTION NUMBER 3 START ==================================
// function addPara(){
//     const para = document.createElement("p");
//     para.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptatum officiis debitis inventore, pariatur asperiores totam culpa, voluptatibus sapiente perspiciatis corporis aliquam laborum praesentium distinctio atque voluptatem. Explicabo, dolor? Ullam.";
//     para.style.textAlign = "center";
//     para.style.margin = "200px";
//     para.style.padding = "50px";
//     para.style.backgroundColor = "aqua";
//     para.style.fontSize = "20px";
//     document.body.append(para);
// }
// addPara();
// ============================ QUESTION NUMBER 3 END ==================================


// ============================ QUESTION NUMBER 4 START ==================================
// const list = document.getElementById("list");
// function data(){
//     const li = document.createElement("li");
//     li.innerHTML = "Monday" + "<br>" + "Tuesday" + "<br>" + "Wednesday"+ "<br>" + "Thursday"+ "<br>" + "Friday" + "<br>" + "Saturday"+ "<br>" + "Sunday";
//     list.appendChild(li);
// }
// data();
// ============================ QUESTION NUMBER 4 END ==================================


// ============================ QUESTION NUMBER 5 START ==================================
// let para = document.querySelector("p");
// para.innerText =
//   "Scared Of Getting Older Baby; Don't Wanna Face The World Ahead Of Me; I'm Dealing With Enough Already; I Hate How Fast The Time Changes";
// para.style.textAlign = "center";
// para.style.padding = "10px";
// para.style.fontSize = "24px";

//   setInterval(function randomColor() {
//   let bgColor = Math.floor(Math.random() * 16777215).toString(16);
//   let textColor = Math.floor(Math.random()*16777215).toString(16);
//   para.style.backgroundColor = "#" + bgColor;
//   para.style.color = "#" + textColor;

// }, 500);
// ============================ QUESTION NUMBER 5 END ==================================


// ============================ QUESTION NUMBER 6 START ==================================
// let obj = {
//     name: "Maida Syed",
//     age: 17,
//     id: 44032,
//     teacher: "Sir Ishaq",
// };
// function store(get , id){
//     let put = JSON.stringify(get);
//     localStorage.setItem("id" , put);
// }
// store(obj , "localStore");
// ============================ QUESTION NUMBER 6 END ==================================


// ============================ QUESTION NUMBER 7 START ==================================
// let obj = {
//         name: "Maida Syed",
//         age: 17,
//         id: 44032,
//     };
//     function store(){
//         let put = JSON.stringify(obj);
//         localStorage.setItem("obj" , put);

//         let again = JSON.parse(localStorage.getItem("obj"));
//         console.log(again);
//     }
//     store();
// ============================ QUESTION NUMBER 7 END ==================================


// ============================ QUESTION NUMBER 8 START ==================================
// let stdData = {
//     name: "Kiran",
//     class: "XI",
//     age: 17,
//     teacher: "Sir Tabseer",
// }
// function dataStore(){
//     let nameStoreInString = JSON.stringify(stdData.name);
//     localStorage.setItem("name" , nameStoreInString );

//     let classStoreInString = JSON.stringify(stdData.class);
//     localStorage.setItem("class" , classStoreInString );

//     let ageStoreInString = JSON.stringify(stdData.age);
//     localStorage.setItem("age" , ageStoreInString );

//     let teacherStoreInString = JSON.stringify(stdData.teacher);
//     localStorage.setItem("teacher" , teacherStoreInString );

//     let nameInConsole = localStorage.getItem("name");
//     let classInConsole = localStorage.getItem("class");
//     let ageInConsole = localStorage.getItem("age");
//     let teacherInConsole = localStorage.getItem("teacher");

//     return objInConsole = {
//         name: nameInConsole,
//         class: classInConsole,
//         age: ageInConsole,
//         teacher: teacherInConsole,
//     }
// }
// console.log(dataStore());
// ============================ QUESTION NUMBER 8 END ==================================

