import "./Footer.css";
import logo from "../../images/logo.svg";

function Footer({ t }) {
  return (
    <footer className="footer">
      <a className="footer__logo-link" href="/">
        <img className="footer__logo-img" src={logo} alt={t("logo")} />
      </a>
      <p className="footer__copyright">&copy; Copyly {new Date().getFullYear()}. {t("footer_text")}</p>
    </footer>
  );
}

export default Footer;
