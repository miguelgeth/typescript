(()=> {
  let dinamic:any;//any thing can be here
  dinamic = 100;// entcones NO USAR ANY!!!!!!!!!! solo se usa en una migracion
  dinamic = true;
  dinamic = 'hola';

  let n = 10;// si lo intento con esta me da error y me explica el error tengo que pasarlo a any
  const rta = (n as string).toLowerCase();
  // otra manera de cambiar el tipo de dato
  const rta2 = (<number>dinamic ).toFixed();

})();
