class TodoListView {
  _parentElement = document.querySelector(".container");

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addLoadHandler(handler) {
    window.addEventListener("load", handler);
  }
  _generateMarkup() {
    return `
    <svg class="bars-icon">
        <use href="#bars"></use>
      </svg>
      <div class="container-box">
        <!-- Title and Date Todo -->
        <div class="title-container">
          <span class="title">عنوان</span>
          <span class="history">تاریخ</span>
        </div>

        <!-- Description Todo -->
        <div class="description-checkbox">
          <p class="description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون
          </p>
          <input type="checkbox" id="checkbox" />`;
  }
}

export default new TodoListView();
