class TodoView {
  _parentElement = document.querySelector(".item-box");

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addLoadHandler(handler) {
    document.querySelector(".item-box").addEventListener("click", (e) => {});
  }

  _generateMarkup() {
    return `
    <h1 class="item-box-title">عنوان</h1>
    <span class="item-box-date">1402/01/01</span>

    <div class="icon-box">
      <p class="item-box-description">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
        استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
        ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
      </p>
      
    <!-- Buttons -->
    <span class="icon-check-times">
      <i class="fa fa-check" aria-hidden="true"></i>
      <i class="fa fa-times" aria-hidden="true"></i>
    </span>`;
  }
}

export default new TodoView();
