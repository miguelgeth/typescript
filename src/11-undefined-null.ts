(()=> {
  // let number: number = null;
  // let number1: number = undefined; no funciona con ninguno de los dos

  // let myNull = null;// este da un any
  // let myUndefined = undefined;// este da un any
  let myNull:null = null;// asi si da
  let myUndefined: undefined = undefined;// asi si da
  myNull = null;// funciona con su mismo tipo de dato

  // mientras se carga un componente este es null por eso se puede usar pero es un momento muy corto
  let number: number | null = null; // puede que necesitemos esto pero es muy raro
  number = 12; // tambien se puede strni | null


  const hi =(name: string | null) => {
    let hello = ' hola';
    if(name) {
      hello += name// reaccionamos un valor xd
    } else {
      hello += ' nobody'
    }
    console.log(hello); // entonces como tengo un string y un null me print los dos

  }

hi('Miguel ');
hi(null);


// otra manera mas corta
const hi2 =(name:string | null) => {
  let hello = 'hola';
  hello += name?.toLocaleLowerCase() || 'nobody';// el ? means que si name no existe me devuelve un null y me print los dos
}


})();
