export class Item {
  constructor(title, img, amount) {
    this.title = title;
    this.img = img;
    this.amount = amount;
  }
  render() {
    return `
            <div class="item-container">
                <div class="item-title">${this.title}</div>
                <img src="${this.img}"/>
                <div class="item-amount">${this.amount}</div>
                <button class="showMore">Show more</button>
            </div>
        `;
  }

  addHandlers() {
    document
      .querySelector("item-container")
      .addEventListener("click", this.onClickHandler());
  }

  onClickHandler() {
    return e => {
      console.log(e);
    };
  }
}


