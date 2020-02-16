const user ={
    name:"Clara",
    email:"clarita@gmail.com",
    login: function(){
        alert(`Hi ${this.name}`);
    },
    logout: function(){
        alert (`Bye ${this.name}`);
    }
};

let Admin =function(name,email){
const admin =Object.create(user);
admin.sales=5000,
admin.checkSales=function(){
        console.log(`You sold $${this.sales}`);
    }
    return admin;
}
let Customer = function(name,email){
    const customer=Object.create(user);
    customer.name=name || "Usuario",
    customer.email=email || "usuario@gmail.com",
    customer.balance=5000,
    customer.checkbalance = function() {
        console.log(`You have $${this.balance}`);
    }
    return customer;
};

const a= new Customer("Jessica","jessica@gmail.com")
const b= new Admin("Clara","clara@gmail.com")
console.log(a);
console.log(a.checkbalance());
console.log(b.checkSales());
console.log(b.name);

