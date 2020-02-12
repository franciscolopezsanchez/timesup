import React from "react"
import TeamScore from "../teamScore"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

function StatsView() {
  const {t} = useTranslation()

  return (
    <div>
      <TeamScore />
      <TeamScore />
      <Link to="/play">
        <ActionButton buttonText={t("Next Round")} />
      </Link>
    </div>
  )
}

export default StatsView
