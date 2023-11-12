import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';
import { dateInputValidator } from '../validator/DateInputValidator.js';

export const InputView = {
  readGreeting() {
    Console.print(MESSAGE_NOTIFICATION.GREETING);
  },

  async readDate() {
    try {
      const input = await Console.readLineAsync(MESSAGE_NOTIFICATION.VISITED_DATE);
      dateInputValidator(input);
      return input;
    } catch (err) {
      Console.print(err.message);
      return this.readDate();
    }
  },
};
