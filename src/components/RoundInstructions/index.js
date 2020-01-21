import React from "react"
import InstructionsField from "../instructionsField/InstructionsField"
import TurnInfo from "../turnInfo/TurnInfo"
import {useTranslation} from "react-i18next"
import ActionButton from "../actionButton/ActionButton"

function RoundInstructions({round, playerPlaying, startPlaying}) {
  const {t} = useTranslation()

  return (
    <div>
      <InstructionsField round={round} />
      <TurnInfo playerPlaying={playerPlaying} />
      <ActionButton buttonText={t("Start")} handler={startPlaying} />
    </div>
  )
}

export default RoundInstructions
