class TodoFrom {
  _parentElement = document.querySelector(".addForm");

  addClickHandler(handler) {
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the default form submission
      handler();
    });
  }
}

export default new TodoFrom();
