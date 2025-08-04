const { app, BrowserWindow, ipcMain } = require('electron');
const { startGame } = require('./launcher/scripts/back/start_game');
const { loadConfig, saveConfig } = require("./launcher/scripts/settings");
const path  = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "launcher/assets/ico", "linux.png"),
    webPreferences: {
      preload: path.join(__dirname, "launcher/scripts/back/preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false
    }
  });

  win.loadFile('launcher/index.html');
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

ipcMain.handle("launch-game", async () => {
  startGame();
});

ipcMain.handle("get-config", () => {
  return loadConfig();
});

ipcMain.on("update-server", (event, serverId) => {
  const config = loadConfig();
  config.server = serverId;
  saveConfig(config);
  console.log(`Server has been changed to: ${serverId}`);
});

ipcMain.on("update-nickname", (event, newNickname) => {
  console.log(`64259785683746458763485: ${newNickname}`);
});