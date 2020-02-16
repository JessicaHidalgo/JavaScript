var p={ 
    valor1:35,
    valor2:50,
    valor3:20,
    valor4:"Holi"};
var y= Object.create(p);

console.log(Object.keys(p));

function sumar (obj){

    return Object.keys(obj).reduce(((current,x)=> current + obj[x]),0)
}
console.log(sumar(p));
//Con arreglos
  function sumararray (arr){
    return arr.reduce((current,p)=>(current+p),0);
}
const valores = Object.keys(p).map((prop)=> p[prop]);
console.log(sumararray(valores));

if(!Array.prototype.hasOwnProperty("adding")){
    Object.defineProperty(Array.prototype,"adding",{
        value: function(){
            return this.reduce((current,p)=>current+p,0)
        }
    });
}
const newValues=[3,2,1];
console.log(newValues.adding());

