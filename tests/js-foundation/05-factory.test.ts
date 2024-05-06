import { buildMakePerson } from "../../src/js-foundation/05.2-factory";

describe('js-foundation/05.2-factory', () => {
    //Arrange
    const getUUID = () => '1234';
    const getAge = () => 35;

    //Act
    //Assert
    test('buildMakePerson should return a fucntion', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
        expect(typeof makePerson).toBe('function');
    });

     //Arrange
    const obj = {
        name: 'John',
        birthdate: '1985-10-21'
    };

    test('buildMakePerson should return a person', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
        const person = makePerson(obj);
        expect(person).toEqual({
            age: 35, 
            name: 'John', 
            birthdate: '1985-10-21', 
            id: '1234'});
    });
});
