import styles from './styles.module.scss';

function Footer() {
  return (
 <footer className={styles.footer}>
    <div className="container">
      <div className="footer--wrapper">
        <div className="footer__creator">
          <img src="./images/footer/Logo.png" alt="" className="logo__footer"/>
          <p className="footer__creator--text">
            Built by <a href="#!" className="footer__creator--link">Nikolai Bain</a>
          </p>
          <p className="footer__creator--text">
            Powered by <a href="#!" className="footer__creator--link">Webflow</a>
          </p>
        </div>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__list--title footer__info"><span className="footer__list--heading">Info</span>
              <ul className="footer__inner--list">
                <li className="footer__list--item"><a href="#!">Features</a></li>
                <li className="footer__list--item"><a href="#!">Pricing</a></li>
                <li className="footer__list--item"><a href="#!">Blog</a></li>
                <li className="footer__list--item"><a href="#!">Support</a></li>
                <li className="footer__list--item"><a href="#!">Terms & Conditions</a></li>
                <li className="footer__list--item"><a href="#!">Privacy Policy</a></li>
              </ul>
            </li>

            <li className="footer__list--title footer__admin"><span className="footer__list--heading">Admin</span>
              <ul className="footer__inner--list">
                <li className="footer__list--item"><a href="#!">Style Guide</a></li>
                <li className="footer__list--item"><a href="#!">Licenses</a></li>
                <li className="footer__list--item"><a href="#!">Instructions</a></li>
                <li className="footer__list--item"><a href="#!">Changelog</a></li>
                <li className="footer__list--item"><a href="#!">Password</a></li>
                <li className="footer__list--item"><a href="#!">404</a></li>
              </ul>
            </li>

            <li className="footer__list--title footer__newsletter"><span className="footer__list--heading">Newsletter</span>
              <ul className="footer__inner--list">
                <li className="footer__list--item">
                  <p className="footer__list--text">Sign up for the latest news, company insights, and Whirl updates.</p>
                </li>
                <li className="footer__list--email">
                  <input type="text" placeholder="Your email" className="footer__input--email"/>
                  <button className="btn button--icon">
                    <img src="./images/footer/arrow.png" alt="" className="footer__img--arrow"/>
                  </button>
                </li>
              </ul>
            </li>

          </ul>
        </nav>



      </div>
    </div>
    <div className="container">
      <div className="footer__socials">
        <div className="footer__divider">
          <img src="./images/footer/big__line.png" alt="" className="footer__divider-img"/>
        </div>

        <div className="footer__socials-content">
          <p className="footer__socials--desc">
            © 2022 Whirl. All Rights Reserved. Illustrations by <span>Streamline</span>.
          </p>

          <div className="footer__socials--icons">
            <a href="https://twitter.com"><img src="./images/footer/twitter.png" alt="" className="footer__socials--img"/></a>
            <a href="https://instagram.com"><img src="./images/footer/in.png" alt="" className="footer__socials--img"/></a>
            <a href="https://facebook.com"><img src="./images/footer/f.png" alt="" className="footer__socials--img"/></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;  


 