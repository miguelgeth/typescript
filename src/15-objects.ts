(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'// mi alias
  type Product = {
    title: string,
    date: Date,
    stock: number,
    size?: Sizes
  }


  const products: Product[] = [];//Y ASI LE PODEMOS PASAR SOLO LO QUE TENGA PRODUCT Y NO CUALQUIER COSA COMO TENIAMOS CON ANY

  const addProduct = (data: Product) => {
    products.push(data);

  }
  addProduct({
    title: 'hola',
    date: new Date(),
    stock: 12// y size? es optional
  })
  console.log(products);
  products.push({
    title: 'hol',
    date: new Date(),
    stock: 15,
    size: 'L'
  })

})();
