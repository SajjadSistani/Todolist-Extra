class TodoFrom {
  _parentElement = document.querySelector(".todo-box");

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addClickHandler(handler) {
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      handler();
    });
  }
  _generateMarkup() {
    return `
    <form>
    <!-- Title Input -->
    <label for="title">عنوان:</label>
    <input type="text" id="title" name="title" required>

    <!-- Description Input -->
    <label for="description">توضیحات:</label>
    <textarea id="description" name="description" rows="4" required></textarea>

    <!-- Submit Button with Plus Icon -->
    <button type="submit">
        <i class="fas fa-plus"></i> افزودن کار
    </button>
</form>
    `;
  }
}

export default new TodoFrom();
