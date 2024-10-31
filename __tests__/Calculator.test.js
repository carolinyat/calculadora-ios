const { updateResult } = require('../src/script.js');

describe('updateResult', () => {
  let resultElement;

  beforeAll(() => {
    // Create a mock HTML structure before all tests
    document.body.innerHTML = `
      <div class="calculator">
        <div class="result">0</div>
        <div class="buttons">
          <button class="bg-gray">C</button>
          <button class="bg-gray">±</button>
          <button class="bg-gray">%</button>
          <button class="bg-orange">÷</button>
          <button class="bg-light-gray">7</button>
          <button class="bg-light-gray">8</button>
          <button class="bg-light-gray">9</button>
          <button class="bg-orange">×</button>
          <button class="bg-light-gray">4</button>
          <button class="bg-light-gray">5</button>
          <button class="bg-light-gray">6</button>
          <button class="bg-orange">-</button>
          <button class="bg-light-gray">1</button>
          <button class="bg-light-gray">2</button>
          <button class="bg-light-gray">3</button>
          <button class="bg-orange">+</button>
          <button class="bg-light-gray button-zero">0</button>
          <button class="bg-light-gray">,</button>
          <button class="bg-orange">=</button>
        </div>
      </div>
    `;
  });

  beforeEach(() => {
    // Reference the result element before each test
    resultElement = document.querySelector(".result");
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
