import { Console } from '@woowacourse/mission-utils';
import { checkLottoResult } from '../utils/CheckLottoResult.js';
import { incomingProfits } from '../utils/IncomingProfits.js';
import { Input } from '../view/InputView.js';
import { Output } from '../view/OutputView.js';
import MakeLottoService from '../service/MakeLottoService.js';

export default class LottoGameController {
  #buyLottoMoney;
  #lottoService;
  #winningLottoNumbers;
  #bonusNumber;
  #profitRate;

  async play() {
    try {
      await this.#buyLotto();
      await this.#giveLottoNumbers();
      await this.#giveBonusNumber();
      this.#checkLotto();
      this.#showProfitRate();
    } catch (err) {
      Console.print(err.message);
      await this.play();
    }
  }

  async #buyLotto() {
    this.#buyLottoMoney = await Input.buyMoney();
    this.#lottoService = new MakeLottoService(this.#buyLottoMoney);
    this.#printLotto();
  }

  #printLotto() {
    Output.buyLotto(this.#lottoService.getLottoCount());
    Output.lottoArray(this.#lottoService.getLottoNumbers());
  }

  async #giveLottoNumbers() {
    this.#winningLottoNumbers = await Input.winningLotto();
  }

  async #giveBonusNumber() {
    this.#bonusNumber = await Input.bounsNumber(this.#winningLottoNumbers);
  }

  #checkLotto() {
    const result = checkLottoResult(
      this.#lottoService.getLottoNumbers(),
      this.#winningLottoNumbers,
      this.#bonusNumber,
    );
    Output.result();
    Output.resultDetail(result);
    this.#giveProfitRate(incomingProfits(result, this.#buyLottoMoney));
  }

  #giveProfitRate(profit) {
    this.#profitRate = profit;
  }

  #showProfitRate() {
    Output.profitRate(this.#profitRate);
  }
}
