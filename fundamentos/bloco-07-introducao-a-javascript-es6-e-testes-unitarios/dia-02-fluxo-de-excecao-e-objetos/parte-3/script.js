const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const newProperty = (object, key, value) => {
    object[key] = value;
    console.log(object);
  }

  const listKeys = (object) => console.log(Object.keys(object));

  const objectLength = (object) => console.log(Object.entries(object).length);

  const listValues = (object) => console.log(Object.values(object));

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  const getNumberOfStudents = (obj) => {
    let total = 0;
  
    const array = Object.keys(obj); // cria um array com lesson1, lesson2, lesson3
      
    for (index in array) {
      total += obj[array[index]].numeroEstudantes; // incremente a variável total a cada iteração
    }
    return total; // a função retorna o total de alunos após as iterações do "for/in"
  };

  newProperty(lesson2, 'turno', 'noite');
  listKeys(lesson1);
  objectLength(lesson2);
  listValues(lesson3);
  console.log(allLessons);
  console.log(getNumberOfStudents(allLessons));

  
  
