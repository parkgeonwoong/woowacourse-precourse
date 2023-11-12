import { EventPlaner } from './controller/EventPlaner.js';

class App {
  async run() {
    const eventPlaner = new EventPlaner();
    await eventPlaner.run();
  }
}

export default App;
