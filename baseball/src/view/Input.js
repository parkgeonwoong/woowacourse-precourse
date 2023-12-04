import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_INFO } from '../constants/Message.js';
import { isValidInput, isValidRestart } from '../utils/Validation.js';

export async function player() {
  const inputValue = await Console.readLineAsync(MESSAGE_INFO.gameInput);
  isValidInput(inputValue);
  return inputValue;
}

export async function restart() {
  const inputValue = await Console.readLineAsync(MESSAGE_INFO.gameRestart);
  isValidRestart(inputValue);
  return inputValue;
}
