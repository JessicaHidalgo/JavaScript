/*import cube from 'module.js';
console.log(cube(3));*/

const array=[0,1,2,3,4];
let array2=array.map((x)=>Math.sqrt(x))
console.log(array2);

console.log(array);

let sumaValores=array.reduce((x,current)=>{
    return x +current;
},0);
console.log(sumaValores);
const newarray=[1,2,3,4];
let multiplicarValores=newarray.reduce((x,current)=>{
    return x*current;
},1);
console.log(multiplicarValores);
console.log(multiplicarValores);
//objeto
const objeto={
x:2,y:3,z:4
}
console.log(Object.values(objeto));
console.log(Object.keys(objeto));
console.log(Object.keys(objeto).map((x)=> x=="x"? "Hola":objeto[x]));
console.log(Object.values(objeto));
for(const value of newarray){
    console.log(value);
}
let iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
}
let temp = Array.from(newarray)
console.log(temp);
let temp1=[...newarray];
console.log(temp1);
//Valores de referencia 
let x1=[0,1,2];
let x01=[0,1,2];
x1=x01;
console.log(x1==x01);
let x2=[0,1,2];
let x02=[0,1,2];
console.log(x2==x02);
//Para comparar objetos to string 
console.log(undefined =! false);
const validatef=(x)=>{
    return !x ? "falsy":"truhly";
}
console.log(validatef(0));
console.log([1,2,4].toString());
