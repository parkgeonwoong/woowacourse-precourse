import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_INFO, MESSAGE_STATE } from '../constants/Message.js';

export const Output = {
  start() {
    return Console.print(MESSAGE_INFO.gameStart);
  },

  end() {
    return Console.print(MESSAGE_INFO.gameEnd);
  },

  result(result) {
    const message = [];

    if (result.ball) {
      message.push(`${result.ball}${MESSAGE_STATE.ball}`);
    }
    if (result.strike) {
      message.push(`${result.strike}${MESSAGE_STATE.strike}`);
    }
    if (!message.length) {
      message.push(MESSAGE_STATE.nothing);
    }

    return Console.print(message.join(' '));
  },
};
