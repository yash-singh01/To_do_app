const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Load todos from localStorage
window.onload = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todo => addTodoToDOM(todo));
};

// Add todo on submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText === '') return;

  addTodoToDOM(todoText);
  saveTodo(todoText);
  input.value = '';
});

// Add to-do to DOM
function addTodoToDOM(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  btn.className = 'delete-btn';

  btn.onclick = () => {
    li.remove();
    deleteTodo(text);
  };

  li.appendChild(btn);
  list.appendChild(li);
}

// Save to-do to localStorage
function saveTodo(todo) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Delete from localStorage
function deleteTodo(todoText) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter(todo => todo !== todoText);
  localStorage.setItem('todos', JSON.stringify(todos));
}