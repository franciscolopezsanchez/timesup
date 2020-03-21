import React, {Fragment} from "react"
import Title from "../title"
import ActionButton from "../actionButton"
import {useTranslation} from "react-i18next"
import styles from "./presentationView.module.scss"

function PresentationView() {
  const {t} = useTranslation()

  return (
    <Fragment>
      <Title />
      <ActionButton buttonText={t("Comenzar")} />
      <div className={styles.mountainsWrapper}>
        <div className={styles.mountainsImage}></div>
      </div>
    </Fragment>
  )
}

export default PresentationView
