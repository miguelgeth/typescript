(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'// mi alias
  const createProductToJson = (title:string,
    date: Date,
    stock: number,
    size: Sizes
) => {// le pasamo title, etc como parametros
  return {// los pasamos como un objeto Json
    title,date,stock,size
  }
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'XL')// new Datee na una date random o la de hoy
  console.log(product1);
  console.log(product1.title);

  const createProductToJsonV2 = (title:string,
    date: Date,
    stock: number,
    size?: Sizes// ? este es el optional change creo lo que me dice es que esta variable no 100% necesitada, si quiero le paso un value sino pues no Y ME MANDA UN UNDEFINED
) => {// le pasamo title, etc como parametros
  return {// los pasamos como un objeto Json
    title,date,stock,size
  }
  }
  const product2 = createProductToJson('P1', new Date(), 12, 'XL')// new Datee na una date random o la de hoy
  console.log(product2);
  console.log(product2.size);


})();
