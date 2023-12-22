import "./WhyCopyly.css";
import WhyCopylyWallets from "../WhyCopylyWallets/WhyCopylyWallets";
import WhyCopylyTg from "../WhyCopylyTg/WhyCopylyTg";
import WhyCopylyAnalysis from "../WhyCopylyAnalysis/WhyCopylyAnalysis";
import WhyCopylyBase from "../WhyCopylyBase/WhyCopylyBase";

function WhyCopyly({ t, lang }) {
    return (
        <section className="why-copyly" id="why-copyly">
            <h2 className="why-copyly__title page__title">{t("why_title")}</h2>
            <p className="why-copyly__subtitle page__subtitle">{t("why_subtitle")}</p>

            <div className="why-copyly__container">
                <WhyCopylyWallets t={t} lang={lang} />
                <WhyCopylyTg t={t} lang={lang} />
                <WhyCopylyAnalysis t={t} lang={lang} />
                <WhyCopylyBase t={t} />
            </div>
        </section>
    );
}

export default WhyCopyly;
