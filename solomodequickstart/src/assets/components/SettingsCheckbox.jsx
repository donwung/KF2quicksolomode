const SettingsCheckbox = (props) => {
    // TODO: unpack props - for MySettings, DefaultSettings, and updateMySettings
    return (
        <div>
            <div>
                {/* TODO: change the inputs to combined state */}
                <label htmlFor="input_AlbinoAlphas">Set AlbinoAlphas</label>
                <input
                    type="checkbox"
                    placeholder="Default: True"
                    id="AlbinoAlphas"
                    // onChange={(e) => { setAlbinoAlphas(!AlbinoAlphas) }} // working line
                    onChange={(e) => { updateMySettings(e) }} // testing line for combined state implementation
                    checked={props.MySettings["AlbinoAlphas"]}
                // value={MySettings["AlbinoAlphas"]}
                >
                </input>
                <b>Current: {props.MySettings["AlbinoAlphas"] ? "TRUE" : "FALSE"}</b>
                <i>Default: {props.DefaultSettings["AlbinoAlphas"] ? "TRUE" : "FALSE"}</i>
            </div>
        </div>
    )
}

export default SettingsCheckbox