import React from "react"
import TeamScore from "../teamScore"
import ActionButton from "../actionButton"
import {useParams} from "react-router"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

function StatsView() {
  const {t} = useTranslation()
  let {round} = useParams()

  return (
    <div>
      <span>Stadisticas para la ronda {round} </span>
      <TeamScore round={round} team={0} />
      <TeamScore round={round} team={1} />
      <Link to="/play">
        <ActionButton buttonText={t("Next Round")} />
      </Link>
    </div>
  )
}

export default StatsView
