const _arrowKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

/**
* This method aplies a mask on inputs that format the input's value as decimal number.
* @param {[]} elements Input elements
* @returns {void}
*/
const _decimalNumber = (elements) => {
  elements.forEach((el) => {
    // Input change behavior
    el.addEventListener('keydown', (event) => {
      const key = event.key;

      if (_arrowKeys.includes(key)) return;

      if (key.match(/\d/)) {
        if (el.value.length === 0) {
          el.value = `0.0${el.value}`;
          return;
        }

        const numbers = el.value.replace('.', '').split('');

        if (numbers[0] === '0') numbers.shift();
        numbers.splice(numbers.length - 1, 0, '.');

        el.value = numbers.join('');
        return;
      }

      if (key === 'Backspace') {
        if (el.value.length === 0) return;

        const numbers = el.value.replace('.', '').split('');

        if (numbers.length === 3) numbers.unshift('0');
        numbers.splice(numbers.length - 3, 0, '.');

        el.value = numbers.join('');
        return;
      }

      // For any other key
      event.preventDefault();
    });
  });
};

/**
* This method aplies a mask on inputs that only digits are accepted.
* @param {[]} elements Input elements
* @returns {void}
*/
const _onlyDigits = (elements) => {
  elements.forEach((el) => {
    el.addEventListener('keydown', (event) => {
      const key = event.key;

      if (key === 'Backspace' || key === '.' || _arrowKeys.includes(key)) return;

      if (!key.match(/\d/)) event.preventDefault();
    });
  });
};

const customMasks = {
  decimalNumber: _decimalNumber,
  onlyDigits: _onlyDigits
};
