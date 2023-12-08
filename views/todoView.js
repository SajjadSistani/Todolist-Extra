class TodoView {
  _parentElement = document.querySelector(".form-container");

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addLoadHandler(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return `
    <form>
    <!-- Title and Date -->
    <div class="input-container">
      <input
        id="title-input"
        type="text"
        placeholder="عنوان"
        maxlength="30"
      />
      <input id="date-input" type="date" />
    </div>

    <!-- Add Description -->
    <div class="info-container">
      <div class="textarea-container">
        <div class="textarea-container-title">
          <span>توضیحات </span>
        </div>

        <div>
          <textarea
            id="description-element"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <!-- Location -->
      <div class="location-container">
        <svg class="location-icon">
          <use href="#map"></use>
        </svg>
        <input
          id="location-element"
          type="text"
          placeholder="موقعیت"
          maxlength="30"
        />
      </div>
    </div>

    <!-- Submit button -->
    <div class="btn-container">
      <svg class="btn btn-add">
        <use href="#check"></use>
      </svg>

      <svg class="btn btn-delete">
        <use href="#x"></use>
      </svg>
    </div>
  </form>`;
  }
}

export default new TodoView();
