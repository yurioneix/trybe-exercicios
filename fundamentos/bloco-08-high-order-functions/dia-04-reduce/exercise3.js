const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  
  const expectedResult = 20;
  
  const containsA = (array) => array
    .map((name) => name.toLowerCase())
    .reduce(
        (acc, curr) => curr.startsWith('a') || curr.startsWith('aa') || curr.endsWith('a') ? acc + curr : acc, 0)
  

  console.log(containsA(names));