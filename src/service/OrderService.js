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
    return this.canEvent() && this.#totalPrice >= GIFT_PRICE;
  }

  benefitDetails() {
    const benefitDetailsList = [];
    const { christmasDiscount, isSpecial, isWeekend } = this.visitDate;

    if (!this.canEvent()) {
      return benefitDetailsList;
    }
    this.insertChristmasDiscount(christmasDiscount, benefitDetailsList);
    this.insertWeekendDiscount(isWeekend, benefitDetailsList);

    console.log('benefitDetailsList:', benefitDetailsList);
  }

  insertChristmasDiscount(christmasDiscount, benefitDetailsList) {
    benefitDetailsList.push({ name: '크리스마스 디데이 할인', price: christmasDiscount });
  }

  insertWeekendDiscount(isWeekend, benefitDetailsList) {
    const category = isWeekend ? 'main' : 'dessert';
    let count = this.orderMenu
      .filter(([menuName]) => MENU[category].some((menu) => menu.name === menuName))
      .reduce((acc, [, menuCount]) => acc + Number(menuCount), 0);

    benefitDetailsList.push({ name: `${isWeekend ? '주말' : '평일'} 할인`, price: count * 2023 });
  }
}

// 해산물파스타-2,크리스마스파스타-1,티본스테이크-1
