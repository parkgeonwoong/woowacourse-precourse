import { ERROR } from '../../src/constants/Error.js';
import { menuInputValidator } from '../../src/validator/MenuInputValidator.js';

describe('메뉴 입력 유효성 검사', () => {
  test('올바른 입력이 주어졌을 때는 예외가 발생하지 않아야 합니다.', () => {
    const validInput = '해산물파스타-2,레드와인-1,초코케이크-1';
    expect(() => menuInputValidator(validInput)).not.toThrow();
  });

  test('메뉴판에 없는 메뉴를 입력하면 예외가 발생합니다.', () => {
    const invalidInput = '해산물파스타-2,레드와인-1,초코케이크-1,콜라-1';
    expect(() => menuInputValidator(invalidInput)).toThrow(ERROR.INVALID_ORDER);
  });

  //  - 메뉴의 개수는 1 이상의 숫자만 입력되도록 해주세요. 이외의 입력값은 "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
  test('메뉴의 개수는 1 이상의 숫자가 아닌경우 예외가 발생합니다.', () => {
    const invalidInput = '해산물파스타-0,레드와인-1,초코케이크-1';
    const invalidInputPoint = '해산물파스타-1,레드와인-1,초코케이크-1.5';
    const invalidInputString = '해산물파스타-1,레드와인-1,초코케이크-abc';

    expect(() => menuInputValidator(invalidInput)).toThrow(ERROR.INVALID_ORDER);
    expect(() => menuInputValidator(invalidInputPoint)).toThrow(ERROR.INVALID_ORDER);
    expect(() => menuInputValidator(invalidInputString)).toThrow(ERROR.INVALID_ORDER);
  });

  //  - 메뉴 형식이 예시와 다른 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
  //  - 중복 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1), "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
  //  - 음료만 주문 시, 주문할 수 없습니다.
  //  - 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)
});
