// console.log("hello world");
// console.log("this is my first code");
// console.log("lets start");

//using strict mode for error handling
//strict method
// "use strict";
// function MyName(){
//    var name="jauad";
// }
// MyName();

//spread operator

// let ddd=['adsa','asd'];
// let dsw=[...ddd,'sd','sdas'];
// console.log(dsw);

//without spread operator
//push method
let ddd=['asd','asdw'];
let dss=['adas','efw'];
dss.push(ddd);
console.log(dss);
//rest parameter

function calculator(a,b,...numbers){
    //...numbers ( rest parameter)
    let sum=0;
    for(let i of numbers){
        sum=sum+i;
    }
    console.log(sum);
}
calculator(123,1243,412,412);

//dynamic function
//ai function ekta variable er moddhe rekhe amra use kori

var dada=function (vylog) {
    return vylog;

}
console.log(dada("jauad"));
//local & global variable
var name='mohammad';
//this variable is declear from outside so its global and i can use it anywhere
function fun(){
    //var name='mohammad';
//local varibale hoile aitar moddhe exicute korte hoy means console ba jai kichu kori ai function er moddhe korte hbe
}
console.log(name);
//variable hoisting
//mane assign korlam age declear korlam pore
name="rezaul"
console.log(name);
var name;


//git commands
//git bash install korbo
//file creat command touch demo.js
//git init
//git add .
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Jauadul15/af.git
//git push -u origin main
//aigula new er jnno
//existing er jnno
//git add .
//git commit -m"jaja eccha likha jabe"
//git push


//concatation
var firstName="jauadul";
var lastName="karim";
var fullName=firstName+" "+lastName;
console.log(fullName);

//convertion
var egg='30';
var milk='40';
var eggprice=parseInt(egg);//string to intiger converstion
var milkprice=parseInt(milk);
var totalprice=eggprice+milkprice;
console.log(totalprice);

//shorthand
var price=10;
//price=price+20;
price+=20;
console.log(price);
//comparison

var rabbi=29;
var rashik=25;
console.log(rabbi===rashik);//strict equality
console.log(rabbi==rashik);//loose equality
console.log(rabbi!=rashik);//loose inequality
console.log(rabbi!==rashik);//strict inequality
//presedence
var now=2022;
var myage=now-1999;
var vyage=now-1997;
console.log(now-1999<now-1997);
//strict equality
//if i use ===strict equality than its not equal beacuse nmbr and string change
//if i use == loose strict than my all value count as normal value it doesnt care about type whether it is string or nmbr
var my=5;
var sy='5';//string value
if(my===sy){
    console.log("equal");

}else{
    console.log("not equal");
}

//if else
var myTaka=500;
var food=500;
if(food>myTaka){
    console.log("BUDGET cross korse khaite parbo na")
}else if (food<myTaka){
    console.log("khaite parbo");
}else if (food===myTaka){
    console.log("khaite hbe na tor pocket e tk e thakbe na futur hoye jabi")
}
//multiple condition
var work=false;
var kabin=1500000;
var degree=3;
if(work===true && kabin>1200000 && degree>=2){
    console.log("biye korte parba")
}else{
    console.log("tor kopale biye nai chakri kor vy")
}

//nested if else

// var ssc=true;
// var classNine=true;
// var classTen=true;
//
// if(ssc==true){
//     if(classNine=true){
//         if(classTen=true){
//             console.log("ssc er jnno prepare")
//         }else
//             console.log("ssc er jnno prepare na ten pore asho")
//         console.log("move to ten")
//     }else{
//         console.log("9 e poro abar")
//     }
//     console.log("ssc dite parbe")
// }else{
//     console.log("ssc dite parbe na")
// }
//simple for loop
var i;
for(i=0;i<=10;i++){
    console.log("rashik")
}
//for of loop
//it is mostly used for array theke item gula tene ber kori
var MyCountry=['dhaka','barihsal','ctg'];
for(let MyCity of MyCountry){
    console.log(MyCity);
}

//object

