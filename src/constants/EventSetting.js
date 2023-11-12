export const EVENT_DATE = Object.freeze({
  YEAR: 2023,
  MONTH: 11,
});

export const THIS_MONTH = Object.freeze({
  FIRST_DATE: 1,
  LAST_DATE: new Date(EVENT_DATE.YEAR, EVENT_DATE.MONTH + 1, 0).getDate(),
});
