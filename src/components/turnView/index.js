import React from "react"
import TurnScore from "../turnScore"
import CharacterCard from "../characterCard"
import Timer from "../timer"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"

function TurnView({finishPlaying}) {
  const {t} = useTranslation()

  return (
    <div>
      <TurnScore />
      <CharacterCard />
      <Timer seconds={3} handler={finishPlaying} />
      <ActionButton buttonText={t("Right answer")} />
      <ActionButton buttonText={t("Next character")} />
    </div>
  )
}

export default TurnView
