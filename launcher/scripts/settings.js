const fs = require("fs");
const path = require("path");
const { config } = require("process");

const defaultSettings = {
    nickname: "Nick_Name",
    server: "phoenix",
    memory: 2048,
    wideScreen: false,
    potato: false,
    autoLogin: true,
    deprecatedResolution: false,
    hdr: false,
    enableGrass: false,
    windowMode: true,
    plusGraphics: false,
    seasons: true,
    authCEF: false,
    userId: "",
    referrer: "utm_source=S"
};

const configPath = path.join(__dirname, "config.json");

function loadConfig() {
    if (!fs.existsSync(configPath)) {
        return defaultSettings;
    }
    const data = fs.readFileSync(configPath, "utf8");
    return JSON.parse(data);
}

function saveConfig(config) {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf8");
}

module.exports = {
    loadConfig,
    saveConfig
};