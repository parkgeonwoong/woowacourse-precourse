import Car from '../model/Car.js';
import { playerInput, carNameInput } from '../view/Input.js';
import RandomInRange from '../utils/RandomInRange.js';
import CheckWinner from '../utils/CheckWinner.js';
import { Output } from '../view/Output.js';

export default class RacingCarController {
  #CarArr = [];

  async play() {
    this.#getCarNames(await carNameInput());
    this.#getPlayerCount(await playerInput());
  }

  #getCarNames(input) {
    const splitInput = input.split(',');
    splitInput.forEach((carName) => {
      this.#CarArr.push(new Car(carName));
    });
  }

  #getPlayerCount(input) {
    this.#racingStart(input);
  }

  #racingStart(count) {
    Output.startResult();
    Array.from({ length: count }, () => this.#racingMoveOnce());
    this.#getWinner();
  }

  #racingMoveOnce() {
    this.#CarArr.forEach((car) => car.setAdvance(RandomInRange()));
    this.#racingPrintMoveOnce();
  }

  #racingPrintMoveOnce() {
    this.#CarArr.forEach((car) => {
      const name = car.getName();
      const advance = car.getAdvance();
      Output.moveResult(name, advance);
    });
    Output.line();
  }

  #getWinner() {
    const winner = CheckWinner(this.#CarArr).join(', ');
    Output.racingResult(winner);
  }
}
