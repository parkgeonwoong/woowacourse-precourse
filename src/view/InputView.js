import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';
import { dateInputValidator } from '../validator/DateInputValidator.js';
import { menuInputValidator } from '../validator/MenuInputValidator.js';

export const InputView = {
  readGreeting() {
    Console.print(MESSAGE_NOTIFICATION.GREETING);
  },

  async readVisitDate() {
    try {
      const input = await Console.readLineAsync(MESSAGE_NOTIFICATION.VISITED_DATE);
      dateInputValidator(input);
      return input;
    } catch (err) {
      Console.print(err.message);
      return this.readVisitDate();
    }
  },

  async readOrderMenu() {
    try {
      const input = await Console.readLineAsync(MESSAGE_NOTIFICATION.ORDER_MENU);
      menuInputValidator(input);
      return input;
    } catch (err) {
      Console.print(err.message);
      return this.readOrderMenu();
    }
  },
};
