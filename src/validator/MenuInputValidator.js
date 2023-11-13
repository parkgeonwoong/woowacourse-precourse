// - 음료만 주문 시, 주문할 수 없습니다.
// - 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)

import { ERROR } from '../constants/Error.js';
import { MENU } from '../constants/Menu.js';

export function menuInputValidator(input) {
  const inputList = input.split(',').map((menu) => menu.split('-'));

  console.log('inputList:', inputList);
  checkMenuName(inputList);
  checkMenuCount(inputList);
  checkDuplicateMenu(inputList);
}

function checkMenuName(menuList) {
  const menuNameList = Object.keys(MENU).reduce((acc, menu) => {
    acc.push(...MENU[menu].map((item) => item.name));
    return acc;
  }, []);

  //   console.log('menuNameList: ', menuNameList);
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

    if (menuCount < 1 || isNaN(menuCountToNumber)) {
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

// 티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1
