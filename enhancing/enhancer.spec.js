const { repair, succeed, fail } = require('./enhancer.js');
// test away!
describe('enhance item functions', () => {
  describe('repair()', () => {
    it('takes in an item and changes durability to 100', () => {
      const item = {
        name: 'Excallibur',
        durability: 10,
        enhancement: 15,
      };

      const expected = {
        name: 'Excallibur',
        durability: 100,
        enhancement: 15,
      };

      const repairedItem = repair(item);

      expect(repairedItem).toEqual(expected);
    });
  });

  describe('succeed()', () => {
    it('should raise enhancement by 1', () => {
      const item = {
        name: 'Excallibur',
        durability: 10,
        enhancement: 15,
      };
      const expected = {
        name: 'Excallibur',
        durability: 10,
        enhancement: 16,
      };

      const enhancedItem = succeed(item);
      expect(enhancedItem).toEqual(expected);
    });
  });

  describe('fail()', () => {
    it('decrease durability by 5 if ehnacement is less than 15', () => {
      const item = {
        name: 'Excallibur',
        durability: 50,
        enhancement: 14,
      };

      const expected = {
        name: 'Excallibur',
        durability: 45,
        enhancement: 14,
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });

    it('decrease durability by 10 if ehnacement is greater than 14', () => {
      const item = {
        name: 'Excallibur',
        durability: 50,
        enhancement: 16,
      };

      const expected = {
        name: 'Excallibur',
        durability: 40,
        enhancement: 16,
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });

    it('decrease enhancement by 1 and durability by 10 if ehnacement is greater than 16', () => {
      const item = {
        name: 'Excallibur',
        durability: 50,
        enhancement: 18,
      };

      const expected = {
        name: 'Excallibur',
        durability: 40,
        enhancement: 17,
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });
    it('fail test to see if decrease enhancement by 1 and durability by 10 if enhancement is greater than 16', () => {
        const item = {
            name: 'Excallibur',
            durability: 50,
            enhancement: 19,
          };
    
          const expected = {
            name: 'Excallibur',
            durability: 40,
            enhancement: 17,
          };
    
          const failItem = fail(item);
          expect(failItem).not.toEqual(expected);
    });
  });
});