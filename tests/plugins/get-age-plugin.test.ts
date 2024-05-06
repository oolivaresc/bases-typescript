import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugin.ts', () => {

    test('getAge() should return the age of a person', () => {
        
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    });

    test('getAge() should return current age', () => {
        
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculateAge);
    });

    test('getAge() should return 0 years', () => {

        //console.log(new Date().getFullYear());        
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        //console.log({currentYear: new Date().getFullYear()});

        const birthdate = '1995-10-21';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
        //expect(spy).toHaveBeenCalledWith({a: 1});
    });
});
