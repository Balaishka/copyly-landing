import "./WhyCopyly.css";

function WhyCopyly({ t }) {
    return (
        <section className="why-copyly">
            <h2 className="why-copyly__title page__title">{t("why_title")}</h2>
            <p className="why-copyly__subtitle page__subtitle">{t("why_subtitle")}</p>
        </section>
    );
}

export default WhyCopyly;
