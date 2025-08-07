const servers = [
    { id: 'phoenix', name: 'Phoenix', number: 1, online: 999 },
    { id: 'tucson', name: 'Tucson', number: 2, online: 999 },
    { id: 'scottdale', name: 'Scottdale', number: 3, online: 999 },
    { id: 'chandler', name: 'Chandler', number: 4, online: 999 },
    { id: 'brainburg', name: 'Brainburg', number: 5, online: 999 },
    { id: 'saintrose', name: 'Saint-Rose', number: 6, online: 999 },
    { id: 'mesa', name: 'Mesa', number: 7, online: 999 },
    { id: 'redrock', name: 'Red-Rock', number: 8, online: 999 },
    { id: 'yuma', name: 'Yuma', number: 9, online: 999 },
    { id: 'surprise', name: 'Surprise', number: 10, online: 999},
    { id: 'prescott', name: 'Prescott', number: 11, online: 999},
    { id: 'glendale', name: 'Glendale', number: 12, online: 999},
    { id: 'kingman', name: 'Kingman', number: 13, online: 999},
    { id: 'winslow', name: 'Winslow', number: 14, online: 999},
    { id: 'payson', name: 'Payson', number: 15, online: 999},
    { id: 'gilbert', name: 'Gilbert', number: 16, online: 999},
    { id: 'showlow', name: 'Show-Low', number: 17, online: 999},
    { id: 'casagrande', name: 'Casa-Grande', number: 18, online: 999},
    { id: 'page', name: 'Page', number: 19, online: 999},
    { id: 'suncity', name: 'Sun-City', number: 20, online: 999},
    { id: 'queencreek', name: 'Queen-Creek', number: 21, online: 999},
    { id: 'sedona', name: 'Sedona', number: 22, online: 999},
    { id: 'holiday', name: 'Holiday', number: 23, online: 999},
    { id: 'wednesday', name: 'Wednesday', number: 24, online: 999},
    { id: 'yava', name: 'Yava', number: 25, online: 999},
    { id: 'faraway', name: 'Faraway', number: 26, online: 999},
    { id: 'bumblebee', name: 'Bumble Bee', number: 27, online: 999},
    { id: 'christmas', name: 'Christmas', number: 28, online: 999},
    { id: 'mirage', name: 'Mirage', number: 29, online: 999},
    { id: 'love', name: 'Love', number: 30, online: 999},
    { id: 'drake', name: 'Drake', number: 31, online: 999}
];

const serverList = document.getElementById('serverList');
const searchInput = document.getElementById('serverSearch');
const serverName = document.getElementById('serverName');
const serverOnline = document.getElementById('serverOnline');
const serverIcon = document.getElementById('serverIcon');

function renderServers(filter = '') {
    const filtered = servers.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));

    serverList.innerHTML = serverList.firstElementChild.outerHTML;

    filtered.forEach(server => {
    const div = document.createElement('div');
    div.className = 'server-option';
    div.innerHTML = `
        <input type="radio" name="serverchoose" id="${server.id}">
        <label for="${server.id}"># ${String(server.number).padStart(2, '0')} | ${server.name}</label>
    `;
    div.querySelector('input').addEventListener('change', () => {
        serverName.innerHTML = `${server.name} <p>#${server.number}</p>`;
        serverOnline.textContent = `${server.online} / 1000`;
        serverIcon.src = `assets/icons/${server.id}.png`;
        window.electronAPI?.updateServer(server.id);
    });
    serverList.appendChild(div);
    });
}

window.electronAPI.getConfig().then(config => {
    const selectedServer = config?.server;
    fetch('https://arizona-ping.react.group/desktop/ping/Arizona/ping.json')
        .then(res => res.json())
        .then(data => {
        if (!Array.isArray(data.query)) throw new Error("Invalid API structure");

        data.query.forEach(apiServer => {
            servers.forEach(localServer => {
            const apiName = apiServer.name.toLowerCase().replace(/[\s-]/g, '');
            const localName = localServer.name.toLowerCase().replace(/[\s-]/g, '');
            if (apiName === localName) {
                localServer.online = apiServer.online;
                localServer.max = apiServer.maxplayers || 1000;
                localServer.icon = apiServer.icon;
            }
            });
        });

        renderServers();

        const radio = document.getElementById(selectedServer);
        if (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event("change"));
        }
        })
        .catch(err => console.error('Error status loading: ', err));
    });
    document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
    });  

renderServers();
document.querySelector('.tab-button[data-tab="online"]')?.click();