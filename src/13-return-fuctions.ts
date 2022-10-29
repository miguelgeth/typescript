(() => {
const calcTotal = (prices: number[]) => {
  let total = 0
  prices.forEach(price => {
    total +=price;
  })
  return total
}
const rta = calcTotal([1,2,3,3,4,]);
console.log(rta);

// asi hacemos que nuestro funcion sea un string
const calcTotalV2 = (prices: number[]):string => {
  let total = 0
  prices.forEach(price => {
    total +=price;
  })
  return total.toString();// lo tenemos que pasar a string, de lo contrario no funciona
}
const rta2 = calcTotal([1,2,3,3,4,]);
console.log(rta2);


// es una funcion void , que no return nada
const printTotal = (prices:number[]): void => {// al poner esto no me deja return nada
  const rta = calcTotal(prices)
;
console.log(`el total es: ${rta}`);
printTotal([1,2,3,4])


}

})();
