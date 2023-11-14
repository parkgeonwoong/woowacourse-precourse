import { EVENT_DATE } from './EventSetting.js';

export const MESSAGE_NOTIFICATION = Object.freeze({
  GREETING: `안녕하세요! 우테코 식당 ${EVENT_DATE.MONTH + 1}월 이벤트 플래너입니다.`,
  VISITED_DATE: `${
    EVENT_DATE.MONTH + 1
  }월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`,
  ORDER_MENU: `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n`,
});

export const MESSAGE_EVENT = Object.freeze({
  preview(date) {
    return `${EVENT_DATE.MONTH + 1}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;
  },
});

export const TITLE = Object.freeze({
  MENU: '주문 메뉴',
  BEFORE_DISCOUNT: '할인 전 총주문 금액',
  GIFT_MENU: '증정 메뉴',
  BENEFIT_DETAILS: '혜택 내역',
  TOTAL_BENEFIT: '총혜택 금액',
  AFTER_DISCOUNT: '할인 후 예상 결제 금액',
  EVENT_BADGE: '12월 이벤트 배지',
});
