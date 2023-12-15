import { createTodo, state } from "./model.js";
import todoForm from "./views/todoForm.js";
import todoListView from "./views/todoListView.js";
import todoView from "./views/todoView.js";

const controllTodoView = () => {
  todoView.render();
};

const controllAddTodo = () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  createTodo(title, description);
  console.log(state);
};
const controllListView = () => {
  if (state.todoList.length > 1) {
    todoListView.render();
  } else {
    todoForm.render();
    todoForm.addClickHandler(controllAddTodo);
  }
};

const init = () => {
  todoView.addLoadHandler(controllTodoView);
  todoListView.addLoadHandler(controllListView);
};
init();
