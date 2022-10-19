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

  newProperty(lesson2, 'turno', 'noite');

  listKeys(lesson1);

  objectLength(lesson2);
  