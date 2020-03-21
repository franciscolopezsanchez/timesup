import React from "react"
import styles from "./Title.module.scss"

function Title() {
  return (
    <div className={styles.logoWrapper}>
      <img src="/ticking-logo.png" alt="logo" className={styles.logo} />
    </div>
  )
}

export default Title
