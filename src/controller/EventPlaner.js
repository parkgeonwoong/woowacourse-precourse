import { VisitDateService } from '../service/VisitDateService.js';
import { InputView } from '../view/InputView.js';

export class EventPlaner {
  #visitDate;

  async run() {
    InputView.readGreeting();
    const visitDate = await InputView.readVisitDate();
    const visitDateObject = new VisitDateService(visitDate);
    this.#visitDate = visitDateObject.getVisitDate();

    console.log('visitDate: ', this.#visitDate);

    const orderMenu = await InputView.readOrderMenu();
    console.log('orderMenu: ', orderMenu);
  }
}
