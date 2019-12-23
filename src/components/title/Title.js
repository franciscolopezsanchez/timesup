import React from "react"
import { useTranslation } from "react-i18next"

function Title() {
	const { t } = useTranslation()
	return <h1>{t("TIME'S UP")}</h1>
}

export default Title
