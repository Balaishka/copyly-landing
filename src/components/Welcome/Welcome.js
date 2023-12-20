import "./Welcome.css";

function Welcome({ t }) {
    return (
        <section className="welcome">
            <p className="welcome__welc">{t("welcome")}</p>
            <h1 className="welcome__title">{t("welcome_title")}</h1>
            <p className="welcome__text">{t("welcome_text")}</p>
            <a className="welcome__btn page__btn" href="#">{t("start")}</a>
        </section>
    );
}

export default Welcome;
