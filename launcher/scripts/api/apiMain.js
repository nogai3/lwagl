async function getDataFromServer(url, options) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(eror);
    }
}

async function getSobesData(apiKey, serverId) {
    const url = `https://api.depscian.tech/v2/sobes?serverId=${serverId}`;
    const options = {
        method: 'GET',
        headers: {'X-API-Key': apiKey},
        body: undefined
    };
    return await getDataFromServer(url, options);
}

async function getServerOnline(apiKey, serverId) {
    const url = `https://api.depscian.tech/v2/online?serverId=${serverId}`;
    const options = {
        method: 'GET',
        headers: {'X-API-Key': apiKey},
        body: undefined
    };
    return await getDataFromServer(url, options);
}

async function getServerAdmins(apiKey, serverId) {
    const url = `https://api.depscian.tech/v2/admins?serverId=${serverId}`;
    const options = {
        method: 'GET',
        headers: {'X-API-Key': apiKey},
        body: undefined
    };
    return await getDataFromServer(url, options);
}

async function getServerFamilies(apiKey, serverId) {
    const url = `https://api.depscian.tech/v2/families?serverId=${serverId}`;
    const options = {
        method: 'GET',
        headers: {'X-API-Key': apiKey},
        body: undefined
    };
    return await getDataFromServer(url, options);
}

async function getPlayerDataFromFind(apiKey, nickname, serverId) {
    const url = `https://api.depscian.tech/v2/player/find?nickname=${nickname}&serverId=${serverId}`;
    const options = {
        method: 'GET',
        headers: {'X-API-Key': apiKey},
        body: undefined
    };
    return await getDataFromServer(url, options);
}