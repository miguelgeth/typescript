(()=> {
  type UserId = string | number ;//esto es exclusivo de ts, asi creamos nuestros propios alias type


  let userId: UserId;
  function greeting (userId: UserId , size: Sizes, sNumber: SizeNumber) {//parametro: alias type, literal type
    if(typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);

    }
  }
  greeting(1111, 'S', 30)// wow al poner 'aca dentro me salen las opcions de my literal type'
  greeting('hola', 'L', 49)// tneemos string | number y aca pusimos el string , arriba tenemos el number

  // vamos a crear nuestro propi literal type
  type Sizes = 'S'| 'M'| 'L' |'XL';

  //literal types
  let shirtSize : Sizes;
  // let shirtSize : 'S'| 'M'| 'L' |'XL';//asi prevenimos error porque neceistamos un string exacto con la letra mayus, si coloco otras cosa no sirve
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  type SizeNumber = 30 | 49 | 39;// tambien lo podemos hacer con numbers
})();
