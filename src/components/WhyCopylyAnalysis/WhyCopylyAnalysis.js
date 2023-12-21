import img from "../../images/why-3.png";

function WhyCopylyAnalysis({ t }) {
    return (
        <div className="why-copyly__analysis">
            <div className="why-copyly__analysis-top">
                <img className="why-copyly__analysis-img" src={img} alt={t("why_analysis_title")} />
            </div>

            <div className="why-copyly__analysis-bottom">
                <h3 className="why-copyly__analysis-title">{t("why_analysis_title")}</h3>
                <p className="why-copyly__analysis-text">{t("why_analysis_text")}</p>
            </div>
        </div>
    );
}

export default WhyCopylyAnalysis;
