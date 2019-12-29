export const SET_SETTING = "SET_SETTING"

export const setSetting = (id, value) => ({
	type: SET_SETTING,
	payload: {id, value}
})