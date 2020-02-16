const ternary= (x)=>{
    return x>=60 ? "Pasa": "Reprobado";
}
const ternaryifelse= (x)=>{
    return x>=60 ? "Hola" : x>=50 ? "Holi"
}
console.log(ternary(50));
console.log(ternary(60));
const ternarynull= (x)=>{
    return x ||'Holi';
}
console.log(ternarynull());
console.log(ternarynull(5));