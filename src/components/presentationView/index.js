import React from "react"
import Title from "../title"
import ActionButton from "../actionButton"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

import styles from "./presentationView.module.scss"

function PresentationView() {
  const {t} = useTranslation()

  return (
    <div className={styles.presentationView}>
      <div className={styles.titleWrapper}>
        <Title />
      </div>
      <div className={styles.startButtonWrapper}>
        <Link to="/create">
          <ActionButton buttonText={t("Comenzar")} />
        </Link>
      </div>
      <div className={styles.mountainsWrapper}>
        <div className={styles.mountainsImage}></div>
      </div>
    </div>
  )
}

export default PresentationView
