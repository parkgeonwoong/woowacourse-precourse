import Player from './model/Player.js';
import Computer from './model/Computer.js';
import { player, restart } from './view/Input.js';
import { GAME_NUMBER, GAME_END } from './constants/ConfigGame.js';
import { Output } from './view/Output.js';

export default class BaseballGame {
  #player;
  #computer;

  constructor() {
    this.#player = new Player();
    this.#computer = new Computer();
    Output.start();
  }

  async play() {
    const getPlayerInput = await player();
    this.#player.setPlayerNumber(getPlayerInput);
    return this.#compare();
  }

  async #compare() {
    const playerNumber = this.#player.getPlayerNumber();
    const computerNumber = this.#computer.getComputerNumber();
    const result = this.#output(playerNumber, computerNumber);
    Output.result(result);

    if (result.strike === GAME_NUMBER.three) {
      Output.end();
      return this.#restart();
    }
    return this.play();
  }

  async #restart() {
    const getRestartInput = await restart();
    if (getRestartInput === GAME_END.restart) {
      this.#computer.createRandomNumber();
      this.#player.setPlayerNumber('');
      return this.play();
    }
    return 0;
  }

  #output(playerNumber, computerNumber) {
    const playerNumberArray = Array.from(playerNumber).map((value) => Number(value));
    const computerNumberArray = Array.from(computerNumber);
    const state = { strike: 0, ball: 0 };

    playerNumberArray.forEach((value, idx) => {
      if (computerNumberArray.includes(value) && computerNumberArray[idx] === value) {
        state.strike += 1;
      }
      if (computerNumberArray.includes(value) && computerNumberArray[idx] !== value) {
        state.ball += 1;
      }
    });
    return state;
  }
}
