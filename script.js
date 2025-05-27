// Get DOM elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  // Create list item
  const li = document.createElement('li');
  li.className = 'task-item';

  // Task text span
  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Assemble task item
  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
  taskInput.focus();
}

// Add event listener
addTaskBtn.addEventListener('click', addTask);

// Allow "Enter" key to add tasks
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
