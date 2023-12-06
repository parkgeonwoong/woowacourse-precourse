import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';

export const Output = {
  startResult() {
    return Console.print(MESSAGE_NOTIFICATION.startResult);
  },
  moveResult(name, advance) {
    return Console.print(`${name} : ${'-'.repeat(advance)}`);
  },
  line() {
    return Console.print('');
  },
  racingResult(winner) {
    return Console.print(`${MESSAGE_NOTIFICATION.racingResult}${winner}`);
  },
};
