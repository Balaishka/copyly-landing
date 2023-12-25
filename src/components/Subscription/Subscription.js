import "./Subscription.css";
import img from "../../images/sub.svg";

function Subscription({ t }) {
    return (
        <section className="subscription" id="subscribe">
            <h2 className="subscription__title page__title">{t("subscription_title")}</h2>
            <p className="subscription__subtitle page__subtitle">{t("subscription_text")}</p>

            <div className="subscription__block">
                <img className="subscription__img" src={img} alt={t("subscription_title")} />
                <h4 className="subscription__block-title">{t("subscription_block_title")}</h4>
                
                <ul className="subscription__list">
                    <li className="subscription__item">{t("subscription_item_1")}</li>
                    <li className="subscription__item">{t("subscription_item_2")}</li>
                    <li className="subscription__item">{t("subscription_item_3")}</li>
                    <li className="subscription__item">{t("subscription_item_4")}</li>
                    <li className="subscription__item">{t("subscription_item_5")}</li>
                    <li className="subscription__item">{t("subscription_item_6")}</li>
                </ul>

                <div className="subscription__price">
                    <p className="subscription__price-price">{t("subscription_price_text")}</p>
                    {/* <p className="subscription__price-free">{t("subscription_price_free")}</p> */}
                </div>

                {/* <a href="http://app.copyly.xyz/" className="subscription__btn page__btn">{t("subscription_btn")}</a> */}
                <button className="page__btn page__btn_disabled subscription__btn" disabled="disabled" type="button">{t("coming_soon")}</button>
            </div>
        </section>
    );
}

export default Subscription;
