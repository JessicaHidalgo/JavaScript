//Definir un arreglo de 5 objetos 
const array =[
    {
    name: "Jessica",
    mobile:"4622644021",
    gender: "Femenine",
    location: "Leon",
               },
               {
                name: "Clara",
                mobile:"4622644021",
                gender: "Femenine",
                location: "Leon",
                           },
                           {
                            name: "MariaClara",
                            mobile:"4622644021",
                            gender: "Femenine",
                            location: "Leon",
                                       },
                                       {
                                        name: "Sebastian",
                                        mobile:"4622644021",
                                        gender: "Masculine",
                                        location: "Leon",
                                                   },
                                                   {
                                                    name: "Enrique",
                                                    mobile:"4622644021",
                                                    gender: "Masculine",
                                                    location: "Leon",
                                                               }
];
//console.log(array);
/*
const sort =(data) => {
   data.sort((a,b) => {
      return a.name>b.name ? 1 : a.name<b.name ? -1 : 0;
    });
};
sort(array);
console.log(array);
*/
const filter=(data,prop,value)=>{
//x es el valor de cada ciclo
    return data.filter((x) =>x[prop]===value);
};
const filterarray=filter(array,'name','Jessica');
console.log(filterarray);

//const agrupar
const group=(data,prop)=>{
    return data.reduce((current,x)=> {
        
    if(!current[x[prop]]){
      current[x[prop]]=[];  
          
    }
    current[x[prop]].push(x);
    return current;
    }, {});
}
console.log(group(array,'gender'))

const mappingColors=data => {
    return data.map(x=>{
        return{ ...x, color: x.gender === "Male" ? "Red": "Blue"};
    })
}; 

console.log(mappingColors)