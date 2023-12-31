const SettingsCheckbox = (props) => {
    const {MySettings, DefaultSettings, updateMySettings, cdSetting} = props
    return (
        <div>
            <div>
                <label htmlFor={"input_"+cdSetting}>Set {cdSetting}</label>
                <input
                    type="checkbox"
                    id={cdSetting}
                    onChange={(e) => { updateMySettings(e) }}
                    checked={MySettings[cdSetting]}
                >
                </input>
                <b>Current: {MySettings[cdSetting] ? "TRUE" : "FALSE"}</b>
                <i>Default: {DefaultSettings[cdSetting] ? "TRUE" : "FALSE"}</i>
            </div>
        </div>
    )
}

export default SettingsCheckbox