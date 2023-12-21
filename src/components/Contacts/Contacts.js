import "./Contacts.css";
import tg from "../../images/telegram.svg";
import tw from "../../images/twitter.svg";

function Contacts({ t }) {
    return (
        <section className="contacts" id="contacts">
            <div className="contacts__container">
                <h2 className="contacts__title page__title">{t("contacts_title")}</h2>
                <p className="contacts__subtitle page__subtitle">{t("contacts_subtitle")}</p>
                <div className="contacts__links">
                    <a href="https://t.me/Copyly_bot" className="contacts__link contacts__link_name_tg">
                        <img className="contacts__icon" src={tg} alt="Телеграм" />
                    </a>
                    <a href="https://twitter.com/Copylyxyz" className="contacts__link contacts__link_name_tw">
                        <img className="contacts__icon" src={tw} alt="Телеграм" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
