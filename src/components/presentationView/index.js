import React, {Fragment} from "react"
import Title from "../title"
import ActionButton from "../actionButton"
import {useTranslation} from "react-i18next"

function PresentationView() {
  const {t} = useTranslation()

  return (
    <Fragment>
      <Title />
      <ActionButton buttonText={t("Comenzar")} />
    </Fragment>
  )
}

export default PresentationView
