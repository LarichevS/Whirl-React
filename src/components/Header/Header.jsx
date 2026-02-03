import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
    <div className="container">
      <div className="header--wrapper">
        <div className="logo__left">
          <img src="./images/icons/logo2.png" alt="логотип" className={styles.logo}/>
          <img src="./images/icons/logo.png" alt="логотип" className={styles.logo}/>
        </div>

        <nav>
          <ul className="header__list">
            <li><a href="#!">Features</a></li>
            <li><a href="#!">Pricing</a></li>
            <li><a href="#!">Integrations</a></li>
            <li><a href="#!">Learn</a></li>
            </ul>
        </nav>

        <div className="header__menu">
          <a className="btn button--transparent-opacity">Sign in</a>
          <a href="" className="btn button--blue">Book a demo</a>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header;