import React from "react"
import { connect } from "react-redux"
import SettingList from "../../components/settingList/SettingList"

const SettingListContainer = ({settings}) => {
	return (
		<SettingList settings={settings} />
	)
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SettingListContainer)
