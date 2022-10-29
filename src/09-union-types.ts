(()=> {
  let userId: number | string;
  userId = 122;
  userId = 'hol';

  function greeting (myText:string | number) {
    if(typeof myText === 'string') {
      console.log(`string: ${myText.toLowerCase()}`);

    } else {
      console.log(`number: ${myText.toFixed(1)}`);// y este ya sabe que solo puede entrar un number, si coloco un string da error

    }
  }
greeting('miguel')
greeting(20.)
})();
