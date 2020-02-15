import React, {useState, useEffect} from "react"
import {useTranslation} from "react-i18next"

function SettingSelector({
  id,
  text,
  defaultValue,
  maxValue,
  minValue,
  stepValue,
  onSetSetting,
}) {
  const {t} = useTranslation()
  const [selectorValue, setSelectorValue] = useState(defaultValue)

  useEffect(() => {
    onSetSetting(id, selectorValue)
  }, [])

  function handleChange(event) {
    setSelectorValue(event.target.value)
    onSetSetting(id, selectorValue)
  }
  return (
    <div>
      <p>{selectorValue + " " + t(text)}</p>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        step={stepValue}
        value={selectorValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default SettingSelector
