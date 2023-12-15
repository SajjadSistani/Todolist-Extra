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
  todoListView.render();
};

const init = () => {
  todoView.addLoadHandler(controllTodoView);
  todoListView.addLoadHandler(controllListView);
  todoForm.addClickHandler(controllAddTodo);
};
init();
