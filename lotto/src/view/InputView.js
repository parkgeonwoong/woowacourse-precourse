import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';
import { isValidBuyMoney } from '../validator/BuyMoneyValidator.js';
import { isValidWinningLotto } from '../validator/WinningLottoValidator.js';
import { isValidBounsNumber } from '../validator/BounsNumberValidator.js';
import { COMMA } from '../constants/GameSetting.js';

export const Input = {
  async buyMoney() {
    try {
      const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.buyMoney);
      isValidBuyMoney(inputValue);
      return Number(inputValue);
    } catch (err) {
      Console.print(err.message);
      return Input.buyMoney();
    }
  },

  async winningLotto() {
    try {
      const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.winningLotto);
      isValidWinningLotto(inputValue);
      return inputValue.split(COMMA).map((number) => Number(number));
    } catch (err) {
      Console.print(err.message);
      return Input.winningLotto();
    }
  },

  async bounsNumber(winningLottoNumbers) {
    try {
      const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.bonusNumber);
      isValidBounsNumber(inputValue, winningLottoNumbers);
      return Number(inputValue);
    } catch (err) {
      Console.print(err.message);
      return Input.bounsNumber(winningLottoNumbers);
    }
  },
};
