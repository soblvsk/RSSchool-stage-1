import headerComponent from '../components/Header/Header';
import footerComponent from '../components/Footer/Footer';

class PageSkelet {
  render() {
    const app = document.getElementById('app') as HTMLBodyElement;

    app.innerHTML = `
      ${headerComponent.render()}
      <main class="page">
        <div class="page__container container"></div>
        <div class="modal">
          <div class="modal__overlay">
              <div class="modal__content">
                <h2 class="modal__title font_L">Winner</h2>
                <div class="win-car font_L"></div>
              </div>
          </div> 
        </div>
      </main>
      ${footerComponent.render()}
    `;
  }
}
export default PageSkelet;
