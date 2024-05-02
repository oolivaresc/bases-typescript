import { getUUID, getAge } from '../plugins';
//const { getUUID, getAge } = require('../plugins');

interface PersonOptions {
    name: string;
    birthdate: string;
}

const  buildPerson = ({name, birthdate}: PersonOptions) => {
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
