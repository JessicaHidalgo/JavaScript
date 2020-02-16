var o = {prop:37};

function independent(){
    return this.prop;
}
o.f=independent;

console.log(o.f());

let newProp=5;
var x ={
    prop:35,
    f: function() {
        return this.prop;
    }, a:() => {
        return x.prop;
    }
}
console.log(x.f());
console.log(x.a());


var o ={f:function(){return this.a+ this.b;}};
var p =Object.create(o);
p.a=1;
p.b=4;
console.log(p.f());
//prototype inherintance 

let animal ={
    eats:true
};
let rabbit={
    jumps:true
};
var h=Object.create(rabbit)
rabbit._proto_ = animal;
console.log(rabbit._proto_ === animal);
console.log(rabbit.jumps);
//