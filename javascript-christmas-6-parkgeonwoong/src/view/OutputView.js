import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_EVENT } from '../constants/Message.js';
import { toCommaFormat } from '../utils/ToData.js';

export const OutputView = {
  readPreview({ date }) {
    Console.print(MESSAGE_EVENT.preview(date));
  },

  printTitle(title) {
    Console.print(`\n<${title}>`);
  },

  printMenuList([menuName, menuCount]) {
    Console.print(`${menuName} ${menuCount}개`);
  },

  printBeforeDiscountPrice(price) {
    Console.print(`${toCommaFormat(price)}원`);
  },

  printGiftMenuList(isGiftMenu) {
    Console.print(isGiftMenu ? '샴페인 1개' : '없음');
  },

  printBenefitDetailsList({ name, price }) {
    Console.print(`${name}: -${toCommaFormat(price)}원`);
  },

  printTotalBenefitPrice(price) {
    Console.print(`${price !== 0 ? '-' : ''}${toCommaFormat(price)}원`);
  },

  printAfterDiscountPrice(price) {
    Console.print(`${toCommaFormat(price)}원`);
  },

  printEventBadgeList(badge) {
    Console.print(`${badge ? badge : '없음'}`);
  },

  printNothing() {
    Console.print('없음');
  },
};
