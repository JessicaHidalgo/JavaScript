//

var y= new Date();
console.log(y);

//Let se afecta dentro del scope de bloque 
let z=3;
console.log(z.toString);
//Definir constantes, no puede cambiar 
const x="Hola";
console.log(x.length);
//objeto
function sumar(a,b){
    return a+b;

}
console.log(sumar(5,10));
let w= (a,b)=>{
    return a+b;
}
console.log(w(4,5));

const t=[5,5,6];
let arreglo =t.map((y)=>y+1);
console.log(arreglo)
m=[5,2,"tres"];
m.map((y)=>{
    if(typeof y== "number"){
        return y+1;
    }
})
console.log(m);
m.filter((y) => typeof y=="number").map((y)=> y+1);
//reduce
console.log(m);
console.log(new Date().toDateString());
console.log(new Date().toString());
console.log(new Date().toLocaleString());
console.log(new Date().toUTCString());
console.log(new Date().toISOString());


//Closure 
const closure= (a)=>{
    return(b)=>a+b;    
    };
const closure5=closure(5);

console.log(closure5(3));
