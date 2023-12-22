import wallets_ru from "../../images/why-1-ru.png";
import target_ru from "../../images/why-1-target-ru.png";
import wallets_en from "../../images/why-1-en.png";
import target_en from "../../images/why-1-target-en.png";

function WhyCopylyWallets({ t, lang }) {
    return (
        <div className="why-copyly__wallets">
            <ul className="why-copyly__wallets-left">
                <li className="why-copyly__wallets-item">
                    <h3 className="why-copyly__wallets-title">{t("why_wallets_title_1_1")}<br />{t("why_wallets_title_1_2")}</h3>
                    <p className="why-copyly__wallets-text">{t("why_wallets_text_1")}</p>
                </li>
                <li className="why-copyly__wallets-item">
                    <h3 className="why-copyly__wallets-title">{t("why_wallets_title_2")}</h3>
                    <p className="why-copyly__wallets-text">{t("why_wallets_text_2")}</p>
                </li>
            </ul>

            <div className="why-copyly__wallets-right">
                <img className="why-copyly__wallets-img why-copyly__wallets-img_type_desctop" src={lang === "ru" ? wallets_ru:wallets_en} alt={t("why_wallets_title_1")} />
                <img className="why-copyly__wallets-img why-copyly__wallets-img_type_target" src={lang === "ru" ? target_ru:target_en} alt={t("why_wallets_title_1")} />
            </div>
        </div>
    );
}

export default WhyCopylyWallets;
