import {getUserById} from "../../src/js-foundation/03-callbacks"

describe('js-foundation/03-callbacks.ts', () => {
    test('getUserById should return an error if user does not exist', (done) => {
        //Arrange
        const id = 10;
        //Act
        getUserById(id, (error, user)  => {
            //Assert
            expect(error).toBe(`User not found with id: ${id}`);;
            expect(user).toBeUndefined();

            done();
        });
    });

    test('getUserById should return id: 1, name: John Doe', (done) => {
        //Arrange
        const id = 1;
        //Act
        getUserById(id, (error, user)  => {
            //Assert
            expect(error).toBeUndefined();
            expect(user).toEqual({id: 1, name: 'John Doe'})

            done();
        });
    });
});