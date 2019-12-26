import { Item } from './script.js';

const itemsData = [
    {
      title: "T-shirt",
      img: "some image url",
      amount: 10
    },
    {
      title: "T-shirt",
      img: "some image url",
      amount: 10
    }
  ];
  
  itemsData.map(({ title, img, amount }) => {
    const item = new Item(title, img, amount);
    item.render();
    item.addHandlers();
  });