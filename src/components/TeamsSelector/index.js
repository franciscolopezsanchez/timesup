import React from "react"
import Team from "../Team";
import styles from './TeamsSelector.module.css'

function TeamsSelector({ teams = [], onAddTeam }) {
    return (
       <div className={styles.layout}>
           {teams.map(({ title, players, onAddPlayer }) => <Team title={title} players={players} onAddPlayer={onAddPlayer} />)}
           {
               onAddTeam &&
               <div className={styles.cardAddTeam}>
                   <button className={styles.addTeam}>
                       Add team
                   </button>
               </div>
           }
       </div>
    )
}

export default TeamsSelector
