import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu"];
  connect() {
    console.log("dropdown connected");
    if (this.isOpen) {
      this.toggle();
    }
  }

  get isOpen() {
    return !this.menuTarget.classList.contains("hidden");
  }

  toggle() {
    this.menuTarget.classList.toggle("hidden");
  }

  // click away toggle
  clickAway() {
    if (this.isOpen) {
      this.toggle();
    }
  }
}
