const inputTagBox = document.querySelector('.input-tag');
const tagInput = document.querySelector('#tag-input');

inputTagBox.addEventListener('click', ({ target }) => {
  if (target.classList[0] != 'input-tag') return;

  const input = target.children['tag-input'];
  input.focus();
});

tagInput.addEventListener('keyup', ({ code, target }) => {
  if (code == 'Comma' || code == 'Enter') {
    const value = target.value.replaceAll(',', '');

    target.before(createTagElement(value));
    target.value = '';
  }
});

function createTagElement(value) {
  const tag = document.createElement('span');
  tag.classList.add('tag');
  tag.innerText = value;

  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('material-icons');
  deleteIcon.innerText = 'close';

  tag.append(deleteIcon);

  deleteIcon.addEventListener('click', ({ target }) => {
    target.parentElement.remove();
  });

  return tag;
}

function getArrayOfTags() {
  const allTags = [];

  document.querySelectorAll('.tag').forEach((tag) => {
    allTags.push(tag.childNodes[0].data);
  });

  return allTags;
}
