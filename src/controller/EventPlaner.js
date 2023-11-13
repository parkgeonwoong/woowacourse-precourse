import { VisitDateService } from '../service/VisitDateService.js';
import { toSplitList } from '../utils/ToData.js';
import { InputView } from '../view/InputView.js';
import { OutputView } from '../view/OutputView.js';

export class EventPlaner {
  #visitDate;
  #orderMenu;

  constructor() {
    InputView.readGreeting();
  }

  async run() {
    await this.readAndProcessVisitDate();
    await this.readAndChangeOrderMenu();
    this.readPreview();

    // console.log('visitDate: ', this.#visitDate);
    // console.log('orderMenu: ', this.#orderMenu);
  }

  async readAndProcessVisitDate() {
    const visitDate = await InputView.readVisitDate();
    const visitDateObject = new VisitDateService(visitDate);
    this.#visitDate = visitDateObject.getVisitDate();
  }

  async readAndChangeOrderMenu() {
    const orderMenu = await InputView.readOrderMenu();
    this.#orderMenu = toSplitList(orderMenu);
  }

  readPreview() {
    const { date } = this.#visitDate;
    OutputView.readPreview(date);
  }
}
