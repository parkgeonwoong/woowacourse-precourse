export const MAXIMUM_ORDER = 20;
export const MINIMUM_MENU_COUNT = 1;
export const APPLY_EVENT_PRICE = 10000;
export const GIFT_PRICE = 120000;

export const BENEFIT = Object.freeze({
  MENU: Object.freeze({
    MAIN: 'main',
    DESSERT: 'dessert',
  }),
  WEEK: Object.freeze({
    END_SALE: '주말 할인',
    DAY_SALE: '평일 할인',
    DISCOUNT: 2023,
  }),
  SPECIAL: Object.freeze({
    SALE: '특별 할인',
    DISCOUNT: 1000,
  }),
  GIFT: Object.freeze({
    EVENT: '증정 이벤트',
    PRICE: 25000,
  }),
});

export const BADGE = Object.freeze({
  SANTA: '산타',
  SANTA_PRICE: 20000,
  TREE: '트리',
  TREE_PRICE: 10000,
  STAR: '별',
  STAR_PRICE: 10000,
});
