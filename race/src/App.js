import RacingCarController from './controller/RacingCarController.js';

class App {
  async play() {
    this.game = new RacingCarController();
    await this.game.play();
  }
}

export default App;
