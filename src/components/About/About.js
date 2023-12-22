import "./About.css";
import screen_ru from "../../images/about-ru.png";
import screen_en from "../../images/about-en.png";

function About({ t, lang }) {
    return (
        <section className="about" id="about-us">
            <h2 className="about__title page__title">{t("about_title")}</h2>
            <p className="about__subtitle page__subtitle">{t("about_text")}</p>
            <img className="about__img" src={lang === "ru" ? screen_ru:screen_en} alt={t("about__title")} />
        </section>
    );
}

export default About;
