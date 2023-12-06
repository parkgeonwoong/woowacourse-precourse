import { Console } from '@woowacourse/mission-utils';
import {
  MESSAGE_LOTTO_COUNT,
  MESSAGE_NOTIFICATION,
  MESSAGE_RANK_RESULT,
} from '../constants/Message.js';
import { BRACKET_CLOSE, BRACKET_OPEN, SPACE_COMMA } from '../constants/GameSetting.js';

export const Output = {
  buyLotto(buyLottoCnt) {
    Console.print(MESSAGE_LOTTO_COUNT.buyLotto(buyLottoCnt));
  },

  lottoArray(lottos) {
    const lottosList = [];
    lottos.forEach((lotto) => {
      lottosList.push(`${BRACKET_OPEN}${lotto.join(SPACE_COMMA)}${BRACKET_CLOSE}`);
    });
    lottosList.forEach((lotto) => Console.print(lotto));
  },

  result() {
    Console.print(MESSAGE_NOTIFICATION.result);
  },

  resultDetail(result) {
    result.forEach((value, index) => {
      Console.print(Object.values(MESSAGE_RANK_RESULT)[index](value));
    });
  },

  profitRate(profitRate) {
    Console.print(`${MESSAGE_NOTIFICATION.profitRate} ${profitRate}%입니다.`);
  },
};
