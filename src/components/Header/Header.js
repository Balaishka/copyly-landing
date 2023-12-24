import "./Header.css";
import logo from "../../images/logo.svg";
import arrow from "../../images/arrow-down.svg";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header({ t, i18n, changeLang }) {
  const [langOpened, setLangOpened] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (langOpened) {
      window.addEventListener("click", closeLang);
      return () => window.removeEventListener("click", closeLang);
    }
  }, [langOpened]);

  function closeLang(e) {
    if (
      e.target.className !== "header__list header__list_opened" &&
      e.target.className !== "header__item" &&
      e.target.className !== "header__lang-btn" &&
      e.target.classList[0] !== "header__lang-img"
    ) {
      setLangOpened(false);
    }
  }

  function toggleLang() {
    setLangOpened(!langOpened);
  }

  function changeLangToRu() {
    changeLang("ru");
    setLangOpened(false);
  }

  function changeLangToEn() {
    changeLang("en");
    setLangOpened(false);
  }

  function toggleMenu() {
    console.log("Я тут");
    console.log(menuOpened);
    setMenuOpened(!menuOpened);
  }

  return (
    <header className={`header ${menuOpened ? "header__opened" : ""}`}>
      <div className="header__left">
        <a className="header__logo-link" href="/">
          <img className="header__logo-img" src={logo} alt={t("logo")} />
        </a>
        <Navigation t={t} navClass="desctop" />
      </div>
      
      <button
        className={`header__burger ${
          menuOpened ? "header__burger_opened" : ""
        }`}
        type="button"
        onClick={toggleMenu}
      ></button>

      <div
        className={`header__container ${
          menuOpened ? "header__container_opened" : ""
        }`}
      >
        <Navigation t={t} navClass="mobile" />
        <div className="header__lang">
          <button
            onClick={toggleLang}
            className="header__lang-btn"
            type="button"
          >
            {i18n.language === "ru" ? "Russian" : "English"}
            <img
              className={`header__lang-img ${
                langOpened ? "header__lang-img_opened" : ""
              }`}
              alt="Стрелка"
              src={arrow}
            />
          </button>
          <ul
            className={`header__list ${
              langOpened ? "header__list_opened" : ""
            }`}
          >
            <li className="header__item" onClick={changeLangToRu}>
              Russian
            </li>
            <li className="header__item" onClick={changeLangToEn}>
              English
            </li>
          </ul>
        </div>

        {/* <a className="page__btn header__btn" href="http://app.copyly.xyz/">{t("start")}</a> */}
        <button className="page__btn page__btn_disabled header__btn" disabled="disabled" type="button">{t("coming_soon")}</button>
      </div>
    </header>
  );
}

export default Header;
