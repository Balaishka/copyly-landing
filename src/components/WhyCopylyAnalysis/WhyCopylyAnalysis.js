import img_ru from "../../images/why-3-ru.png";
import img_en from "../../images/why-3-en.png";

function WhyCopylyAnalysis({ t, lang }) {
    return (
        <div className="why-copyly__analysis">
            <div className="why-copyly__analysis-top">
                <img className="why-copyly__analysis-img" src={lang === "ru" ? img_ru:img_en} alt={t("why_analysis_title")} />
            </div>

            <div className="why-copyly__analysis-bottom">
                <h3 className="why-copyly__analysis-title">{t("why_analysis_title")}</h3>
                <p className="why-copyly__analysis-text">{t("why_analysis_text")}</p>
            </div>
        </div>
    );
}

export default WhyCopylyAnalysis;
