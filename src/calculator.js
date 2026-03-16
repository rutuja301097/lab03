#!/usr/bin/env node

/**
 * CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition: add two or more numbers
 * - Subtraction: subtract numbers in sequence
 * - Multiplication: multiply two or more numbers
 * - Division: divide numbers in sequence with error handling for division by zero
 * - Modulo: return remainder of division between two numbers
 * - Power: raise a base number to an exponent
 * - Square Root: calculate the square root of a number with error handling for negatives
 * 
 * Usage:
 *   calculator.js add <num1> <num2> [<num3> ...]
 *   calculator.js subtract <num1> <num2> [<num3> ...]
 *   calculator.js multiply <num1> <num2> [<num3> ...]
 *   calculator.js divide <num1> <num2> [<num3> ...]
 *   calculator.js modulo <num1> <num2>
 *   calculator.js power <base> <exponent>
 *   calculator.js sqrt <num>
 */

// Addition: sum all numbers
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Subtraction: subtract in sequence from first number
function subtract(...numbers) {
  if (numbers.length === 0) throw new Error('At least one number is required');
  return numbers.reduce((diff, num) => diff - num);
}

// Multiplication: multiply all numbers
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Division: divide in sequence from first number
function divide(...numbers) {
  if (numbers.length === 0) throw new Error('At least one number is required');
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      throw new Error('Division by zero is not allowed');
    }
  }
  return numbers.reduce((quotient, num) => quotient / num);
}

// Modulo: return remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a % b;
}

// Power: return base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: return the square root of n
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI functionality - only run when executed directly, not when imported
if (require.main === module) {
  const args = process.argv.slice(2);

  // Validate command line arguments
  if (args.length < 2) {
    console.error('Usage: calculator.js <operation> <num1> [<num2> ...]');
    console.error('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const numbers = args.slice(1).map(num => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) {
      console.error(`Error: "${num}" is not a valid number`);
      process.exit(1);
    }
    return parsed;
  });

  let result;

  try {
    if (operation === 'add') {
      result = add(...numbers);
      console.log(`${numbers.join(' + ')} = ${result}`);
    } else if (operation === 'subtract') {
      result = subtract(...numbers);
      console.log(`${numbers.join(' - ')} = ${result}`);
    } else if (operation === 'multiply') {
      result = multiply(...numbers);
      console.log(`${numbers.join(' × ')} = ${result}`);
    } else if (operation === 'divide') {
      result = divide(...numbers);
      console.log(`${numbers.join(' ÷ ')} = ${result}`);
    } else if (operation === 'modulo') {
      if (numbers.length !== 2) {
        console.error('Error: Modulo requires exactly 2 numbers');
        process.exit(1);
      }
      result = modulo(numbers[0], numbers[1]);
      console.log(`${numbers[0]} % ${numbers[1]} = ${result}`);
    } else if (operation === 'power') {
      if (numbers.length !== 2) {
        console.error('Error: Power requires exactly 2 numbers (base and exponent)');
        process.exit(1);
      }
      result = power(numbers[0], numbers[1]);
      console.log(`${numbers[0]} ^ ${numbers[1]} = ${result}`);
    } else if (operation === 'sqrt') {
      if (numbers.length !== 1) {
        console.error('Error: Square root requires exactly 1 number');
        process.exit(1);
      }
      result = squareRoot(numbers[0]);
      console.log(`√${numbers[0]} = ${result}`);
    } else {
      console.error(`Error: Unknown operation "${operation}"`);
      console.error('Valid operations: add, subtract, multiply, divide, modulo, power, sqrt');
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
