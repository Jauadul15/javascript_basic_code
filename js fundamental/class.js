//class

class sad {//class create koralm oitar nam dilam sad
    functionvy(name){//class er bhitore function create korlam
        console.log(name);
    }
    functionvy2(name){//class er bhitore ro function create  korlam
        console.log(name)
    }

}
var obj=new sad//class er object create korlam
//ekta varibale er moddhe raklam obj....and new diye ekta notun obj  create korlam sad class er
obj.functionvy("hii my name is rashik");

//object theke function gula call kortisi
obj.functionvy2("father");


//class constructor

class fun{

    constructor() {//constructor aita kothai call kora lage na auto cl hoye jai
        console.log("hadaram")
    }
}
new fun();//class er ekta object create korlam


//constructor parameter
//constructor er bhitore function diye class constructor use

class mohammad {//clas er nam disi mohammad
    constructor(a,b,c) {//constuctor use korla(parameter nilam a,b,c)
        this.aa=a;//value gula raklam aita constructor e rakhar niyom
        this.bb=b;//''
        this.cc=c;//''
    }
    hablu(){//function cl korlam
        var rst=this.aa+this.bb+this.cc;//local variable aigula
        console.log(rst);

    }
}
var hi=new mohammad(12,31,13);

//value pass korailam constructor e
//new mohammad mane ekta object create korlam mohammad class er
//ai object ta abr ekta variable er moddhe nilam hi name

hi.hablu();//obj tar shate jei function ta raksilam oita cl korlam

//static key word
//##### static keyword####

//aita use na korle class er jei property gula thake oigula class object er shate communicate korte
//pare but direct class er shate communicate korte pare na
//er ulta hbe jokhon amra static keyword use korbo
//static keyword use korle class er shate direct propert gula communicate korte parbe but
//class er object er shate communicate korte parbe na


class gf {

    static mistkae(){
        console.log("maf kore den r hbe na ai vhul");
    }

}
gf.mistkae()
// var object=new gf();
// object.mistkae();

class bf {
    static vmistkae(){
        console.log("efwwefarf");
    }

}
bf.vmistkae();


//class inheritance

class dad {

    son1(){
        console.log("pola one")
    }
    son2(){
        console.log("pola two")
    }
    son3(){
        console.log("pola three")
    }
}

class pola extends dad{

}
var obj=new pola();
obj.son3();
obj.son1();
obj.son2();

//inheritance e parents er theke child e khomota ba power beshi
//it can easily overright the data from parents to child
//aita only child e parbe or e power beshi

class bhoot {
    kala(){
        console.log("hola");
    }

}
class kalabhoot extends bhoot{
    kala(){
        console.log("hi");//change korsi but aita parents er ta r kore na
        //means modify korte parse
    }
}
var obj=new kalabhoot();
obj.kala();


//super keyword

class papa{
    my(){
        console.log("haha");
    }
}
class fy extends papa{
    ff(){
        super.my();//super keyword
    }
}
var obj=new fy()
obj.ff();

