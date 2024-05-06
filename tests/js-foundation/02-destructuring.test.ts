import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring.ts', () => {
    test('characters should containt Flash, Superman', () => {
        //Arrange
        //Act
        //Assert
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });

    test('characters should containt Flash, Superman', () => {
        //Arrange
        const[flash, superman] = characters;
        //Act
        //Assert
        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
    });
});
