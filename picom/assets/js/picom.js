const baseURL = 'http://82.64.227.251:8081/';
const baseURL1 = 'http://127.0.0.1:8455/';

getAllUsers();
getAllAnnounces();
getAllBroadcast();

/**
 *
 * @type {{stateProv: string, city: string, countryCode: string, ipAddress: string, countryName: string, continentName: string, continentCode: string}}
 */
let identifier = {}

identifier = checkIdentifier();

const usersCount = document.querySelector('#users-count');
const AnnouncesCount = document.querySelector('#announces-count');
const BroadcastCount = document.querySelector('#broadcast-count');


async function getAllUsers() {

    // Initialize data => users
    let data = [];

    const url = baseURL + 'public/api/users/count';
    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }};

    // Execute query
    await fetch(url, option)
        .then(res => res.json())
        .then(json =>{
            data = json.body;
        })
    usersCount.setAttribute("data-purecounter-end", data);
    return data;
}

async function getAllAnnounces() {

    // Initialize data => announces
    let data = [];

    const url = baseURL + 'public/api/announces/count';
    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }};

    // Execute query
    await fetch(url, option)
        .then(res => res.json())
        .then(json =>{
            data = json.body;
        })
    AnnouncesCount.setAttribute("data-purecounter-end", data);
    return data;
}

async function getAllBroadcast() {

    // Initialize data => broadcasts
    let data = [];

    const url = baseURL + 'public/api/broadcast/count';
    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }};

    // Execute query
    await fetch(url, option)
        .then(res => res.json())
        .then(json =>{
            data = json.body;
        })
    BroadcastCount.setAttribute("data-purecounter-end", data);
    return data;
}


async function checkIdentifier() {

    let data = undefined;
    const url = 'https://api.db-ip.com/v2/free/self';
    const option = {
        method: 'GET'};

    // Execute query
    await fetch(url, option)
        .then(res => res.json())
        .then(json =>{
            data = json;
            getButterfly(data);
        })
    return data;
}

/**
 *
 * @param identifier
 * @return {Promise<void>}
 */
async function getButterfly(data) {
    identifier = data;

    const body = JSON.stringify({
        city: identifier.city,
        continentCode: identifier.continentCode,
        continentName: identifier.continentName,
        countryCode: identifier.countryCode,
        countryName: identifier.countryName,
        ipAddress: identifier.ipAddress,
        stateProv: identifier.stateProv
    })
    const url = baseURL1 + 'public/api/manager/PROJECT';
    const option = {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }};

    // Execute query
    await fetch(url, option)
        .then(res => res.json())
        .then(json =>{
            data = json.body;
        })
}
