import {addProduct,calcStock,products} from './product.service'
addProduct({
  title: 'hola',
  date: new Date(),
  stock: 12// y size? es optional
})
addProduct({
  title: 'hola',
  date: new Date(),
  stock: 12// y size? es optional
})

console.log(products);
const total = calcStock();
console.log(total);// me suma los stocks que tengo
