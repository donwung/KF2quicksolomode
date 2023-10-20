import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SettingsCheckbox from './assets/components/SettingsCheckbox'
import SettingsNumberbox from './assets/components/SettingsNumberbox'

function App() {
  const DefaultSettings = {
    "AlbinoAlphas": true,
    "AlbinoCrawlers": true,
    "AlbinoGorefasts": true,
    "CohortSize": 10,
    "DoshKill": 1,
    "FleshpoundHPFakes": 6,
    "HeadlessFleshpoundDmg": 1,
    "HeadlessScrakeDmg": 1,
    "MaxMonsters": 32,
    "QuarterPoundHPFakes": 6,
    "ScrakeHPFakes": 6,
    "SpawnCycle": "asl_v3",
    "TrashHPFakes": 6,
    "WaveSizeFakes": 3,
    "ZedsType": "vanilla"
  }

  const [MySettings, setMySettings] = useState(DefaultSettings)

  const [mapName, setMapName] = useState("KF-Corridor")
  const [disableEventZEDs, setDisableEventZEDs] = useState(true)
  const [disableRobots, setDisableRobots] = useState(true)

  const [globalHpFakes, setGlobalHpFakes] = useState(6)


  // TODO: reduce this to a combined state
  const [AlbinoAlphas, setAlbinoAlphas] = useState(DefaultSettings["AlbinoAlphas"])
  const [AlbinoCrawlers, setAlbinoCrawlers] = useState(DefaultSettings["AlbinoCrawlers"])
  const [AlbinoGorefasts, setAlbinoGorefasts] = useState(DefaultSettings["AlbinoGorefasts"])
  const [CohortSize, setCohortSize] = useState(DefaultSettings["CohortSize"])
  const [DoshKill, setDoshKill] = useState(DefaultSettings["DoshKill"])
  const [FleshpoundHPFakes, setFleshpoundHPFakes] = useState(DefaultSettings["FleshpoundHPFakes"])
  const [HeadlessFleshpoundDmg, setHeadlessFleshpoundDmg] = useState(DefaultSettings["HeadlessFleshpoundDmg"])
  const [HeadlessScrakeDmg, setHeadlessScrakeDmg] = useState(DefaultSettings["HeadlessScrakeDmg"])
  const [MaxMonsters, setMaxMonsters] = useState(DefaultSettings["MaxMonsters"])
  const [QuarterPoundHPFakes, setQuarterPoundHPFakes] = useState(DefaultSettings["QuarterPoundHPFakes"])
  const [ScrakeHPFakes, setScrakeHPFakes] = useState(DefaultSettings["ScrakeHPFakes"])
  const [SpawnCycle, setSpawnCycle] = useState(DefaultSettings["SpawnCycle"])
  const [TrashHPFakes, setTrashHPFakes] = useState(DefaultSettings["TrashHPFakes"])
  const [WaveSizeFakes, setWaveSizeFakes] = useState(DefaultSettings["WaveSizeFakes"])
  const [ZedsType, setZedsType] = useState(DefaultSettings["ZedsType"])

  // const AllSettings = [
  //   "AlbinoAlphas",
  //   "AlbinoCrawlers",
  //   "AlbinoGorefasts",
  //   "CohortSize",
  //   "DoshKill",
  //   "FleshpoundHPFakes",
  //   "HeadlessFleshpoundDmg",
  //   "HeadlessScrakeDmg",
  //   "MaxMonsters",
  //   "QuarterPoundHPFakes",
  //   "ScrakeHPFakes",
  //   "SpawnCycle",
  //   "TrashHPFakes",
  //   "WaveSizeFakes",
  //   "ZedsType"]

  const [ConsoleCommandOutput, setConsoleCommandOutput] = useState("")



  // <ul style={{ textAlign: "left" }}>
  //         NOTE:<li>AlbinoAlphas</li>
  //         NOTE:<li>AlbinoCrawlers</li>
  //         NOTE:<li>AlbinoGorefasts</li>
  //         {/* <li>AntiOvercap (unimportant)</li> */}
  //         {/* <li>AutoPause (unimportant)</li> */}
  //         {/* <li>Boss (unimportant)</li> */}
  //         {/* <li>BossHPFakes (unimportant)</li> */}
  //         {/* <li>ChokePoints (unimportant)</li> */}
  //         NOTE:<li>CohortSize</li>
  //         {/* <li>CountHeadshotsPerPellet (unimportant)</li> */}
  //         NOTE:<li>DoshKill</li>
  //         {/* <li>EnableReadySystem (unimportant)</li> */}
  //         NOTE:<li>FleshpoundHPFakes</li>
  //         NOTE:<li>HeadlessFleshpoundDmg</li>
  //         NOTE:<li>HeadlessScrakeDmg</li>
  //         {/* <li>LargeKillMessage (unimportant)</li> */}
  //         {/* <li>LargesCpCollision (unimportant)</li> */}
  //         {/* <li>LimitCommandoSpares (unimportant)</li> */}
  //         {/* <li>LimitSpares (unimportant)</li> */}
  //         NOTE:<li>MaxMonsters</li>
  //         NOTE:<li>QuarterPoundHPFakes</li>
  //         {/* <li>RecordDemo (unimportant)</li> */}
  //         {/* <li>SaveMatchStats (unimportant)</li> */}
  //         NOTE:<li>ScrakeHPFakes</li>
  //         NOTE:<li>SpawnCycle</li>
  //         {/* <li>SpawnPoll (unimportant)</li> */}
  //         {/* <li>TraderTime (unimportant)</li> */}
  //         {/* <li>TrashCpCollision (unimportant)</li> */}
  //         NOTE:<li>TrashHPFakes</li>
  //         {/* <li>WaveEndSummaries (unimportant)</li> */}
  //         NOTE:<li>WaveSizeFakes</li>
  //         NOTE:<li>ZedsType</li>
  //       </ul>




  // const updateGlobalHpFakes = (e) => {
  //   let desiredGlobalHpFakes = e.target.value
  //   if (desiredGlobalHpFakes < 1 || !desiredGlobalHpFakes) {
  //     desiredGlobalHpFakes = 1
  //   }
  //   setGlobalHpFakes(desiredGlobalHpFakes)
  // }
  // const updateWaveSizeFakes = (e) => {
  //   let desiredWaveSizeFakes = e.target.value
  //   if (desiredWaveSizeFakes < 1 || !desiredWaveSizeFakes) {
  //     desiredWaveSizeFakes = 1
  //   }
  //   setWaveSizeFakes(desiredWaveSizeFakes)
  // }

  const updateMySettings = (e) => {
    // DEBUG:
    let _MySettings = { ...MySettings }
    if (typeof (_MySettings[e.target.id]) === "boolean") {
      console.log("is a checkbox")
      _MySettings[e.target.id] = e.target.checked
    }
    if (typeof (_MySettings[e.target.id]) === "number") {
      console.log("number input")
      _MySettings[e.target.id] = e.target.value * 1
    }

    console.log(_MySettings)
    setMySettings(_MySettings)
  }

  const handleOnCreateConsoleCommand = () => {

    let CommandString = ""
    // TODO: NOTE: move values to combined state - refactor into a loop
    // if (DefaultSettings["AlbinoAlphas"] != MySettings["AlbinoAlphas"]) { 
    //   CommandString += "?AlbinoAlphas=" + AlbinoAlphas
    // }
    if (DefaultSettings["AlbinoAlphas"] != AlbinoAlphas) {
      CommandString += "?AlbinoAlphas=" + AlbinoAlphas
    }
    if (DefaultSettings["AlbinoCrawlers"] != AlbinoCrawlers) {
      CommandString += "?AlbinoCrawlers=" + AlbinoCrawlers
    }
    if (DefaultSettings["AlbinoGorefasts"] != AlbinoGorefasts) {
      CommandString += "?AlbinoGorefasts=" + AlbinoGorefasts
    }
    if (DefaultSettings["CohortSize"] != CohortSize) {
      CommandString += "?CohortSize=" + CohortSize
    }
    if (DefaultSettings["DoshKill"] != DoshKill) {
      CommandString += "?DoshKill=" + DoshKill
    }
    if (DefaultSettings["FleshpoundHPFakes"] != FleshpoundHPFakes) {
      CommandString += "?FleshpoundHPFakes=" + FleshpoundHPFakes
    }
    if (DefaultSettings["HeadlessFleshpoundDmg"] != HeadlessFleshpoundDmg) {
      CommandString += "?HeadlessFleshpoundDmg=" + HeadlessFleshpoundDmg
    }
    if (DefaultSettings["HeadlessScrakeDmg"] != HeadlessScrakeDmg) {
      CommandString += "?HeadlessScrakeDmg=" + HeadlessScrakeDmg
    }
    if (DefaultSettings["MaxMonsters"] != MaxMonsters) {
      CommandString += "?MaxMonsters=" + MaxMonsters
    }
    if (DefaultSettings["QuarterPoundHPFakes"] != QuarterPoundHPFakes) {
      CommandString += "?QuarterPoundHPFakes=" + QuarterPoundHPFakes
    }
    if (DefaultSettings["ScrakeHPFakes"] != ScrakeHPFakes) {
      CommandString += "?ScrakeHPFakes=" + ScrakeHPFakes
    }
    CommandString += "?SpawnCycle=" + SpawnCycle
    if (DefaultSettings["TrashHPFakes"] != TrashHPFakes) {
      CommandString += "?TrashHPFakes=" + TrashHPFakes
    }
    if (DefaultSettings["WaveSizeFakes"] != WaveSizeFakes) {
      CommandString += "?WaveSizeFakes=" + WaveSizeFakes
    }
    CommandString += "?ZedsType=" + ZedsType

    setConsoleCommandOutput(CommandString)
  }

  return (
    <>
      kf2 output
      {/* NOTE: don't need form tag */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h3>
            main category
          </h3>
          <ul>
            <li>mm</li>
            <li>sc</li>
          </ul>
        </div>
        <div>
          <h3>
            secondary category
          </h3>
          <ul>
            <li>CohortSize</li>
            <li>DoshKill</li>
            <li>WSF</li>
          </ul>
        </div>
        <div>
          <h3>
            zeds settings
          </h3>
          <ul>
            <li>AlbinoAlphas</li>
            <li>AlbinoCrawlers</li>
            <li>AlbinoGorefasts</li>
            <li>FPHPF</li>
            <li>SCHPF</li>
            <li>QPHPF</li>
            <li>trashHPF</li>
          </ul>
        </div>
      </div>
      <form>
        <SettingsCheckbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"AlbinoAlphas"}
        >
        </SettingsCheckbox>
        <SettingsCheckbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"AlbinoCrawlers"}
        >
        </SettingsCheckbox>
        <SettingsCheckbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"AlbinoGorefasts"}
        >
        </SettingsCheckbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"CohortSize"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"DoshKill"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"FleshpoundHPFakes"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"HeadlessFleshpoundDmg"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"HeadlessScrakeDmg"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"MaxMonsters"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"QuarterPoundHPFakes"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"ScrakeHPFakes"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"TrashHPFakes"}>
        </SettingsNumberbox>
        <SettingsNumberbox
          MySettings={MySettings}
          DefaultSettings={DefaultSettings}
          updateMySettings={updateMySettings}
          cdSetting={"WaveSizeFakes"}>
        </SettingsNumberbox>
        <div>
          <label htmlFor="input_SpawnCycle">Set SpawnCycle</label>
          <select
            onChange={(e) => setSpawnCycle(e.target.value)}>
            <option value="albino_heavy">albino_heavy by blackout + dandyboy + Kore [SML] </option>
            <option value="basic_heavy">basic_heavy by blackout + dandyboy [SML] </option>
            <option value="basic_moderate">basic_moderate by blackout + dandyboy + Kore[SML] </option>
            <option value="basic_light">basic_light by blackout + dandyboy [SML]</option>
            <option value="dtf_v1">dtf_v1 by Kore[SML] </option>
            <option value="nam_pro_v5">nam_pro_v5 by Nam[SML] </option>
            <option value="nam_pro_v5_plus">nam_pro_v5_plus by Nam[SML] </option>
            <option value="gso_v1">gso_v1 by Tiger[SML]</option>
            <option value="asl_v3">asl_v3 by DarkDarkington [SML]</option>
            <option value="ts_mig_v1">ts_mig_v1 by Machine + Akathiiro313[SML]</option>
            <option value="ts_mig_v1_p">ts_mig_v1_p by Machine + Akathiiro313[SML]</option>
            <option value="ts_mig_v2">ts_mig_v2 by Machine [SML]</option>
            <option value="ts_mig_v3">ts_mig_v3 by Machine [SML]</option>
            <option value="ts_mig_v3_plus">ts_mig_v3_plus by Machine - edit by fanta[_M_]</option>
            <option value="doom_v2">doom_v2 by HUNTER[SML]</option>
            <option value="doom_v2_plus">doom_v2_plus by HUNTER[SML]</option>
            <option value="doom_v2_plus_rmk">doom_v2_plus_rmk by HUNTER - edit by fanta[SML] </option>
            <option value="bl_v2">bl_v2 by Sneakydevilll[SML]</option>
            <option value="osffi_v1">osffi_v1 by GRANDface[SML] </option>
            <option value="mko_v1">mko_v1 by miko[SML]</option>
            <option value="doomsday_v1">doomsday_v1 by HUNTER[SML]</option>
            <option value="machine_solo">machine_solo by Machine [S]</option>
            <option value="osffi_v1_ms">osffi_v1_ms by GRANDface [SML] </option>
            <option value="pro6">pro6 plus by Nam[SML]</option>
            <option value="pro6">pro6 by Nam [SML]</option>
            <option value="rd_sam">rd_sam by Extonix, Slayer and BardzBeast [SML] </option>
            <option value="challenge_v1">challenge_v1 by KitanoV Pro[SML]</option>
            {/* <option value="nvm_v1">nvm_v1 by Tamari </option> TODO: decompile chokepoints cd and rebuild - using these presets*/}
            {/* <option value="nvm_v2">nvm_v2 by Tamari </option> */}
            {/* <option value="nvm_v3">nvm_v3 by Tamari </option> */}
            {/* <option value="nvm_v4">nvm_v4 by Tamari </option> */}
            {/* <option value="bl_v2_alpha">bl_v2_alpha by Psychogoddess </option> */}
            {/* <option value="asp_v1">asp_v1 by あさぴっぴ1020 </option> */}
            {/* <option value="asp_v2">asp_v2 by あさぴっぴ1020 </option> */}
            {/* <option value="bl_light">bl_light by あさぴっぴ1020 </option> */}
            {/* <option value="apm_v1">apm_v1 by EtherealDoom </option> */}
            {/* <option value="apm_v2">apm_v2 by EtherealDoom </option> */}
            {/* <option value="nt_v2">nt_v2 by EtherealDoom </option> */}
            {/* <option value="nt_v2">nt_v2 by EtherealDoom </option> */}
            {/* <option value="asp_fp_v1">asp_fp_v1 by あさぴっぴ1020 </option> */}
            {/* <option value="asp_fp_v2">asp_fp_v2 by あさぴっぴ1020 </option> */}
            {/* <option value="dtf_pm">dtf_pm by あさぴっぴ1020 </option> */}
          </select>
          <b>Current: {SpawnCycle}</b>
          <i>Default: {DefaultSettings["SpawnCycle"]}</i>
        </div>
        <div>
          <label htmlFor="input_ZedsType">Set ZedsType</label>
          <select
            onChange={(e) => setZedsType(e.target.value)}>
            <option>vanilla</option>
            <option>harder</option>
            <option>nightcore</option>
          </select>
          <b>Current: {ZedsType}</b>
          <i>Default: {DefaultSettings["ZedsType"]}</i>
        </div>
      </form>
      <div>
        {/* TODO: 
          check default CD settings first
          set defaults as states
        */}
        <h3>List of CD Chokepoints console settings: </h3>

      </div>
      {/*
       TODO: allow set difficulty
       TODO: export components for different settings - bools, nums, and strings
         */}
      <div>
        <button onClick={() => handleOnCreateConsoleCommand()}>OUTPUT TO CONSOLE</button>
        <div style={{ backgroundColor: "black", fontFamily: "consolas", fontSize: "16pt", wordWrap: "break-word" }}>
          <p>
            open {mapName}?Game=Controlled_Difficulty.CD_Survival?=3{ConsoleCommandOutput}
            {/* open {mapName}?Game=Controlled_Difficulty.CD_Survival?=3WaveSizeFakes={WaveSizeFakes} */}
          </p>
        </div>
        {/* REFERENCE: 
          
          open KF-Corridor?Game=Controlled_Difficulty.CD_Survival?=3?GameLength=2?TraderTime=5?FakesMode=ignore_humans?SpawnCycle=ts_mig_v3?WaveSizeFakes=6?MaxMonsters=8?albinocrawlers=false?albinohusks=false?albinostalkers=false?WeaponTimeout=MAX?QuarterpoundHpfakes=6?FlesHpoundHpfakes=6?ScrakeHpfakes=6?TrashHpFakes=6 disablerobots=true?disableeventZEDs=true */}
      </div>
    </>
  )
}

export default App
