import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_EVENT } from '../constants/Message.js';

export const OutputView = {
  readPreview({ date }) {
    Console.print(MESSAGE_EVENT.preview(date));
  },

  printMenu() {
    Console.print('<주문 메뉴>');
  },

  printMenuList([menuName, menuCount]) {
    Console.print(`${menuName} ${menuCount}개`);
  },

  printBeforeDiscount() {
    Console.print('\n<할인 전 총주문 금액>');
  },

  printBeforeDiscountPrice(price) {
    Console.print(`${price}원`);
  },

  printGiftMenu() {
    Console.print('\n<증정 메뉴>');
  },

  printGiftMenuList() {},
};
