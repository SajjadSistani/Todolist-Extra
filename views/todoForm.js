class TodoFrom {
  _parentElement = document.querySelector(".addForm");

  addClickHandler(handler) {
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      handler();
    });
  }
}

export default new TodoFrom();
