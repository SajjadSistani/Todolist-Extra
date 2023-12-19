class TodoListView {
  _parentElement = document.querySelector(".todo-box");

  render(data) {
    data.forEach((todo) => {
      const markup = this._generateMarkup(todo);
      this._parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }

  renderTodo(data) {
    const markup = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  addLoadHandler(handler) {
    document.addEventListener("DOMContentLoaded", handler);
  }
  _generateMarkup(todo) {
    return `
      <div class="todoItem" data-id=${todo.id}>
      <h5>عنوان: ${todo.title}</h5>
      <h5>تاریخ: ${todo.date}</h5>
      <p>توضیحات: ${todo.description}</p>
      </div>`;
  }
}

export default new TodoListView();
