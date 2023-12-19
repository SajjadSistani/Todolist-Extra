import { createTodo, findTodo, state } from "./model.js";
import todoForm from "./views/todoForm.js";
import todoListView from "./views/todoListView.js";
import todoView from "./views/todoView.js";

const controllTodoView = (e) => {
  const target = e.target.closest(".todoItem");
  const id = target.dataset.id;
  if (!target) return;
  const todo = findTodo(Number(id));
  todoView.render(todo);
  todoView.addButtonsHandler(controllButtons);
};

const controllButtons = () => {
  todoView.doneWithTodo();
};

const controllAddTodo = () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  createTodo(title, description);

  // Render the updated list
  todoListView.renderTodo(state.todoList[state.todoList.length - 1]);

  console.log(state);
};

const init = () => {
  todoView.addLoadHandler(controllTodoView);
  todoForm.addClickHandler(controllAddTodo);
};
init();
