export const CHIRSTMAS = Object.freeze({
  DAY: 25,
  DISCOUNT: 1000,
  DISCOUNT_STEP: 100,
});

export const EVENT_DATE = Object.freeze({
  YEAR: 2023,
  MONTH: 11,
});

export const THIS_MONTH = Object.freeze({
  FIRST_DATE: 1,
  LAST_DATE: new Date(EVENT_DATE.YEAR, EVENT_DATE.MONTH + 1, 0).getDate(),
});

export const CALENDER = Object.freeze({
  DATE: 'date',
  DAY: 'day',
  CHRISTMAS_DISCOUNT: 'christmasDiscount',
  IS_SPECIAL: 'isSpecial',
  IS_WEEKEND: 'isWeekend',
  DEFAULT_ZERO: 0,
  DEFAULT_FALSE: false,
  SUNDAY: 0,
  FRIDAY: 5,
  SATURDAY: 6,
});
