import { OrderService } from '../service/OrderService.js';
import { VisitDateService } from '../service/VisitDateService.js';
import { toSplitList } from '../utils/ToData.js';
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
    this.readGiftMenu();
    this.readBenefitDetails();
    this.readTotalBenefitPrice();
    this.readAfterDiscount();
    this.readEventBadge();
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
    const totalPrice = this.#orderService.calculateBeforeTotalPrice();
    OutputView.printBeforeDiscountPrice(totalPrice);
  }

  readGiftMenu() {
    OutputView.printGiftMenu();
    OutputView.printGiftMenuList(this.#orderService.isGiftMenu());
  }

  readBenefitDetails() {
    OutputView.printBenefitDetails();
    const benefit = this.#orderService.benefitDetails();
    benefit.forEach((benefit) => OutputView.printBenefitDetailsList(benefit));

    if (benefit.length === 0) {
      OutputView.printNothing();
    }
  }

  readTotalBenefitPrice() {
    OutputView.printTotalBenefit();
    const totalBenefitPrice = this.#orderService.benefitTotalPrice();
    OutputView.printTotalBenefitPrice(totalBenefitPrice);
  }

  readAfterDiscount() {
    OutputView.printAfterDiscount();
    const totalPrice = this.#orderService.calculateAfterTotalPrice();
    OutputView.printAfterDiscountPrice(totalPrice);
  }

  readEventBadge() {
    OutputView.printEventBadge();
    OutputView.printEventBadgeList(this.#orderService.calculateEventBadge());
  }
}
