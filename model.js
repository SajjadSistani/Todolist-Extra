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
  const newTodo = {
    title,
    date: formattedDate,

    description,
  };
  addTodo(newTodo);
};
