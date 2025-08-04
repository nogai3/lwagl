const { loadConfig } = require('../settings');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const gamePathFile = path.join(__dirname, "game_path.txt");

function generateLaunchArgs(config) {
    const args = [];

    args.push("-c");
    args.push("-h", `${config.server}.arizona-rp.com`);
    args.push("-p", "7777");
    args.push("-n", config.nickname);
    args.push("-mem", config.memory.toString());

    if (config.windowMode) args.push("-window");
    if (config.potato) args.push("-x");
    if (config.wideScreen) args.push("-widescreen");
    if (config.deprecatedResolution) args.push("-ldo");
    if (config.seasons) args.push("-seasons");
    if (config.plusGraphics) args.push("-graphics");
    if (config.hdr) args.push("-allow_hdr");
    if (config.enableGrass) args.push("-enable_grass");
    if (config.authCEF) args.push("-auth_cef_enable");

    if (config.autoLogin) {
        args.push("-arizona");
        if (config.userId) {
            args.push("-userId", config.userId);
        }
    }

    args.push("-cdn", "0,0,0");
    if (config.referrer) {
        args.push("-referrer", config.referrer);
    }

    return args;
}

function startGame() {
    const config = loadConfig();

    if (!fs.existsSync(gamePathFile)) {
        console.error("Файл game_path.txt с путём к игре не найден.");
        return;
    }

    const gameFolder = fs.readFileSync(gamePathFile, "utf8").trim();
    const exePath = path.join(gameFolder, "gta_sa.exe");

    if (!fs.existsSync(exePath)) {
        console.error("Файл gta_sa.exe не найден в указанной папке.");
        return;
    }

    const args = generateLaunchArgs(config);

    console.log("Запуск: ", exePath, ...args);

    const proc = spawn(exePath, args, {
        cwd: gameFolder,
        detached: true,
        stdio: 'ignore'
    });

    proc.unref();
}

module.exports = { startGame };