const actionButtons = document.querySelectorAll('button');
const shiftInput = document.querySelector('#shift');

const textareas = {
  decoded: document.querySelector('#decoded'),
  encoded: document.querySelector('#encoded'),
};

actionButtons.forEach((button) =>
  button.addEventListener('click', ({ target }) => {
    const func = target.id;
    const from = textareas[target.dataset.from];
    const to = textareas[target.id + 'd'];

    to.value = CaesarCipher[func](from.value, shiftInput.value);
  })
);
