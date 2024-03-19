import { CALENDER, CHIRSTMAS, THIS_MONTH } from '../../src/constants/Date.js';
import { Calender } from '../../src/model/Calender.js';

describe('Calender 클래스 테스트', () => {
  let calender;

  beforeEach(() => {
    calender = new Calender();
  });

  it('캘린더가 올바르게 초기화되어야 합니다.', () => {
    const calenderData = calender.getCalender();
    expect(calenderData.length).toBe(THIS_MONTH.LAST_DATE);
  });

  describe('크리스마스 디데이 할인', () => {
    it('1일~25일까지는 1000원 + 알파', () => {
      const calenderData = calender.getCalender();

      for (let i = 0; i < CHIRSTMAS.DAY; i++) {
        expect(calenderData[i][CALENDER.CHRISTMAS_DISCOUNT]).toBe(
          CHIRSTMAS.DISCOUNT + i * CHIRSTMAS.DISCOUNT_STEP,
        );
      }
    });
    it('25일 3400원', () => {
      const calenderData = calender.getCalender();
      expect(calenderData[CHIRSTMAS.DAY - 1][CALENDER.CHRISTMAS_DISCOUNT]).toBe(3400);
    });
    it('26일~31일까지는 0원', () => {
      const calenderData = calender.getCalender();

      for (let i = CHIRSTMAS.DAY; i < THIS_MONTH.LAST_DATE; i++) {
        expect(calenderData[i][CALENDER.CHRISTMAS_DISCOUNT]).toBe(0);
      }
    });
  });

  it('특별한 날이 올바르게 표시되어야 합니다.', () => {
    const calenderData = calender.getCalender();

    for (let i = 0; i < THIS_MONTH.LAST_DATE; i++) {
      const isSunday = calenderData[i][CALENDER.DAY] === CALENDER.SUNDAY;
      const isChristmasDay = calenderData[i][CALENDER.DATE] === CHIRSTMAS.DAY;
      const isSpecial = isSunday || isChristmasDay;

      expect(calenderData[i][CALENDER.IS_SPECIAL]).toBe(isSpecial);
    }
  });

  it('주말이 올바르게 표시되어야 합니다.', () => {
    const calenderData = calender.getCalender();

    for (let i = 0; i < THIS_MONTH.LAST_DATE; i++) {
      const isFriday = calenderData[i][CALENDER.DAY] === CALENDER.FRIDAY;
      const isSaturday = calenderData[i][CALENDER.DAY] === CALENDER.SATURDAY;
      const isWeekend = isFriday || isSaturday;

      expect(calenderData[i][CALENDER.IS_WEEKEND]).toBe(isWeekend);
    }
  });
});
