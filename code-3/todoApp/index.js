const todos = [];

const renderTodo = todo => {
  const element = document.createElement('p');
  element.classList.add('todo');
  element.innerHTML = todo;
  document.getElementById('todo-container').appendChild(element);
}

const renderTodoCount = count => {
  document.getElementById('todo-counter').innerHTML = "Todo Count: " + count;
}

document.getElementById("input-box").addEventListener("keypress", e => {
   if (e.key === 'Enter') {
     let input = document.getElementById("input-box").value;
     if (input.length > 0) {
       todos.push(input);
       document.getElementById("input-box").value = "";
       renderTodo(input);
       renderTodoCount(todos.length);
      }
    }
});
