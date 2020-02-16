let x = "Holi"

let objt=new String(x);
console.log(objt);
 //Diferencia entre función y método
let obj ={
    nombre:'Jessica'

}

console.log(obj.nombre)
//Length 

const t = "Hola como estas";
console.log(t.length);
//Replace 

const y="holi";
console.log(y);

console.log(y.replace("h","H"));

const w="HOLA COMO ESTAS"
console.log(w.toLowerCase())

const q="   holi como estas   "
console.log(q.toUpperCase())

const f="   Jessica Hidalgo      "
//arreglo de caracteres 

//No funciona con arreglos ni de caracteres!!
console.log(f.trim().length,f.length)
//parámetro que recibes !!! tomar en cuenta el tamaño del valor !!
console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.NaN);
console.log(isNaN("Holi"));
console.log(isNaN(8));
console.log(isNaN('8'));

console.log(Number.parseFloat('123'));
console.log(Number.parseFloat('5.454646'));
const flag =false;
const flagC=new Boolean(true)
console.log(flagC);

const person={
    isHuman:false,
    name:'Jane Doe'
};

console.log(Object.keys(person));
console.log(Object.values(person));
person.name="Holi";
console.log(Object.values(person));
Object.freeze(person);
person.name="Holaaa";
console.log(Object.values(person));
Object.defineProperties(person,{}) 
console.log(person);
var myfunc= new Function("value1","value2",

"return value1+value2")
console.log(myfunc(4,5))
console.log(myfunc.length);
console.log(myfunc.name);
function myf (){
    console.log("Holi");
}
console.log(Number.parseFloat.toString());
//addproperty 
ob={
    a:2,
    b:3,
}
var u= Array.from("HoliHoli");
console.log(u);

var m= Array.from([2,3,9,4],x=>x+1);
console.log(m);
var z=[1,2,3,4]
console.log(Array.isArray(z));
console.log(Date.now())
console.log(Date.parse('March 8, 1994 12:00:00'));
console.log(Math.pow(2,3));
//Expresiones regulares
throw new Error('This in a error');