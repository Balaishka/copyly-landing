import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import backend from "i18next-http-backend";

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
              welcome_text: "С Copyly вы сможете увеличить свою прибыль, отслеживая и копируя движения самых эффективных кошельков в пространстве мем-монет",
              about_title: "О нас",
              about_text: "Copyly — инновационная платформа для копи-трейдинга предоставляющая возможность находить инсайдеров и зарабатывать вместе с ними",
              why_title: "Почему Copyly",
              why_subtitle: "Мы меняем будущее копи-трейдинга и фокусируемся на вашей прибыльности, предлагая передовые инновации и простоту использования",
              why_wallets_title_1_1: "Самые актуальные ",
              why_wallets_title_1_2: "и прибыльные кошельки",
              why_wallets_title_2: "Различные источники",
              why_wallets_text_1: "Обрабатываем все сделки с мем-монетами в сети Ethereum в режиме реального времени, предлагая наиболее актуальные данные пользователям нашей платформы",
              why_wallets_text_2: "Помимо обычных трейдеров мы также анализируем снайперов и инсайдеров с таких платформ как BananaGun и Unibot",
              why_tg_title: "Телеграм-бот для копирования сделок",
              why_tg_text_1: "Благодаря удобному боту в Telegram, пользователи могут с легкостью осуществлять копи-трейдинг, получая возможность следить и копировать успешные стратегии опытных трейдеров и инсайдеров",
              why_tg_text_2: "Контролируйте ваши подписки и совершаемые сделки, настраивайте ограничения прямо в чате с помощью бота",
              why_analysis_title: "Множество параметров для анализа",
              why_analysis_text: "При анализе кошельков мы рассчитываем множество параметров и метрик, которые позволяют вам отфильтровать данные и выявить наиболее эффективные кошельки",
              why_base_title: "База знаний для копи-трейдинга",
              why_base_text: "Наша команда накопила обширные знания в области ончейн копи-трейдинга, и мы готовы поделиться своими знаниями и опытом через информативные статьи и руководства",
              subscription_title: "Подписка на Copyly",
              subscription_text: "Начни зарабатывать с Copyly уже сегодня. Оформи подписку, копируй сделки за прибыльными кошельками и оцени все преимущества платформы",
              subscription_block_title: "1 неделя",
              subscription_item_1: "Полный доступ к платформе",
              subscription_item_2: "Подписки для успешного копи-трейдинга",
              subscription_item_3: "Telegram бот для копи-трейдинга",
              subscription_item_4: "Большая база кошельков для анализа",
              subscription_item_5: "Исчерпывающие данные для анализа",
              subscription_item_6: "Бесплатно на время бета-версии",
              subscription_price_text: "X $COPY / 0.05 ETH",
              subscription_price_free: "Бесплатно",
              subscription_btn: "Попробовать бесплатно",
              contacts_title: "Контакты",
              contacts_subtitle: "Присоединяйтесь к сообществу Copyly, где мы меняем будущее копи-трейдинга, предлагая передовые инновации, простоту использования и фокусируясь на вашей прибыльности",
              footer_text: "Все права защищены",
              coming_soon: "Скоро запуск"
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
              welcome_text: "With Copyly, you can increase your profits by tracking and copying the trades of the top performing wallets in the meme coin space",
              about_title: "About Us",
              about_text: "Copyly is an innovative copy trading platform that provides the opportunity to find insiders and earn money with them",
              why_title: "Why Copyly",
              why_subtitle: "We are changing the future of copy trading and focusing on your profitability by delivering cutting-edge innovation and ease of use",
              why_wallets_title_1_1: "The most current and ",
              why_wallets_title_1_2: "profitable wallets",
              why_wallets_title_2: "Various sources",
              why_wallets_text_1: "We process all transactions with meme coins on the Ethereum network in real time, offering the most up-to-date data to users of our platform",
              why_wallets_text_2: "In addition to regular traders, we also analyze snipers and insiders from platforms such as BananaGun and Unibot",
              why_tg_title: "Telegram bot for copying transactions",
              why_tg_text_1: "Thanks to a convenient bot in Telegram, users can easily carry out copy trading, getting the opportunity to follow and copy the successful strategies of experienced traders and insiders",
              why_tg_text_2: "Control your subscriptions and transactions, set restrictions directly in the chat using a bot",
              why_analysis_title: "Many parameters for analysis",
              why_analysis_text: "When analyzing wallets, we calculate many parameters and metrics that allow you to filter the data and identify the most effective wallets",
              why_base_title: "Knowledge base for copy trading",
              why_base_text: "Our team has accumulated extensive knowledge in the field of on-chain copy trading, and we are ready to share our knowledge and experience through informative articles and guides",
              subscription_title: "Subscribe to Copyly",
              subscription_text: "Start making money with Copyly today. Subscribe, copy transactions of profitable wallets and evaluate all the advantages of the platform",
              subscription_block_title: "1 Week",
              subscription_item_1: "Full access to the platform",
              subscription_item_2: "Subscriptions for successful copy trading",
              subscription_item_3: "Telegram bot for copy trading",
              subscription_item_4: "Large database of wallets for analysis",
              subscription_item_5: "Comprehensive data for analysis",
              subscription_item_6: "Free during beta",
              subscription_price_text: "X $COPY / 0.05 ETH",
              subscription_price_free: "For free",
              subscription_btn: "Try for free",
              contacts_title: "Contacts",
              contacts_subtitle: "Join the Copyly community where we're changing the future of copy trading by delivering cutting-edge innovation, ease of use, and a focus on your profitability",
              footer_text: "All rights reserved",
              coming_soon: "Coming soon"
          }
      }

  },
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    lng: localStorage.getItem("lang") ? localStorage.getItem("lang"):"en", // if you're using a language detector, do not define the lng option
    fallbackLng: localStorage.getItem("lang") ? localStorage.getItem("lang"):"en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
