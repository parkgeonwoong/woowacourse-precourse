import { OrderService } from '../service/OrderService.js';
import { VisitDateService } from '../service/VisitDateService.js';
import { toCommaFormat, toSplitList } from '../utils/ToData.js';
import { InputView } from '../view/InputView.js';
import { OutputView } from '../view/OutputView.js';

export class EventPlaner {
  #visitDate;
  #orderMenu;
  #orderService;

  constructor() {
    InputView.readGreeting();
  }

  async run() {
    await this.readAndProcessVisitDate();
    await this.readAndChangeOrderMenu();
    this.readPreviewAndMenu();

    this.#orderService = new OrderService(this.#orderMenu, this.#visitDate);
    this.readBeforeDiscount();

    // console.log(this.#orderService);
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

  readPreviewAndMenu() {
    OutputView.readPreview(this.#visitDate);
    OutputView.printMenu();
    this.#orderMenu.forEach((menu) => OutputView.printMenuList(menu));
  }

  readBeforeDiscount() {
    OutputView.printBeforeDiscount();
    const totalPrice = toCommaFormat(this.#orderService.calculateBeforeTotalPrice());
    OutputView.printBeforeDiscountPrice(totalPrice);
  }

  readGiftMenu() {
    OutputView.printGiftMenu();
  }
}
