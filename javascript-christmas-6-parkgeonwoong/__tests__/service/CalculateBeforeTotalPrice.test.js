import { OrderService } from '../../src/service/OrderService';

describe('OrderService', () => {
  describe('calculateBeforeTotalPrice', () => {
    it('할인전 주문 메뉴의 총 금액을 계산한다.', () => {
      const orderMenu = [
        ['양송이수프', 2],
        ['타파스', 2],
        ['티본스테이크', 1],
        ['초코케이크', 1],
        ['제로콜라', 1],
      ];
      const visitDate = new Date(2023, 12, 25);
      const orderService = new OrderService(orderMenu, visitDate);

      const totalPrice = orderService.calculateBeforeTotalPrice();

      expect(totalPrice).toBe(96000);
    });
  });
});
