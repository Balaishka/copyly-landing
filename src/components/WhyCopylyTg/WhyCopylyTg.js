import img from "../../images/why-2.png";

function WhyCopylyTg({ t }) {
    return (
        <div className="why-copyly__tg">
            <div className="why-copyly__tg-left">
                <img className="why-copyly__tg-img" src={img} alt={t("why_tg_title")} />
            </div>

            <div className="why-copyly__tg-right">
                <h3 className="why-copyly__tg-title">{t("why_tg_title")}</h3>
                <p className="why-copyly__tg-text">{t("why_tg_text_1")}</p>
                <p className="why-copyly__tg-text">{t("why_tg_text_2")}</p>
            </div>
        </div>
    );
}

export default WhyCopylyTg;
