import "./App.css";
import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import WhyCopyly from "../WhyCopyly/WhyCopyly";
import Subscription from "../Subscription/Subscription";
import Contacts from "../Contacts/Contacts";

function App() {
  // Язык
  const [lang, setLang] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
  );

  const { t, i18n } = useTranslation();

  function changeLang(newLang) {
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  }

  return (
      <div className="page">
        <Header t={t} i18n={i18n} changeLang={changeLang} />

        <Welcome t={t} />
        <About t={t} />
        <WhyCopyly t={t} />
        <Subscription t={t} />
        <Contacts t={t} />

        <Footer t={t} />
      </div>
  );
}

export default App;
