class TodoFrom {
  _parentElement = document.querySelector(".addForm");

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
   
    `;
  }
}

export default new TodoFrom();
