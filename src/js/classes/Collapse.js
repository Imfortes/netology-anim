export default class Collapse {
  constructor() {
    this.isOpen = false;

    this.buttons = [];
    this.containers = [];

    this.init();
  }

  init() {
    this.buttons = document.querySelectorAll('a[data-toggle="collapse"]');
    this.containers = document.querySelectorAll(".collapse");

    this.buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => this.toggle(e));
    });

    console.log(this.buttons);
    console.log(this.containers);
  }

  toggle(e) {
    console.log(e.currentTarget.dataset.controls);
    console.log("toggle");

    const selector = e.currentTarget.dataset.controls;
    const container = document.querySelector(`#${selector}`);

    console.log(container);
    if (!container) return;

    const isOpen = container.classList.contains("is-open");

    if (isOpen) {
      this.close(container);
    } else {
      this.open(container);
    }
  }

  open(container) {
    container.classList.add("is-open");
  }

  close(container) {
    container.classList.remove("is-open");
  }
}
