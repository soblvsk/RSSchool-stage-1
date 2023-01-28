class Header {
  render() {
    return `
  <header class="header">
    <div class="header__container container">
      <div class="header__body">
        <div class="header__logo logo">
          <img src="../../../assets/logo.png" alt="logo">
        </div>
        <div class="header__main">
          <nav class="header__menu menu-nav">
            <ul class="menu-nav__list">
              <li class="menu-nav__item">
                <button class="btn-garage font_XS menu-nav__link">Garage</button>
              </li>
              <li class="menu-nav__item">
                <button class="btn-winners font_XS menu-nav__link">Winners</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  `;
  }
}

const headerComponent = new Header();
export default headerComponent;
