import React from "react"
import {connect} from "react-redux"
import SettingList from "../../components/settingList"

import {setSetting} from "../../actions/setting"

const SettingListContainer = ({settings, setSetting}) => {
  return <SettingList settings={settings} onSetSetting={setSetting} />
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({
  setSetting: (id, value) => dispatch(setSetting(id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingListContainer)
