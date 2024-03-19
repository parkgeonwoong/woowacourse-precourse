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

  test('메뉴의 개수는 1 이상의 숫자가 아닌경우 예외가 발생합니다.', () => {
    const invalidInput = '해산물파스타-0,레드와인-1,초코케이크-1';
    const invalidInputPoint = '해산물파스타-1,레드와인-1,초코케이크-1.5';
    const invalidInputString = '해산물파스타-1,레드와인-1,초코케이크-abc';

    expect(() => menuInputValidator(invalidInput)).toThrow(ERROR.INVALID_ORDER);
    expect(() => menuInputValidator(invalidInputPoint)).toThrow(ERROR.INVALID_ORDER);
    expect(() => menuInputValidator(invalidInputString)).toThrow(ERROR.INVALID_ORDER);
  });

  test('중복 메뉴를 입력한 경우 예외가 발생합니다.', () => {
    const invalidInput = '해산물파스타-1,레드와인-1,초코케이크-1,해산물파스타-1';
    expect(() => menuInputValidator(invalidInput)).toThrow(ERROR.INVALID_ORDER);
  });

  test('음료만 주문한 경우 예외가 발생합니다.', () => {
    const invalidInput = '제로콜라-2,레드와인-1,샴페인-1';
    expect(() => menuInputValidator(invalidInput)).toThrow(ERROR.ONLY_DRINK);
  });

  test('메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.', () => {
    const invalidInput = '양송이수프-10,티본스테이크-11';
    expect(() => menuInputValidator(invalidInput)).toThrow(ERROR.MAXIMUM_ORDER);
  });
});
