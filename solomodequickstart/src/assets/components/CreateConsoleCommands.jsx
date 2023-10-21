// TODO: import default settings for the outputs to work


export const CreateConsoleCommandWithoutDefaults = () => {
    let CommandString = ""
    // TODO: NOTE: move values to combined state - refactor into a loop
    // if (DefaultSettings["AlbinoAlphas"] != MySettings["AlbinoAlphas"]) { 
    //   CommandString += "?AlbinoAlphas=" + AlbinoAlphas
    // }



    if (DefaultSettings["AlbinoAlphas"] != MySettings["AlbinoAlphas"]) {
        CommandString +=
            "?AlbinoAlphas=" +
            MySettings["AlbinoAlphas"]
    }
    if (DefaultSettings["AlbinoCrawlers"] != MySettings["AlbinoCrawlers"]) {
        CommandString +=
            "?AlbinoCrawlers=" +
            MySettings["AlbinoCrawlers"]
    }
    if (DefaultSettings["AlbinoGorefasts"] != MySettings["AlbinoGorefasts"]) {
        CommandString +=
            "?AlbinoGorefasts=" +
            MySettings["AlbinoGorefasts"]
    }
    if (DefaultSettings["CohortSize"] != MySettings["CohortSize"]) {
        CommandString +=
            "?CohortSize=" +
            MySettings["CohortSize"]
    }
    if (DefaultSettings["DoshKill"] != MySettings["DoshKill"]) {
        CommandString +=
            "?DoshKill=" +
            MySettings["DoshKill"]
    }
    if (DefaultSettings["FleshpoundHPFakes"] != MySettings["FleshpoundHPFakes"]) {
        CommandString +=
            "?FleshpoundHPFakes=" +
            MySettings["FleshpoundHPFakes"]
    }
    if (DefaultSettings["HeadlessFleshpoundDmg"] != MySettings["HeadlessFleshpoundDmg"]) {
        CommandString +=
            "?HeadlessFleshpoundDmg=" +
            MySettings["HeadlessFleshpoundDmg"]
    }
    if (DefaultSettings["HeadlessScrakeDmg"] != MySettings["HeadlessScrakeDmg"]) {
        CommandString +=
            "?HeadlessScrakeDmg=" +
            MySettings["HeadlessScrakeDmg"]
    }
    if (DefaultSettings["MaxMonsters"] != MySettings["MaxMonsters"]) {
        CommandString +=
            "?MaxMonsters=" +
            MySettings["MaxMonsters"]
    }
    if (DefaultSettings["QuarterPoundHPFakes"] != MySettings["QuarterPoundHPFakes"]) {
        CommandString +=
            "?QuarterPoundHPFakes=" +
            MySettings["QuarterPoundHPFakes"]
    }
    if (DefaultSettings["ScrakeHPFakes"] != MySettings["ScrakeHPFakes"]) {
        CommandString +=
            "?ScrakeHPFakes=" +
            MySettings["ScrakeHPFakes"]
    }
    CommandString += "?SpawnCycle=" + SpawnCycle
    if (DefaultSettings["TrashHPFakes"] != MySettings["TrashHPFakes"]) {
        CommandString +=
            "?TrashHPFakes=" +
            MySettings["TrashHPFakes"]
    }
    if (DefaultSettings["WaveSizeFakes"] != MySettings["WaveSizeFakes"]) {
        CommandString +=
            "?WaveSizeFakes=" +
            MySettings["WaveSizeFakes"]
    }
    CommandString += "?ZedsType=" + ZedsType

    setConsoleCommandOutput(CommandString)
}

export const CreateConsoleCommandWithDefaults = () => {
    console.log("test")
}

export default {CreateConsoleCommandWithDefaults, CreateConsoleCommandWithoutDefaults}