export const state = {
  todoList: [],
};

export const addTodo = (todo) => {
  state.todoList.push(todo);
};

export const createTodo = (title, description) => {
  // Get the current date and time
  const currentDate = new Date();

  // Format the date as a string
  const formattedDate = currentDate.toISOString();
  const id = Math.floor(Math.random() * 500) + Math.floor(Math.random() * 10);
  const newTodo = {
    id: id,
    title,
    date: formattedDate,

    description,
  };
  addTodo(newTodo);
};

export const findTodo = (id) => {
  return state.todoList.find((t) => t.id === id);
};
