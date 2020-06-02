/*class PersonClass{
    constructor(Name) {
        this.name = Name;
    }
    speak(){
        console.log(this.name+" says" + "hi");
    }
}

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.name);


function PersonFunction(name){
    this.name = name;
}

console.log(typeof PersonFunction.prototype.name); */

//object
var myDog = {
    "name" :  "kass",
    "legs" : 4, 
    "tails" : 1,
    "dev" : "foxtrot"
};
console.log(myDog);
//untuk mengecek ada atau tidaknya property di object
function checkObj (checkProp) {
    console.log("test");

    if (myDog.hasOwnProperty(checkProp)){//pakai hasOwnProperty {
        return myDog[checkProp];
    }
    else{
        return "not found";
    }
}
console.log(checkObj("tails"));

//ternary operator -> one line if-else expression

function checkEqual (a,b){
    return a==b? true : false ;
}

console.log(checkEqual(6,5));

//var and let
//let tidak bisa diclare 2 kali dgn variable yg sama 
//scope var and let
//var declare globally, let declare block
//lebih aman let and const

//arrow function
//anonimus function

const magic = () =>  new Date();
var magic1 = (a,b) => a*b;
let pos=0;
document.addEventListener('click', ganti);
function ganti(){
    if(pos!=0){
        document.getElementsByTagName('body')[0].style.backgroundColor ='red';
        document.getElementsByTagName('body')[0].style.transition = 'all 2s ease-in'
        pos++;
    }else{
        document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
        document.getElementsByTagName('body')[0].style.transition = 'all 2s ease-in'
        pos--;
    }
}

//ES 6
//high order function
//filter,map dll

//spread operator
//...
 
//materi devtut
var myArray = ["apple", "grapes", "banana", 4];
//better using object than array, accessing more readable
myObject ={
    fruit1: "apple",
    fruit2: "grapes",
    fruits3: "banana",
    angka: 4
};
console.log(myArray[0]);//yang lain nya dan seterusnya
console.log(myObject.fruit1);

/*
 bagian string
*/
//access character posisiton
var textPosition = "ngetes lur";
console.log(textPosition.charAt(3));
//trim
var textTrim = "   ngetes    ";
console.log(textTrim.trim());
console.log(textTrim.trimEnd());//ngehapus whitespace setelah text
console.log(textTrim.trimStart());//menghapus whitespace sebelum text

