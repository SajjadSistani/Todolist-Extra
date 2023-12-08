import todoListView from "./views/todoListView.js";
import todoView from "./views/todoView.js";

const controllTodoView = () => {
  todoView.render();
};

// const controllListView = () => {
//   todoListView.render();
// };

const init = () => {
  todoView.addLoadHandler(controllTodoView);
  //   todoListView.addLoadHandler(controllListView);
};
init();
