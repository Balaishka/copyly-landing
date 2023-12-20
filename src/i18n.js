import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  //.use(backend)
  .init({
    resources: {
      ru: {
          translation: {
              logo: "Логотип",
              about_us: "О нас",
              why_copyly: "Почему Copyly",
              subscription: "Подписка",
              contacts: "Контакты",
              start: "Начать сейчас",
              welcome: "Добро пожаловать в Copyly",
              welcome_title: "Раскройте возможности копитрейдинга",
              welcome_text: "С Copyly вы сможете увеличить свою прибыль, отслеживая и копируя движения самых эффективных кошельков в пространстве мем-монет",
              about_title: "О нас",
              about_text: "Copyly — инновационная платформа для копи-трейдинга предоставляющая возможность находить инсайдеров и зарабатывать вместе с ними",
              why_title: "Почему Copyly",
              why_subtitle: "Мы меняем будущее копи-трейдинга и фокусируемся на вашей прибыльности, предлагая передовые инновации и простоту использования"
          }
      },
      en: {
          translation: {
              logo: "Logotype",
              about_us: "About Us",
              why_copyly: "Why Copyly",
              subscription: "Subscription",
              contacts: "Contacts",
              start: "Start now",
              welcome: "Welcome to Copyly",
              welcome_title: "Unleash the power of copy trading",
              welcome_text: "With Copyly, you can increase your profits by tracking and copying the movements of the top performing wallets in the meme coin space",
              about_title: "About Us",
              about_text: "Copyly is an innovative copy trading platform that provides the opportunity to find insiders and earn money with them",
              why_title: "Why Copyly",
              why_subtitle: "We are changing the future of copy trading and focusing on your profitability by delivering cutting-edge innovation and ease of use"
          }
      }

  },
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    lng: localStorage.getItem("lang") ? localStorage.getItem("lang"):"ru", // if you're using a language detector, do not define the lng option
    fallbackLng: localStorage.getItem("lang") ? localStorage.getItem("lang"):"ru",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
