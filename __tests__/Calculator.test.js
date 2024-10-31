// __tests__/calculator.test.js
const { updateResult } = require('../src/script');

describe('updateResult', () => {
  let resultElement;

  beforeEach(() => {
    // Create a mock result element
    resultElement = document.createElement('div');
    resultElement.className = 'result'; // Match the selector in your app
    document.body.appendChild(resultElement);
    global.result = resultElement; // Make it global for the function
  });

  afterEach(() => {
    document.body.removeChild(resultElement); // Clean up after each test
  });

  test('should set innerText to 0 when originClear is true', () => {
    updateResult(true);
    expect(resultElement.innerText).toBe('0');
  });

  test('should set innerText to currentNumber with comma when originClear is false', () => {
    global.currentNumber = '123.45'; // Set currentNumber for the test
    updateResult(false);
    expect(resultElement.innerText).toBe('123,45');
  });

  test('should set innerText to empty string when currentNumber is empty and originClear is false', () => {
    global.currentNumber = ''; // Test with empty currentNumber
    updateResult(false);
    expect(resultElement.innerText).toBe('');
  });
});
