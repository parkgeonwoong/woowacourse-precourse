import { THIS_MONTH } from '../constants/Date.js';
import { ERROR } from '../constants/Error.js';

export function dateInputValidator(input) {
  if (input < THIS_MONTH.FIRST_DATE || input > THIS_MONTH.LAST_DATE) {
    throw new Error(ERROR.INVALID_NUMBER);
  }

  if (isNaN(input)) {
    throw new Error(ERROR.INVALID_NUMBER);
  }
}
