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
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  // Get the values from the inputs
  const title = titleInput.value;
  const description = descriptionInput.value;

  // Create a new todo
  createTodo(title, description);

  // Clear the input values
  titleInput.value = "";
  descriptionInput.value = "";

  // Render the updated list
  todoListView.renderTodo(state.todoList[state.todoList.length - 1]);
};

const init = () => {
  todoView.addLoadHandler(controllTodoView);
  todoForm.addClickHandler(controllAddTodo);
};
init();
