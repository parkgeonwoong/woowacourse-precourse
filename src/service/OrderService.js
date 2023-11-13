import { MENU } from '../constants/Menu.js';

export class OrderService {
  constructor(orderMenu, visitDate) {
    this.orderMenu = orderMenu;
    this.visitDate = visitDate;
  }

  calculateBeforeTotalPrice() {
    let totalPrice = 0;

    this.orderMenu.forEach(([menuName, menuCount]) => {
      Object.keys(MENU).forEach((category) => {
        const menu = MENU[category].find((menu) => menu.name === menuName);

        if (menu) {
          totalPrice += menu.price * menuCount;
        }
      });
    });

    return totalPrice;
  }
}
