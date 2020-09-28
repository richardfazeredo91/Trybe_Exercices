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



const addProperty = (object, key, value) => object[key] = value;

const getKeysInObject = object => Object.keys(object);

const getLengthOfObject = object => Object.keys(object).length;

const getValuesInObject = object => Object.values(object);

const allLessons = object => Object.assign({}, object);
