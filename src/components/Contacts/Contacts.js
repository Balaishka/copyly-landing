import "./Contacts.css";
import tg from "../../images/telegram.svg";
import tw from "../../images/twitter.svg";
import eth from "../../images/etherscan.svg";
import git from "../../images/gitbook.svg";

function Contacts({ t }) {
    return (
        <section className="contacts" id="contacts">
            <div className="contacts__container">
                <h2 className="contacts__title page__title">{t("contacts_title")}</h2>
                <p className="contacts__subtitle page__subtitle">{t("contacts_subtitle")}</p>

                <h3 className="contacts__ca-title">CA:</h3>
                <p className="contacts__ca-number page__subtitle">0x98Ac1DAaF3C6CD134A6bcb693f6001548dE253Bd</p>
                <div className="contacts__links">
                    <a href="https://t.me/copylyxyz" className="contacts__link contacts__link_name_tg" target="_blank">
                        <img className="contacts__icon" src={tg} alt="Телеграм" />
                    </a>
                    <a href="https://twitter.com/Copylyxyz" className="contacts__link contacts__link_name_tw" target="_blank">
                        <img className="contacts__icon" src={tw} alt="Твиттер" />
                    </a>
                    <a href="https://etherscan.io/token/0x98Ac1DAaF3C6CD134A6bcb693f6001548dE253Bd" className="contacts__link contacts__link_name_eth" target="_blank">
                        <img className="contacts__icon" src={eth} alt="Эфирскан" />
                    </a>
                    <a href="https://copyly.gitbook.io/docs/" className="contacts__link contacts__link_name_git" target="_blank">
                        <img className="contacts__icon" src={git} alt="Гитбук" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
