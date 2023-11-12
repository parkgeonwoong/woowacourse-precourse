import { EVENT_DATE } from './EventSetting.js';

export const MESSAGE_NOTIFICATION = Object.freeze({
  GREETING: `안녕하세요! 우테코 식당 ${EVENT_DATE.MONTH + 1}월 이벤트 플래너입니다.`,
  VISITED_DATE: `${
    EVENT_DATE.MONTH + 1
  }월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`,
});
