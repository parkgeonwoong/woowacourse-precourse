import { dateInputValidator } from '../../src/validator/DateInputValidator';

describe('방문날짜 유효성 검사', () => {
  it('입력값이 1일 이상 31일 이하인지 검사한다.', () => {
    expect(() => dateInputValidator(0)).toThrow('[ERROR]');
    expect(() => dateInputValidator(32)).toThrow('[ERROR]');
  });

  it('입력값이 숫자인지 검사한다.', () => {
    expect(() => dateInputValidator('123')).toThrow('[ERROR]');
    expect(() => dateInputValidator('a')).toThrow('[ERROR]');
  });
});
