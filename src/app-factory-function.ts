//const templateExports = require('./js-foundation/01-template');
//const {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const {getUserById} = require('./js-foundation/03-callbacks');
// const {buildMakePerson} = require('./js-foundation/05.2-factory');
// const {getAge, getUUID} = require('./plugins');
import {buildMakePerson} from './js-foundation/05.2-factory';
import  {getAge, getUUID} from './plugins';

//const id = 1;

//const user = getUserById(id, (error, user) => {
//    if(error){
//        throw new Error('User not found with id', id);
//    }
//    console.log(user);
//});

//Inyección de dependencias
const makePerson = buildMakePerson({getAge, getUUID});

const obj = {
    name: 'John',
    birthdate: '1985-10-21'
};

const john = makePerson(obj);

console.log(john);