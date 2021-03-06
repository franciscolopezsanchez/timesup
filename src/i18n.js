import i18n from "i18next"
import {initReactI18next} from "react-i18next"

import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      TICKING: "TICKING",
      Play: "Play",
      Start: "Start",
      "Next Round": "Next Round",
      "Right answer": "Right answer",
      "Next character": "Next character",
      "Characters per player": "Characters per player",
      "Seconds per turn": "Seconds per turn",
    },
  },
  es: {
    translation: {
      TICKING: "TICKING",
      Play: "Jugar",
      Start: "Comenzar!",
      "Next Round": "Siguiente Ronda",
      "Right answer": "CORRECTO",
      "Next character": "PASAR",
      "Characters per player": "Personajes por jugador",
      "Seconds per turn": "Segundos por turno",
    },
  },
  fr: {
    translation: {
      TICKING: "TICKING",
      Play: "Jouer",
      Start: "Commencer!",
      "Next Round": "Prochain Tour",
      "Right answer": "CORRECT",
      "Next character": "PASSER",
      "Characters per player": "Caractères par jouer",
      "Seconds per turn": "Secondes par tour",
    },
  },
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
