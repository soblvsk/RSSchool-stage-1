export default class Sizes {
  constructor() {
    this.getSize();
    this.size;
  }

  getSize() {
    if (localStorage.getItem('sizes') === null) {
      localStorage.setItem('sizes', JSON.stringify(4));
    }

    this.size = localStorage.getItem('sizes');
    return this.size;
  }
}
