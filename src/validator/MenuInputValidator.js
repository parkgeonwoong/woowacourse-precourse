// - 메뉴의 개수는 1 이상의 숫자만 입력되도록 해주세요. 이외의 입력값은 "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
// - 메뉴 형식이 예시와 다른 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
// - 중복 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1), "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
// - 음료만 주문 시, 주문할 수 없습니다.
// - 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)

import { ERROR } from '../constants/Error.js';
import { MENU } from '../constants/Menu.js';

export function menuInputValidator(input) {
  const inputList = input.split(',').map((menu) => menu.split('-'));

  console.log('inputList:', inputList);
  checkMenuName(inputList);
}

function checkMenuName(menuList) {
  const menuNameList = Object.keys(MENU).reduce((acc, menu) => {
    acc.push(...MENU[menu].map((item) => item.name));
    return acc;
  }, []);

  console.log('menuNameList: ', menuNameList);

  menuList.forEach((menu) => {
    if (!menuNameList.includes(menu[0])) {
      throw new Error(ERROR.INVALID_ORDER);
    }
  });
}

// 티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1
