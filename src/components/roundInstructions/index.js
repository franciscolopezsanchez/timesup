import React from "react"
import InstructionsField from "../instructionsField"
import TurnInfo from "../turnInfo"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"

function RoundInstructions({playerPlaying, startPlaying}) {
  const {t} = useTranslation()

  return (
    <div>
      <InstructionsField />
      <TurnInfo playerPlaying={playerPlaying} />
      <ActionButton buttonText={t("Start")} handler={startPlaying} />
    </div>
  )
}

export default RoundInstructions
