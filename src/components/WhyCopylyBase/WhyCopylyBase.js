import img1 from "../../images/why-5.svg";
import img2 from "../../images/why-6.svg";
import img1_target from "../../images/why-5-target.svg";
import img2_target from "../../images/why-6-target.svg";

function WhyCopylyBase({ t }) {
    return (
        <div className="why-copyly__base">
            <div className="why-copyly__base-left">
                <img className="why-copyly__base-left-img why-copyly__base-left-img_type_desctop" src={img1} alt={t("why_base_title")} />
                <img className="why-copyly__base-left-img why-copyly__base-left-img_type_target" src={img1_target} alt={t("why_base_title")} />
            </div>

            <div className="why-copyly__base-center">
                <h3 className="why-copyly__base-title">{t("why_base_title")}</h3>
                <p className="why-copyly__base-text">{t("why_base_text")}</p>
            </div>

            <div className="why-copyly__base-right">
                <img className="why-copyly__base-right-img why-copyly__base-right-img_type_desctop" src={img2} alt={t("why_base_title")} />
                <img className="why-copyly__base-right-img why-copyly__base-right-img_type_target" src={img2_target} alt={t("why_base_title")} />
            </div>
        </div>
    );
}

export default WhyCopylyBase;
