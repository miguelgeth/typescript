(()=> {
  let prices = [1,2,3,4,5];
  prices.push(6)
  // prices.push('hola') en ts no me deja en boolean ni string en js si
  console.log(prices);

  let all = ['hola',true]//asi si deja pero no number
  all.push('bye')
  all.push(false)

  //otra manera

  let mixed: (number | string | boolean | object)[] = ['hola',true]
  mixed.push(2)// asi si me daja y con object me deja tambien arrays {} ,[]
  mixed.push([])
  mixed.push({})


  let n =[1,2,3]
  n.map(item => item *2)
  const pricess:(number | string)[] = [12,4,4,'adfa'];// asi definimos un arrya


})();
