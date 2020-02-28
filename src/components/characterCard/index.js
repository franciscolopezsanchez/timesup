import React from "react"
import {connect} from "react-redux"

import {getActualRound} from "../../reducers/game"
import {getNextCharacter} from "../../reducers/rounds"

import styles from "./characterCard.module.scss"

function CharacterCard({character}) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>{character}</h1>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  actualRound: getActualRound(state),
  character: getNextCharacter(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard)
