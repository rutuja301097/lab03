const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    // Basic operations from image
    test('2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two numbers', () => {
      expect(add(1, 2)).toBe(3);
    });

    test('should add multiple numbers', () => {
      expect(add(1, 2, 3, 4, 5)).toBe(15);
    });

    test('should handle negative numbers', () => {
      expect(add(-5, 3)).toBe(-2);
      expect(add(-10, -20)).toBe(-30);
    });

    test('should handle decimals', () => {
      expect(add(1.5, 2.5)).toBe(4);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should return 0 when no arguments provided', () => {
      expect(add()).toBe(0);
    });

    test('should handle single number', () => {
      expect(add(42)).toBe(42);
    });

    test('should handle zero', () => {
      expect(add(0, 0)).toBe(0);
      expect(add(5, 0)).toBe(5);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    // Basic operation from image
    test('10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract multiple numbers in sequence', () => {
      expect(subtract(10, 2, 3)).toBe(5);
      expect(subtract(20, 5, 3, 2)).toBe(10);
    });

    test('should handle negative numbers', () => {
      expect(subtract(-5, 3)).toBe(-8);
      expect(subtract(10, -5)).toBe(15);
      expect(subtract(-10, -5)).toBe(-5);
    });

    test('should handle decimals', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
      expect(subtract(10.1, 5.05)).toBeCloseTo(5.05);
    });

    test('should handle single number', () => {
      expect(subtract(42)).toBe(42);
    });

    test('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should throw error with no arguments', () => {
      expect(() => subtract()).toThrow('At least one number is required');
    });

    test('should result in negative when subtracting larger from smaller', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('Multiplication', () => {
    // Basic operation from image
    test('45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('should multiply multiple numbers', () => {
      expect(multiply(2, 3, 4)).toBe(24);
      expect(multiply(1, 2, 3, 4, 5)).toBe(120);
    });

    test('should handle negative numbers', () => {
      expect(multiply(-5, 3)).toBe(-15);
      expect(multiply(-5, -3)).toBe(15);
      expect(multiply(-2, -3, -4)).toBe(-24);
    });

    test('should handle decimals', () => {
      expect(multiply(2.5, 2)).toBe(5);
      expect(multiply(1.5, 2)).toBe(3);
    });

    test('should return 1 when no arguments provided', () => {
      expect(multiply()).toBe(1);
    });

    test('should handle single number', () => {
      expect(multiply(42)).toBe(42);
    });

    test('should return 0 when multiplying by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 100)).toBe(0);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });

    test('should handle one as identity', () => {
      expect(multiply(1, 5)).toBe(5);
      expect(multiply(100, 1)).toBe(100);
    });
  });

  describe('Division', () => {
    // Basic operation from image
    test('20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should divide multiple numbers in sequence', () => {
      expect(divide(100, 2, 5)).toBe(10);
      expect(divide(48, 2, 2, 2)).toBe(6);
    });

    test('should handle negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
    });

    test('should handle decimals', () => {
      expect(divide(5.5, 2.5)).toBeCloseTo(2.2);
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should handle single number', () => {
      expect(divide(42)).toBe(42);
    });

    test('should throw error with no arguments', () => {
      expect(() => divide()).toThrow('At least one number is required');
    });

    test('should throw error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing by zero in sequence', () => {
      expect(() => divide(100, 5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle division resulting in fraction', () => {
      expect(divide(5, 2)).toBe(2.5);
      expect(divide(7, 2)).toBe(3.5);
    });

    test('should handle division by one as identity', () => {
      expect(divide(5, 1)).toBe(5);
      expect(divide(100, 1)).toBe(100);
    });

    test('should handle zero as dividend', () => {
      expect(divide(0, 5)).toBe(0);
      expect(divide(0, 100)).toBe(0);
    });
  });

  describe('Modulo', () => {
    // Basic operation from extended operations image
    test('5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should return remainder of division', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should handle exact division', () => {
      expect(modulo(10, 5)).toBe(0);
      expect(modulo(12, 4)).toBe(0);
    });

    test('should handle modulo with 1', () => {
      expect(modulo(5, 1)).toBe(0);
      expect(modulo(100, 1)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(modulo(-5, 2)).toBe(-1);
      expect(modulo(5, -2)).toBe(1);
      expect(modulo(-5, -2)).toBe(-1);
    });

    test('should handle decimals', () => {
      expect(modulo(5.5, 2)).toBe(1.5);
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });

    test('should throw error on division by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle zero as dividend', () => {
      expect(modulo(0, 5)).toBe(0);
      expect(modulo(0, 100)).toBe(0);
    });

    test('should handle large numbers', () => {
      expect(modulo(1000, 7)).toBe(6);
    });

    test('should work with divisor larger than dividend', () => {
      expect(modulo(3, 10)).toBe(3);
      expect(modulo(7, 15)).toBe(7);
    });
  });

  describe('Power', () => {
    // Basic operation from extended operations image
    test('2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should raise base to exponent', () => {
      expect(power(2, 8)).toBe(256);
      expect(power(3, 3)).toBe(27);
    });

    test('should handle power of 0 (any number to 0 is 1)', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(100, 0)).toBe(1);
      expect(power(0, 0)).toBe(1);
    });

    test('should handle power of 1', () => {
      expect(power(5, 1)).toBe(5);
      expect(power(100, 1)).toBe(100);
    });

    test('should handle base of 1', () => {
      expect(power(1, 5)).toBe(1);
      expect(power(1, 100)).toBe(1);
    });

    test('should handle negative exponents (fractions)', () => {
      expect(power(2, -1)).toBe(0.5);
      expect(power(10, -2)).toBe(0.01);
    });

    test('should handle negative base with even exponent', () => {
      expect(power(-2, 2)).toBe(4);
      expect(power(-3, 4)).toBe(81);
    });

    test('should handle negative base with odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
      expect(power(-5, 3)).toBe(-125);
    });

    test('should handle decimal bases', () => {
      expect(power(2.5, 2)).toBe(6.25);
      expect(power(0.5, 2)).toBe(0.25);
    });

    test('should handle decimal exponents', () => {
      expect(power(16, 0.5)).toBe(4);
      expect(power(27, 1/3)).toBeCloseTo(3);
    });

    test('should handle base of 0', () => {
      expect(power(0, 5)).toBe(0);
      expect(power(0, 100)).toBe(0);
    });

    test('should handle large exponents', () => {
      expect(power(2, 10)).toBe(1024);
      expect(power(10, 5)).toBe(100000);
    });
  });

  describe('Square Root', () => {
    // Basic operation from extended operations image
    test('√16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect squares', () => {
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(9)).toBe(3);
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of decimals', () => {
      expect(squareRoot(4.84)).toBe(2.2);
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should handle square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle square root of 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414213562, 5);
      expect(squareRoot(10)).toBeCloseTo(3.162277660, 5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
      expect(() => squareRoot(-16)).toThrow('Cannot calculate square root of a negative number');
      expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle very small positive numbers', () => {
      expect(squareRoot(0.01)).toBe(0.1);
      expect(squareRoot(0.0001)).toBe(0.01);
    });

    test('should handle large numbers', () => {
      expect(squareRoot(10000)).toBe(100);
      expect(squareRoot(1000000)).toBe(1000);
    });
  });

  describe('Edge Cases Across All Operations', () => {
    test('should handle very small decimals', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle mixed positive and negative', () => {
      expect(add(10, -5, -2)).toBe(3);
      expect(multiply(2, -3, 4, -1)).toBe(24);
    });

    test('should maintain precision in chained operations', () => {
      const result = divide(100, 4);
      expect(add(result, 10)).toBe(35);
    });

    test('should combine advanced operations', () => {
      // 2^3 = 8, then modulo 5
      const powerResult = power(2, 3);
      expect(modulo(powerResult, 5)).toBe(3);
    });

    test('should combine sqrt with other operations', () => {
      // √16 = 4, then multiply by 5
      const sqrtResult = squareRoot(16);
      expect(multiply(sqrtResult, 5)).toBe(20);
    });
  });
});

