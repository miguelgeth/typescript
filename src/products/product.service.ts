import {Product} from './product.model'// nos traemos la info de p.model porque la necesitamos

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);

}

export const calcStock = ():number => {
  let total = 0;
  products.forEach(product => {
    total += product.stock;
  })
  return total
}