var rashik={person:"good",cloths:"excellent",education:true}
console.log(rashik['education']);//bracket notation//[] diye props theke value ber korsi
console.log(rashik.cloths);//dot notation//. diye property theke value ber korsi
rashik.car=true;//add korlam r ekta property
console.log(rashik);
console.log(Object.keys(rashik));//jdi property gula dekhte chai
console.log(Object.values(rashik));//jdi value gula dekhte chai
//nested object
var rashikpro={
    person:{
        smile:true,
        looks:'handsome',
        personality:'nice'
    },
    cloths:{
        quality:'A1',
        fabric:"good"
    }
}
console.log(rashikpro['cloths']['fabric']);//object theke property,property theke property jetei thakbe ja ja lage ta ta sequencly ashbe
//for in loop from object
var rabbi={person:"good",cloths:"excellent",education:true}
for(props in rabbi){
    console.log(props+":"+rabbi[props])
    //props diye ki ki properrty ta dekhte parbo
    //property er value paowar jnno prop e first e object gula set hoye gese ekhn jdi ami dekhte chai er omddher prperty thaole
    //object[props]
    //all jdi dekhte jai first e props er por objcect er por abr props
}
//decision making statement

var rabbi={person:"good",cloths:"excellent",education:true}
if(rabbi['person']=="not_good"){
    console.log("rabbi is not a good person")
}else if(rabbi['person']=='medium'){
    console.log('chole kono rookom')
}else{
    console.log('he is good guy')
}
//function
//parameterize function
function emni(x,y){
    var z=x+y;
    console.log(z);
}
//function k call korte hoy er nam dhore nahoi kaj kore na
emni(2,424242);//calling function

//rest parameter
//it means ekta parameter diye onk gula value receive kora
//rest parameter er sign (...x)
function vy(...numbers){
    console.log(numbers);
}
vy(12,12,312,124,421,412,421);
//function return

function one(){
    return 30;
}
function two(){
    return one();
}
console.log(one()+two());
//array declaration
var friends=['rashik','shanto','rakib','sunny','saif','rajon']
console.log(friends.length);
//length koto ta ber korar jnno
console.log(friends.indexOf('saif'));
//element ta koy nmbr position e ase
console.log(friends[5]);
//index nmbr diye oi index nmbr e kon value ase oita ber kora
friends[5]='rajon kala'
//value change kora array er bhitore
console.log(friends);
//new element jog korar jnno push method
friends.push('shakil');
console.log(friends);
//last element delete korar jnno pop
friends.pop();
console.log(friends);
//element first e jog korar jnno .unshift
friends.unshift('shourav');
console.log(friends);
//element first ta delete korar jnno
friends.shift();
console.log(friends);
//while loop
var wl=0;
while(wl<15){
    console.log("valo hoye jao");
    console.log(wl);
    wl++ //value ++ nna dile infinite akare cholbe..aita mane 1 kore increase korbe
}

var ms=0;
while(ms<20){
    if(ms%2==1){
        console.log(ms);
        console.log("good");
    }ms++
}
//for loop

for(let num=0;num<=10;num++){
    console.log(num);
    console.log("onk porte hbe")
}
for(let i=0;i<=5;i+=3){
    console.log(i);
}
for(let i=10;i>=0;i-=5){
    console.log(i);
}

//loop diye array theke element ber kora

var studentsRoll=[2,3,4,5,6,7,8,9,10];
for(let i=0; i<=studentsRoll.length-1; i++){//
    console.log(studentsRoll[i]);
}
//loop break and continue

var item=[21,12,312,34,3,35,54,54,24,24,22];
for(let i=0;i<item.length;i++){
    if(item[i]>100){
        break;//break dile 100 theke brshi jei value paise er por r print hbe na
    }
    console.log(item[i])
}

var note=[21,312,423,245,345,34523,4]
for(let i=0;i<note.length;i++){
    if(note[i]>100){
        continue;//continue dile jei shb value 100 er beshi oigula bad diye print hbe
    }
    console.log(note[i]);
}

//anonymous function
var fun=function (){
    return dada;
}
console.log(fun)//this cannot be print beacuse i resign the function vyy
var fun=function (){
    return "vyy";
}
console.log(fun());
//arrow function

var fun=(...x)=>{//rest parameter
    console.log(x)
}
fun(21,31,31,4)

var run=()=>{
    return "kala"//return function
}
console.log(run());

//array
var nana=[1,2,3,4,5,6];
var nama=new Array(1,2,8,4,5,6);//array constructor diye aita kora hoise

for(let item of nama){
    console.log(item);
}
//multidymensinal array
var bd=["ctg","dhaka","raj"];
var ind=["kol","chen","mum"];
var asia=[bd,ind];//joint deya koyek ta array k
console.log(asia[1][2]);

//array destructure

var bd=["ctg","dhk","raj","khulna"];
var[ , , ,a]=bd;
console.log(a);

//this is basic javascript ######
//End this Javascript basic
//######   next task is from set map class module
