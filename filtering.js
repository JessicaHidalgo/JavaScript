//Definir un objeto
var x={
    valor1:35,
    valor2:50,
    valor3:60,
    valor4:70,
};
//Asignar a un arreglo el objeto
const newArray=Object.keys(x).filter(y=> typeof x[y]=="number").map((y)=>x[y]);
const newArray=Object.keys(x).filter(y=> typeof x[y]=="number").map((y)=>x[y]);
console.log(newArray);