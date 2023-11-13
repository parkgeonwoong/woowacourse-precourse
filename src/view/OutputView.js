import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_EVENT } from '../constants/Message.js';

export const OutputView = {
  readPreview(date) {
    Console.print(MESSAGE_EVENT.preview(date));
  },
  printMenu() {
    Console.print('<주문 메뉴>');
  },
};
