const { contextBridge, ipcRenderer } = require('electron');
const { loadConfig, saveConfig } = require("../settings");

contextBridge.exposeInMainWorld("electronAPI", {
    launchGame: () => ipcRenderer.invoke("launch-game"),
    updateServer: (serverId) => ipcRenderer.send("update-server", serverId),
    updateNickname: (newNickname) => ipcRenderer.send("update-nickname", newNickname),
    getConfig: () => ipcRenderer.invoke("get-config")
});