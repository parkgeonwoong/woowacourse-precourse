import { APPLY_EVENT_PRICE, GIFT_PRICE } from '../constants/EventSetting.js';
import { MENU } from '../constants/Menu.js';

export class OrderService {
  #totalPrice;
  #benefitDetailsList;

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
      this.#benefitDetailsList = benefitDetailsList;
      return benefitDetailsList;
    }
    this.insertChristmasDiscount(christmasDiscount, benefitDetailsList);
    this.insertWeekendDiscount(isWeekend, benefitDetailsList);
    this.insertSpecialDiscount(isSpecial, benefitDetailsList);
    this.insertGiftEvent(this.isGiftMenu(), benefitDetailsList);
    this.#benefitDetailsList = benefitDetailsList;
    return benefitDetailsList;
  }

  insertChristmasDiscount(christmasDiscount, benefitDetailsList) {
    benefitDetailsList.push({ name: '크리스마스 디데이 할인', price: christmasDiscount });
  }

  insertWeekendDiscount(isWeekend, benefitDetailsList) {
    const category = isWeekend ? 'main' : 'dessert';
    let count = this.orderMenu
      .filter(([menuName]) => MENU[category].some((menu) => menu.name === menuName))
      .reduce((acc, [, menuCount]) => acc + Number(menuCount), 0);

    if (count === 0) return;
    benefitDetailsList.push({ name: `${isWeekend ? '주말' : '평일'} 할인`, price: count * 2023 });
  }

  insertSpecialDiscount(isSpecial, benefitDetailsList) {
    isSpecial && benefitDetailsList.push({ name: '특별 할인', price: 1000 });
  }

  insertGiftEvent(isGiftMenu, benefitDetailsList) {
    isGiftMenu && benefitDetailsList.push({ name: '증정 이벤트', price: 25000 });
  }
}
