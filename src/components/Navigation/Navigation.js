import "./Navigation.css";

function Navigation({ t, navClass }) {
    return (
        <nav className={`navigation navigation-${navClass}`}>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a href="#about-us" className="navigation__link">{t("about_us")}</a>
                </li>
                <li className="navigation__item">
                    <a href="#why-copyly" className="navigation__link">{t("why_copyly")}</a>
                </li>
                <li className="navigation__item">
                    <a href="#subscribe" className="navigation__link">{t("subscription")}</a>
                </li>
                <li className="navigation__item">
                    <a href="#contacts" className="navigation__link">{t("contacts")}</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;