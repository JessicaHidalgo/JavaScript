//Generar prototipo base factura
const user = {
  id: 0,
  name: ""
};
const Electric = function(obj) {
  return {
    id: obj.id || 0,
    name: obj.name || "",
    price: obj.price || 200,
    qty: obj.qty || 1
  };
};
const getitemelectric = function(qty) {
  const array = [];
  for (let i = 0; i < qty; i++) {
    array.push(
      new Electric({
        id: i + 1,
        name: `FacElec${i + 1}`,
        price: parseFloat((Math.random() * (200 - 1) + 1).toFixed(2)),
        qty: parseInt((Math.random() * (20 - 1) + 1).toFixed(0))
      })
    );
  }
  return array;
};
console.log(getitemelectric(5));

const Electricbill = function(id, name) {
  let item = {
    id: id,
    name: name,
    articulos: getitemelectric(10),
    totalprice: function() {
      return this.articulos
        .map(x => x.price * x.qty)
        .reduce((current, x) => current + x, 0);
    },
    pay: function(balance) {
      return this.totalprice() - balance;
    }
  };
  item._proto_ = Electricbill;
  return item;
};
console.log("The total price is" + new Electricbill(2, "Enero").totalprice());
console.log("You own us" + new Electricbill(2, "Enero").pay(500));

//Consumables
const consumable = function(obj) {
  return {
    id: obj.id || 0,
    name: obj.name || "",
    price: obj.price || 200,
    qty: obj.qty || 1,
    quality: obj.quality || 1,
    fresh: obj.fresh || 1
  };
};

const getitemconsumable = function(qty) {
  const array = [];
  for (let i = 0; i < qty; i++) {
    array.push(
      new consumable({
        id: i + 1,
        name: `FacElec${i + 1}`,
        price: parseFloat(Math.random() * (200 - 1) + 1).toFixed(2),
        qty: parseInt(Math.random() * (20 - 1) + 1).toFixed(0),
        quality: parseInt(Math.random() * (5 - 1) + 1).toFixed(0),
        fresh: parseInt(Math.random() * (5 - 1) + 1).toFixed(0)
      })
    );
  }
  return array;
};

const Consumablebill = function(id, name) {
  let item = Object.create(consumable);
  (item.id = id), (item.name = name), (item.articulos = getitemconsumable(10));
  item.qualityindex = function() {
    const x = this.articulos.reduce(
      (current, y) => {
        return (current = {
          fresh: current.fresh + parseInt(y.fresh),
          quality: current.quality + parseInt(y.quality)
        });
      },
      { fresh: 0, quality: 0 }
    );
    return Math.ceil(((x.fresh + x.quality) / 2) / this.articulos.length);
  };

  return item;
};

console.log(new Consumablebill(2, "Enero").qualityindex());
