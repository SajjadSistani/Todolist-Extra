class TodoView {
  _parentElement = document.querySelector(".item-box");
  _todo;
  render(data) {
    this._todo = data;
    const markup = this._generateMarkup(data);
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addLoadHandler(handler) {
    document.querySelector(".todo-box").addEventListener("click", handler);
  }
  //CheckButton
  addButtonsHandler(handler) {
    document.querySelector(".btn").addEventListener("click", handler);
  }

  doneWithTodo() {
    this._parentElement.innerHTML = "";
    document.querySelector(`[data-id="${this._todo.id}"]`).remove();
  }

  _generateMarkup(data) {
    return `
    <h1 class="item-box-title">${data.title}</h1>
    <span class="item-box-date">${data.date}</span>

    <div class="icon-box">
      <p class="item-box-description">
      ${data.description} 
      </p>
      
    <!-- Buttons -->
    <span class="icon-check-times">
      <i class="fa fa-check btn" aria-hidden="true"></i>
      
    </span>`;
  }
}

export default new TodoView();
