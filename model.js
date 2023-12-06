export const state = {
  todoList: [
    {
      title: "Work",
      date: "any",
      place: "mashhad",
      description: "test",
    },
  ],
};

export const addTodo = (todo) => {
  state.todoList.push(todo);
};

export const createTodo = (title, date, place, description) => {
  const newTodo = {
    title,
    date,
    place,
    description,
  };
  addTodo(newTodo);
};
