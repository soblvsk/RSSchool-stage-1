import PageSkelet from './pages/PageSkelet';
import ControllerPage from '../controllers/ControllerPage';

class App {
  private page: PageSkelet;

  private pageController: ControllerPage;

  constructor() {
    this.page = new PageSkelet();
    this.pageController = new ControllerPage();
  }

  async start() {
    this.page.render();
    await this.pageController.start();
  }
}

export default App;
