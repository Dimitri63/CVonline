const baseURL = 'http://82.64.227.251:8081/';
const baseURL1 = 'http://82.64.227.251:8082/';

getAllUsers();
getAllAnnounces();
getAllBroadcast();
getButterfly();

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

async function getButterfly() {

    let data = undefined;
    const url = baseURL1 + 'public/api/manager';
    const option = {
        method: 'POST',
        body: "PROJECT",
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
