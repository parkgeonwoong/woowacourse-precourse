import { Console } from '@woowacourse/mission-utils';
import { isValidCarName, isValidPlayerInput } from '../utils/Validation.js';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';

export async function carNameInput() {
  const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.playerCarName);
  isValidCarName(inputValue);
  return inputValue;
}

export async function playerInput() {
  const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.playerInput);
  isValidPlayerInput(inputValue);
  return inputValue;
}
