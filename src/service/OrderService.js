import { APPLY_EVENT_PRICE, GIFT_PRICE } from '../constants/EventSetting.js';
import { MENU } from '../constants/Menu.js';

export class OrderService {
  #totalPrice;

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
    this.#totalPrice = totalPrice;
    return totalPrice;
  }

  canEvent() {
    return this.#totalPrice >= APPLY_EVENT_PRICE;
  }

  isGiftMenu() {
    if (this.canEvent() && this.#totalPrice >= GIFT_PRICE) {
      return true;
    }
    return false;
  }
}
