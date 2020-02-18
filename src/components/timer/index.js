import React, {useState, useEffect} from "react"

function Timer({seconds, handler}) {
  const [secondsLeft, setSecondsLeft] = useState(seconds)

  useEffect(() => {
    let interval = setInterval(() => {
      substractSecond()
    }, 1000)
    const substractSecond = () => {
      seconds = seconds - 1
      setSecondsLeft(seconds)
      if (seconds <= 0) {
        clearInterval(interval)
        handler()
      }
    }
  }, [])

  return <div>{secondsLeft + "''"}</div>
}

export default Timer
