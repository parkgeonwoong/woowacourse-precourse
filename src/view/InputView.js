import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';

export const InputView = {
  readGreeting() {
    Console.print(MESSAGE_NOTIFICATION.GREETING);
  },

  async readDate() {
    const input = await Console.readLineAsync(MESSAGE_NOTIFICATION.VISITED_DATE);
    // TODO: 유효성 검사
    return input;
  },
};
