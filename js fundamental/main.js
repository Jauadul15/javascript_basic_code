//Map


var MyMap=new Map();

MyMap.set("key1","banglades");
MyMap.set("key2","maldiv");
MyMap.set("key3","keniya");
MyMap.set("key4","sda");
MyMap.set("key5","asf");
MyMap.set("key6","asd");
console.log(MyMap.values());
console.log(MyMap.keys());

//loop for map values and keys
var MyMap=new Map();

MyMap.set("key1","banglades");
MyMap.set("key2","maldiv");
MyMap.set("key3","keniya");
MyMap.set("key4","sda");
MyMap.set("key5","asf");
MyMap.set("key6","asd");

for(let myvalue of MyMap.values()){
    console.log(myvalue);
}
for(let mykeys of MyMap.keys()){
    console.log(mykeys);
}

// method in map("get","delete","clear","has")
var Myname=new Map();

Myname.set("Key1","me");
Myname.set("Key2","amma");
Myname.set("Key3","abba");
Myname.set("Key4","bhaia");

// console.log(Myname.keys());
// console.log(Myname.values())

Myname.delete("Key1")//delete method
console.log(Myname.values());
console.log(Myname.get("Key3"));//get method er por ita console lore dekhlam ki value paisi

// Myname.clear();//clear method
for(let namgula of Myname.values()){
    console.log(namgula);
}
// has(key)

var father=new Map();

father.set("Key1","One");
father.set("Key2","two");
father.set("Key3","three");
father.set("Key4","four");

if(father.has("Key5")){
    console.log("yes")
}else{
    console.log("nai")
}

//set method

var myset=new Set()

myset.add("sadd")
myset.add("wef")
myset.add("few")

console.log(myset);

var ds=new Set(["dsa","sad","sda","s"])
//this concept is very basic we will use add method to add some value dynamicaly for add delete etc
console.log(ds);

//
var f=new Set();

f.add("rr");
f.add("sw");
f.add("swww");

if(f.has("rr")){//has method
    console.log("ase");
}else{
    console.log("nai")
}

f.delete("rr");//delete method
//f.clear();//clear method

console.log(f.values());//values method
console.log(f.size);//size method
