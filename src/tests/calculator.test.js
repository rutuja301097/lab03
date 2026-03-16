const { add, subtract, multiply, divide } = require('../calculator');

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
  });
});
