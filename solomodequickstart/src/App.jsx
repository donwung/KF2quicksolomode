import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

  const [count, setCount] = useState(0)
  const [mapName, setMapName] = useState("KF-Corridor")
  const [disableEventZEDs, setDisableEventZEDs] = useState(true)
  const [disableRobots, setDisableRobots] = useState(true)

  const [globalHpFakes, setGlobalHpFakes] = useState(6)


  // TODO: probably just wise to reduce this to a combined state
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
    // const updatedSettings = e.target.value
  }

  const handleOnCreateConsoleCommand = () => {
    let CommandString = ""
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
    // if(DefaultSettings["AlbinoCrawlers"] == AlbinoCrawlers){
    //   CommandString += "?AlbinoCrawlers=" + AlbinoCrawlers
    // }

    console.log(CommandString)
    setConsoleCommandOutput(CommandString)
  }

  return (
    <>
      kf2 output
      <form>
        <div>
          <label htmlFor="input_AlbinoAlphas">Set AlbinoAlphas</label>
          <input
            type="checkbox"
            placeholder="Default: True"
            id="input_AlbinoAlphas"
            onChange={(e) => setAlbinoAlphas(!AlbinoAlphas)}
            checked={AlbinoAlphas}
          // value={MySettings["AlbinoAlphas"]}
          >
          </input>
          <b>Current: {AlbinoAlphas ? "TRUE" : "FALSE"}</b>
          <i>Default: {DefaultSettings["AlbinoAlphas"] ? "TRUE" : "FALSE"}</i>
        </div>
        <div>
          <label htmlFor="input_AlbinoCrawlers">Set AlbinoCrawlers</label>
          <input
            type="checkbox"
            placeholder="Default: True"
            id="input_AlbinoCrawlers"
            onChange={(e) => setAlbinoCrawlers(!AlbinoCrawlers)}
            checked={AlbinoCrawlers}
          // value={MySettings["AlbinoCrawlers"]}
          >
          </input>
          <b>Current: {AlbinoCrawlers ? "TRUE" : "FALSE"}</b>
          <i>Default: {DefaultSettings["AlbinoCrawlers"] ? "TRUE" : "FALSE"}</i>
        </div>
        <div>
          <label htmlFor="input_AlbinoGorefasts">Set AlbinoGorefasts</label>
          <input
            type="checkbox"
            placeholder="Default: True"
            id="input_AlbinoGorefasts"
            onChange={(e) => setAlbinoGorefasts(!AlbinoGorefasts)}
            checked={AlbinoGorefasts}
          // value={MySettings["AlbinoGorefasts"]}
          >
          </input>
          <b>Current: {AlbinoGorefasts ? "TRUE" : "FALSE"}</b>
          <i>Default: {DefaultSettings["AlbinoGorefasts"] ? "TRUE" : "FALSE"}</i>
        </div>
        <div>
          <label htmlFor="input_CohortSize">Set CohortSize</label>
          <input
            type="number"
            placeholder="Default: True"
            id="input_CohortSize"
            onChange={(e) => setCohortSize(e.target.value)}
            value={CohortSize}
            style={{ width: "40px" }}
          >
          </input>
          <b>Current: {CohortSize}</b>
          <i>Default: {DefaultSettings["CohortSize"]}</i>
        </div>
        <div>
          <label htmlFor="input_DoshKill">Set DoshKill</label>
          <input
            type="number"
            placeholder="Default: True"
            id="input_DoshKill"
            onChange={(e) => setDoshKill(e.target.value)}
            value={DoshKill}
            style={{ width: "40px" }}
          >
          </input>
          <b>Current: {DoshKill}</b>
          <i>Default: {DefaultSettings["DoshKill"]}</i>
        </div>
        <div>
          <label htmlFor="input_FleshpoundHPFakes">Set FleshpoundHPFakes</label>
          <input
            type="number"
            placeholder="Default: True"
            id="input_FleshpoundHPFakes"
            onChange={(e) => setFleshpoundHPFakes(e.target.value)}
            value={FleshpoundHPFakes}
            style={{ width: "40px" }}
          >
          </input>
          <b>Current: {FleshpoundHPFakes}</b>
          <i>Default: {DefaultSettings["FleshpoundHPFakes"]}</i>
        </div>
        <div>
          <label htmlFor="input_HeadlessFleshpoundDmg">Set HeadlessFleshpoundDmg</label>
          <input
            type="number"
            placeholder="Default: True"
            id="input_HeadlessFleshpoundDmg"
            onChange={(e) => setHeadlessFleshpoundDmg(e.target.value)}
            value={HeadlessFleshpoundDmg}
            style={{ width: "40px" }}
          >
          </input>
          <b>Current: {HeadlessFleshpoundDmg}</b>
          <i>Default: {DefaultSettings["HeadlessFleshpoundDmg"]}</i>
        </div>
        <div>
          <label htmlFor="input_HeadlessScrakeDmg">Set HeadlessScrakeDmg</label>
          <input
            type="number"
            placeholder="Default: True"
            id="input_HeadlessScrakeDmg"
            onChange={(e) => setHeadlessScrakeDmg(e.target.value)}
            value={HeadlessScrakeDmg}
            style={{ width: "40px" }}
          >
          </input>
          <b>Current: {HeadlessScrakeDmg}</b>
          <i>Default: {DefaultSettings["HeadlessScrakeDmg"]}</i>
        </div>
        <div>
          <label htmlFor="input_MaxMonsters">Set MaxMonsters</label>
          <input
            type="number"
            placeholder="Default: True"
            id="input_MaxMonsters"
            onChange={(e) => setMaxMonsters(e.target.value)}
            value={MaxMonsters}
            style={{ width: "40px" }}
          >
          </input>
          <b>Current: {MaxMonsters}</b>
          <i>Default: {DefaultSettings["MaxMonsters"]}</i>
        </div>
        <div>
          <label htmlFor="input_QuarterPoundHPFakes">Set QuarterPoundHPFakes</label>
          <input
            type="number"
            placeholder="Default: True"
            id="input_QuarterPoundHPFakes"
            onChange={(e) => setQuarterPoundHPFakes(e.target.value)}
            value={QuarterPoundHPFakes}
            style={{ width: "40px" }}
          >
          </input>
          <b>Current: {QuarterPoundHPFakes}</b>
          <i>Default: {DefaultSettings["QuarterPoundHPFakes"]}</i>
        </div>
        <div>
          <label htmlFor="input_ScrakeHPFakes">Set ScrakeHPFakes</label>
          <input
            type="number"
            placeholder="Default: True"
            id="input_ScrakeHPFakes"
            onChange={(e) => setScrakeHPFakes(e.target.value)}
            value={ScrakeHPFakes}
            style={{ width: "40px" }}
          >
          </input>
          <b>Current: {ScrakeHPFakes}</b>
          <i>Default: {DefaultSettings["ScrakeHPFakes"]}</i>
        </div>
        <div>
          <label htmlFor="input_SpawnCycle">Set SpawnCycle</label>
          <select
            onChange={(e) => setSpawnCycle(e.target.value)}>
            <option>asl_v3</option>
            <option>bl_v2</option>
            <option>osffi_v2</option>
          </select>
          <b>Current: {SpawnCycle}</b>
          <i>Default: {DefaultSettings["SpawnCycle"]}</i>
        </div>
        <div>
          <div>
            <label htmlFor="input_TrashHPFakes">Set TrashHPFakes</label>
            <input
              type="number"
              placeholder="Default: True"
              id="input_TrashHPFakes"
              onChange={(e) => setTrashHPFakes(e.target.value)}
              value={TrashHPFakes}
              style={{ width: "40px" }}
            >
            </input>
            <b>Current: {TrashHPFakes}</b>
            <i>Default: {DefaultSettings["TrashHPFakes"]}</i>
          </div>
          <div>
            <label htmlFor="input_WaveSizeFakes">Set WaveSizeFakes</label>
            <input
              type="number"
              placeholder="Default: True"
              id="input_WaveSizeFakes"
              onChange={(e) => setWaveSizeFakes(e.target.value)}
              value={WaveSizeFakes}
              style={{ width: "40px" }}
            >
            </input>
            <b>Current: {WaveSizeFakes}</b>
            <i>Default: {DefaultSettings["WaveSizeFakes"]}</i>
          </div>
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
        {/* <div>
          <label htmlFor="input_WaveSizeFakes">Set Wave Size Fakes</label>
          <input
            type="number"
            placeholder="6"
            id="input_WaveSizeFakes"
            onChange={(e) => updateMySettings(e, setting)}
            value={MySettings["WaveSizeFakes"]}
          >
          </input>
          Default: 2
          <button>TODO:More options</button>
        </div> */}
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
