const { getUUID, getAge } = require('../plugins');

const  buildPerson = ({name, birthdate}) => {
   return {
    id: getUUID(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate)
   } 
}

const obj = {
    name: 'John',
    birthdate: '1985-10-21'
};

const john = buildPerson(obj);

console.log(john);
