import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_EVENT } from '../constants/Message.js';
import { toCommaFormat } from '../utils/ToData.js';

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
    Console.print(`${toCommaFormat(price)}원`);
  },

  printGiftMenu() {
    Console.print('\n<증정 메뉴>');
  },

  printGiftMenuList(isGiftMenu) {
    Console.print(isGiftMenu ? '샴페인 1개' : '없음');
  },

  printBenefitDetails() {
    Console.print('\n<혜택 내역>');
  },

  printBenefitDetailsList({ name, price }) {
    Console.print(`${name}: -${toCommaFormat(price)}원`);
  },

  printNothing() {
    Console.print('없음');
  },

  printTotalBenefit() {
    Console.print('\n<총혜택 금액>');
  },

  printTotalBenefitPrice(price) {
    Console.print(`${price ? -toCommaFormat(price) : 0}원`);
  },

  printAfterDiscount() {
    Console.print('\n<할인 후 예상 결제 금액>');
  },

  printAfterDiscountPrice(price) {
    Console.print(`${toCommaFormat(price)}원`);
  },
};
