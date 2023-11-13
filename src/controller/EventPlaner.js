import { VisitDateService } from '../service/VisitDateService.js';
import { InputView } from '../view/InputView.js';

export class EventPlaner {
  #visitDate;

  async run() {
    InputView.readGreeting();
    const visitDate = await InputView.readVisitDate();
    const visitDateObject = new VisitDateService(visitDate);
    this.#visitDate = visitDateObject.getVisitDate();

    // console.log('visitDate: ', this.#visitDate);

    const orderMenu = await InputView.readOrderMenu();
    console.log('orderMenu: ', orderMenu);
  }
}

// 티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1
// 제로콜라-2,레드와인-1,샴페인-1
