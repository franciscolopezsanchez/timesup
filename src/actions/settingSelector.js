export const SET_SETTING_SELECTOR = "SET_SETTING_SELECTOR"

export const setSettingSelector = (id, value) => ({
	type: SET_SETTING_SELECTOR,
	id,
	value
})