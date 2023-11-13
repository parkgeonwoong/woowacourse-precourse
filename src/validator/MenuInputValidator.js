import { ERROR } from '../constants/Error.js';
import { MAXIMUM_ORDER, MINIMUM_MENU_COUNT } from '../constants/EventSetting.js';
import { MENU } from '../constants/Menu.js';

export function menuInputValidator(input) {
  const inputList = input.split(',').map((menu) => menu.split('-'));

  checkMenuName(inputList);
  checkMenuCount(inputList);
  checkDuplicateMenu(inputList);
  checkOnlyDrink(inputList);
  checkMaximumOrder(inputList);
}

function checkMenuName(menuList) {
  const menuNameList = Object.keys(MENU).reduce((acc, menu) => {
    acc.push(...MENU[menu].map((item) => item.name));
    return acc;
  }, []);

  menuList.forEach((menu) => {
    const [menuName] = menu;
    if (!menuNameList.includes(menuName)) {
      throw new Error(ERROR.INVALID_ORDER);
    }
  });
}

function checkMenuCount(menuList) {
  menuList.forEach((menu) => {
    const [, menuCount] = menu;
    const menuCountToNumber = parseInt(menuCount);

    if (
      menuCount < MINIMUM_MENU_COUNT ||
      isNaN(menuCountToNumber) ||
      Number(menuCount) !== menuCountToNumber
    ) {
      throw new Error(ERROR.INVALID_ORDER);
    }
  });
}

function checkDuplicateMenu(menuList) {
  const menuNameList = menuList.map(([menuName]) => menuName);
  const duplicateMenu = menuNameList.filter((menu, index) => menuNameList.indexOf(menu) !== index);

  if (duplicateMenu.length > 0) {
    throw new Error(ERROR.INVALID_ORDER);
  }
}

function checkOnlyDrink(menuList) {
  const drinkMenuList = MENU.drink.map((item) => item.name);
  const isOnlyDrink = menuList.every(([menuName]) => drinkMenuList.includes(menuName));

  if (isOnlyDrink) {
    throw new Error(ERROR.ONLY_DRINK);
  }
}

function checkMaximumOrder(menuList) {
  const menuCountList = menuList.map(([, menuCount]) => Number(menuCount));
  const menuCountSum = menuCountList.reduce((acc, menuCount) => acc + menuCount, 0);

  if (menuCountSum > MAXIMUM_ORDER) {
    throw new Error(ERROR.MAXIMUM_ORDER);
  }
}
