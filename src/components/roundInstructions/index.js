import React from "react"
import InstructionsField from "../instructionsField"
import TurnInfo from "../turnInfo"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"

function RoundInstructions({startPlaying}) {
  const {t} = useTranslation()

  return (
    <div>
      <InstructionsField />
      <TurnInfo />
      <ActionButton buttonText={t("Start")} handler={startPlaying} />
    </div>
  )
}

export default RoundInstructions
