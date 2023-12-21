import "./About.css";
import screen from "../../images/about.png";

function About({ t }) {
    return (
        <section className="about" id="about-us">
            <h2 className="about__title page__title">{t("about_title")}</h2>
            <p className="about__subtitle page__subtitle">{t("about_text")}</p>
            <img className="about__img" src={screen} alt={t("about__title")} />
        </section>
    );
}

export default About;
