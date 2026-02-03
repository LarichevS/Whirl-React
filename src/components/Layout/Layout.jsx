import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import styles from './styles.module.scss';

function Layout({}) {
  return (
    <>
      <Header />
      <main className={styles.main}>
    <section className="welcome">
      <div className="container">
        <div className="welcome--wrapper">
          <div className="welcome_text">
            <h1 className="welcome__title"> Your everyday<br />
              tasks, automated.</h1>
            <p className="welcome__desc">
              Whirl lets you design and streamline<br />
              your everyday tasks and workflows<br />
              in just a few clicks.
            </p>
            <div className="welcome__actions">
              <a href="" className="btn button--blue">Book a demo</a>
              <a href="" className="btn button--icon">Learn more
                <img src="./images/Welcome/arrow.png"/>
              </a>

            </div>
          </div>
          <img src="./images/Welcome/start_photo.png" className="welcome__img"/>
        </div>
        <h4 className="trust__companies">Trusted by 50,000+ companies</h4>
        <div className="welcome__companies">
          <img  src="./images/Welcome/focusFox.png"/>
          <img src="./images/Welcome/NowInTech.png"/>
          <img src="./images/Welcome/Optimer.png"/>
          <img src="./images/Welcome/Carded.png"/>
        </div>
      </div>
    </section>
    <section className="info--cards">
      <div className="container">
        <div className="info--cards__wrapper">
          <div className="info--cards__lightning">
            <img src="./images/Info--cards/lightning.png" alt="" className="info--card__img"/>
            <p className="info--cards__title">Fast. Really fast.</p>
            <p className="info--cards__desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.</p>
          </div>
          <div className="info--cards__dollar">
            <img src="./images/Info--cards/dollar.png" alt="" className="info--card__img"/>
            <p className="info--cards__title">More bang for buck.</p>
            <p className="info--cards__desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.</p>
          </div>
          <div className="info--cards__hand">
            <img src="./images/Info--cards/hand.png" alt="" className="info--card__img"/>
            <p className="info--cards__title">Safe and secure.</p>
            <p className="info--cards__desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="company--info">
      <div className="container">
        <div className="company--wrapper">
          <div className="title--linelist">
            <p className="company--info__title">
              <span className="company--info__title--big">We will take care of everything,<br /></span>
              <span className="company--info__title--small"> so you can get back to relaxing.</span>
            </p>

            <ul className="line-list">
              <li className="item item--active">
                <div className="item__row">
                  <img src="./images/Company--info/clip.png" alt=""/>
                  <span className="line--list__text">Anti-loss technology</span>
                  <img src="./images/Company--info/arrow.png" alt="" className="line--list__arrow"/>
                </div>
                <div className="item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </li>

              <li className="item">
                <div className="item__row">
                  <img src="./images/Company--info/smile.png" alt=""/>
                  <span className="line--list__text">Exchange easily</span>
                  <img src="./images/Company--info/arrow.png" alt="" className="line--list__arrow"/>
                </div>
                <div className="item__text">
                  <p>Текст 2</p>
                </div>
              </li>

              <li className="item">
                <div className="item__row">
                  <img src="./images/Company--info/letter.png" alt=""/>
                  <span className="line--list__text">Fully encrypted</span>
                  <img src="./images/Company--info/arrow.png" alt="" className="line--list__arrow"/>
                </div>
                <div className="item__text">
                  <p>Текст 3</p>
                </div>
              </li>

              <li className="item">
                <div className="item__row">
                  <img src="./images/Company--info/lightning.png" alt=""/>
                  <span className="line--list__text">Plenty of options</span>
                  <img src="./images/Company--info/arrow.png" alt="" className="line--list__arrow"/>
                </div>
                <div className="item__text">
                  <p>Текст 4</p>
                </div>
              </li>
            </ul>

          </div>

          <div className="img__PC--right">
            <img src="./images/Company--info/PC.png" className="company--info__img" alt=""/>
          </div>
        </div>
      </div>
    </section>

    <section className="about--company">
      <div className="container">
        <div className="about--company__cards">
          <p className="title--about__company"> What's Whirl<br />all about? </p>
          <div className="about--card__non">
            <p className="title--card">All on one place.</p>
            <p className="desc--card">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
          <div className="about--card__loupe">
            <img src="./images/about--company/loupe.png" alt=""/>
            <p className="title--card">Get daily alerts.</p>
            <p className="desc--card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore.</p>
          </div>
          <div className="about--card__pc">
            <img src="./images/about--company/pc.png" alt=""/>
            <p className="title--card">Safe and secure.</p>
            <p className="desc--card">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="tracking">
      <div className="container">
        <div className="tracking--wrapper">

          <div className="tracking__img--left">
            <img src="./images/tracking/title-img.png" className="title__tracking--img" alt=""/>
          </div>

          <div className="title__list--right">
            <p className="tracking__title">Set, forget, and then track.</p>
            <p className="tracking__decs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="tracking__list">
              <li className="tracking__item">
                <img src="./images/tracking/mark.png" className="title__tracking--mark"/>
                <span className="tracking__list--text">Understand your options</span>
              </li>

              <li className="tracking__item">
                <img src="./images/tracking/mark.png" className="title__tracking--mark"/>
                <span className="tracking__list--text">No lock-ins</span>
              </li>

              <li className="tracking__item">
                <img src="./images/tracking/mark.png" className="title__tracking--mark"/>
                <span className="tracking__list--text">You own the shares</span>
              </li>
            </ul>

            <button className="btn button--blue">Book a Demo</button>
          </div>
        </div>

      </div>
    </section>

    <section className="tasks--automation">
      <div className="container">
        <div className="tasks--automation__wrapper">
          <p className="tasks--automation__title">Your tasks, automated.</p>
          <p className="tasks--automation__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>

          <div className="tasks__cards">
            <div className="tasks__card--circles">
              <img src="./images/task--automated/circles.png" alt="" className="img__cards"/>
              <p className="title__cards">Learn your options.</p>
              <p className="desc__cards">Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit,<br />
                sed do eiusmod tempor.</p>
            </div>

            <div className="tasks__card--lightning">
              <img src="./images/task--automated/lightning.png" alt="" className="img__cards"/>
              <p className="title__cards">Stay informed.</p>
              <p className="desc__cards--lightning">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit, sed<br />
                do eiusmod tempor incididunt<br />
                ut labore et doloretro.</p>
            </div>

            <div className="tasks__card--hand">
              <img src="./images/task--automated/hand.png" alt="" className="img__cards"/>
              <p className="title__cards">Automate it all.</p>
              <p className="desc__cards--hand">Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit, sed<br />
                do eiusmodtempor ipsum.</p>
            </div>

            <div className="tasks__card--exclamation">
              <img src="./images/task--automated/exclamation.png" alt="" className="img__cards"/>
              <p className="title__cards">Stay informed.</p>
              <p className="desc__cards">Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit,<br />
                sed do eiusmod incididunt ut<br />
                labore et consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blog">
      <div className="container">
        <div className="blog--wrapper">
          <div className="title__all--post">
            <p className="blog__title">Get smarter, with our blog.</p>
            <button className="btn button--transparent ">See All Posts</button>
          </div>

          <div className="blog__cards">

            <div className="blog__card--phone">
              <img src="./images/blog/phone.png" alt="" className="blog__cards--img"/>
              <span className="card__badgy">Improvements</span>
              <p className="title__card--phone">Automating Daily Tasks from Your Phone</p>
              <p className="desc__card--phone">Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione
                sequi. Provident ad sed velit. Est ea ab.</p>
              <data className="blog__date--card">April 24, 2022</data>

            </div>

            <div className="blog__card--laptop">
              <img src="./images/blog/laptop.png" alt="" className="blog__cards--img"/>
              <span className="card__badgy">Tips & Tricks</span>
              <p className="title__card--laptop">Can You Automate Group Learning?</p>
              <p className="desc__card--laptop">Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione
                sequi. Provident ad sed velit. Est ea ab.</p>
              <data className="blog__date--card">April 24, 2022</data>

            </div>

            <div className="blog__card--hands">
              <img src="./images/blog/hands.png" alt="" className="blog__cards--img"/>
              <span className="card__badgy">News</span>
              <p className="title__card--hands">Our $3,000,000 B Round Investors</p>
              <p className="desc__card--hands">Eos ipsum et est quis neque cum. Quis autem est eligendi amet animi eaque.
                Itaque minus illo delectus.</p>
              <data className="blog__date--card">April 24, 2022</data>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="started">
      <div className="container">
        <div className="get--started">
          <p className="title__started">Get started with Whirl</p>
          <p className="desc__started">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
            sed do eiusmod tempor
            incididunt. </p>
          <button className="btn button--blue">Book a demo</button>
          <div className="badgy__started">
            <div className="started__badgy--free">
              <svg viewBox="0 0 20 20" className="icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7L8.3333 14L4 10.5" stroke="#6D757C" strokeWidth="1.9" fill="none" />
              </svg>
              <p className="budgy__desc">Free 30-day trial</p>
            </div>
            <div className="started__badgy--credit">
              <svg viewBox="0 0 20 20" className="icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7L8.3333 14L4 10.5" stroke="#6D757C" strokeWidth="2" fill="none" />
              </svg>
              <p className="budgy__desc">No credit-card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
          <Footer />
  </main>
    </>
  );
}

export default Layout;
