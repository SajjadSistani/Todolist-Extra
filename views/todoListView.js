class TodoListView {
  _parentElement = document.querySelector(".todo-box");

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addLoadHandler(handler) {
    document.addEventListener("DOMContentLoaded", handler);
  }
  _generateMarkup() {
    return `
   `;
  }
}

export default new TodoListView();
