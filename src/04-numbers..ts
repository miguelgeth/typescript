(()=> {// este seria nuestro scope para no tener troubles

  let price = 100;// trabajamos de manera inferida
  price = 12;

  let customerAge: number = 20; // manera explicita
  customerAge = customerAge +20
  console.log(customerAge);

  let stock: number;// si no queremos inicializarla le ponemos de manera explicita
  // console.log(stock);// no dice el error

  let discount = parseInt('123')
  console.log(discount);



})();
