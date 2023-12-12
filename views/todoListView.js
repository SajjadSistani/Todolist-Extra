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
    <div>
          <!-- Todo box text -->
          <div class="todo-box-text-box">
            <span>عنوان</span>
            <span>1402/01/01</span>
          </div>

          <p class="todo-box-description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان
          </p>
          <hr class="todo-box-hr" />
        </div>`;
  }
}

export default new TodoListView();
