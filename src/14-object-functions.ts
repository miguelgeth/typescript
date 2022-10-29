(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'// mi alias


  // VETR LA 15 ES ESTO PERO 10 VECES MEJOR!!!!!!!!
  const login = (data: {email:string, password: string}) => {
    console.log(data.email, data.password);
  }
  login({
    email: 'miguel@gmail',
    password: 'password124'
  })

  const products: any[] = [];// como no le digo de que es este array me da por default un any YA EN LA OTRA CLASE NOS DICE COMO CAMBIAR ESTO
  const addProduct = (data: {
    title: string,
    date: Date,
    stock: number,
    size?: Sizes,// , ? esto es para que me de un argumetno optional
  }) => {
    products.push(data);

  }
  addProduct({
    title: 'hola',
    date: new Date(),
    stock: 12// y size? es optional
  })
  console.log(products);

})();
