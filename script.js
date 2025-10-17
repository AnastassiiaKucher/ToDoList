const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

// функция добавления задачи
function addTask() {
  const text = inputField.value.trim(); // убираем пробелы по краям
  if (text === '') return; // если пусто — ничего не добавляем

  const item = document.createElement('li');
  item.innerText = text;
  item.classList.add('toDoAdded');
  toDoContainer.appendChild(item);
  inputField.value = '';

  item.addEventListener('click', () => {
    item.classList.add('toDoCompleted');
  });

  item.addEventListener('dblclick', () => {
    toDoContainer.removeChild(item);
  });
}

// нажимаем на кнопку
btn.addEventListener('click', addTask);

// добавление при нажатии Enter
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
