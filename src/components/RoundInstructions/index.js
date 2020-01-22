import React from "react"
import InstructionsField from "../InstructionsField"
import TurnInfo from "../TurnInfo"
import {useTranslation} from "react-i18next"
import ActionButton from "../ActionButton"

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
