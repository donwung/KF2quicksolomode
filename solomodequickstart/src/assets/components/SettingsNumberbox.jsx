const SettingsNumberbox = (props) => {
    const {MySettings, DefaultSettings, updateMySettings, cdSetting} = props
    return (
        <div>
            <div>
                <label htmlFor={"input_"+cdSetting}>Set {cdSetting}</label>
                <input
                    type="number"
                    placeholder={"Default: "+ DefaultSettings[cdSetting]}
                    id={cdSetting}
                    onChange={(e) => { updateMySettings(e) }}
                    value={MySettings[cdSetting]}
                    style={{width: "40px"}}
                >
                </input>
                <b>Current: {MySettings[cdSetting]}</b>
                <i>Default: {DefaultSettings[cdSetting]}</i>
            </div>
        </div>
    )
}

export default SettingsNumberbox