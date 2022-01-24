//////////////////////////////////////////////////
///////////////////// BALISES ////////////////////
//////////////////////////////////////////////////
const bSkillCol1 = document.querySelector("#skillsCol1");
const bSkillCol2 = document.querySelector("#skillsCol2");
const bSkillCol3 = document.querySelector("#skillsCol3");
const rowCertification = document.querySelector("#certifications");
const rowRealisation = document.querySelector("#realisations");
const btnProfile = document.querySelector('#btn-profile');
const btnWhoIAm = document.querySelector('#who-i-am');
const btnExperience = document.querySelector('#my-experience');
const btnCertification = document.querySelector('#my-certification');
const btnBuild = document.querySelector('#my-build');
const btnHobbies = document.querySelector('#my-hobbies');
/**
 *
 * @type {{stateProv: string, city: string, countryCode: string, ipAddress: string, countryName: string, continentName: string, continentCode: string}}
 */
let identifier = {}
const baseURL1 = 'http://127.0.0.1:8455/';
identifier = checkIdentifier();

const languages = [
    {
        label: "HTML - CSS - SASS",
        value: "80%"
    },
    {
        label: "BootStrap - Materials",
        value: "70%"
    },
    {
        label: "SQL, MySQL, MongoDB",
        value: "80%"
    },
    {
        label: "JAVA - SPRING - Hibernate",
        value: "85%"
    },
    {
        label: "NodeJS, Mongoose, Express",
        value: "80%"
    },
    {
        label: "JavaScript, TypeScript",
        value: "85%"
    },
    {
        label: "Electron JS",
        value: "85%"
    },
    {
        label: "Angular",
        value: "85%"
    },
    {
        label: "PHP - Symfony",
        value: "60%"
    },
    {
        label: "C#",
        value: "20%"
    }
];

const environnements = [
    {
        label: "Windows 7",
        value: "90%"
    },
    {
        label: "Windows 10",
        value: "90%"
    },
    {
        label: "Ubuntu",
        value: "50%"
    },
    {
        label: "Debian 10",
        value: "65%"
    }
];

const networks = [
    {
        label: "LAN",
        value: "90%"
    },
    {
        label: "WAN",
        value: "90%"
    },
    {
        label: "MPLS",
        value: "50%"
    }
];

const telecoms = [
    {
        label: "Téléphonie IP",
        value: "70%"
    },
    {
        label: "ADSL, VDSL, XDSL",
        value: "90%"
    },
    {
        label: "FTTLA",
        value: "80%"
    },
    {
        label: "FTTH - FTTO",
        value: "80%"
    },
    {
        label: "4G",
        value: "80%"
    }
];

const versionning = [
    {
        label: "GIT, GitHub",
        value: "80%"
    },
    {
        label: "Déploiement avec Docker",
        value: "80%"
    }
];

const certifications = [
    {
        url_pdf: "./assets/img/certificats/algo.pdf",
        url_img: "./assets/img/certificats/certif_algo.PNG",
        category: "Certification",
        title: "Algorithme"
    },
    {
        url_pdf: "./assets/img/certificats/git.pdf",
        url_img: "./assets/img/certificats/certif_git.PNG",
        category: "Certification",
        title: "Git"
    },
    {
        url_pdf: "./assets/img/certificats/html-css.pdf",
        url_img: "./assets/img/certificats/html-css.PNG",
        category: "Certification",
        title: "HTML / CSS"
    },
    {
        url_pdf: "./assets/img/certificats/scrum.pdf",
        url_img: "./assets/img/certificats/scrum.PNG",
        category: "Certification",
        title: "SCRUM"
    },

];

const realisations = [
    {
        url_link: "http://picom-client.ddns.net",
        title: "Angular",
        ssTitle: "Picom Client",
        url_img: "./assets/img/build/PicomClient.png",
        alt_img: "picom client"
    },
    {
        url_link: "#",
        title: "Electron JS",
        ssTitle: "Picom Admin",
        url_img: "./assets/img/build/PicomAdmin.png",
        alt_img: "picom admin"
    },
    {
        url_link: "img/build/Exercices/Exercice_4/index.html",
        title: "HTML / CSS",
        ssTitle: "TP colivert",
        url_img: "./assets/img/build/colisvert.PNG",
        alt_img: "colivert"
    },
    {
        url_link: "img/build/Exercices/Exercice_5/index.html",
        title: "HTML / CSS",
        ssTitle: "TP Caviar",
        url_img: "./assets/img/build/caviar.PNG",
        alt_img: "Caviar"
    },
    {
        url_link: "img/build/Exercices/Examen/index.html",
        title: "HTML / CSS",
        ssTitle: "Examen Fromage",
        url_img: "./assets/img/build/fromage.PNG",
        alt_img: "Fromage"
    },
    {
        url_link: "#",
        title: "Electron / JS",
        ssTitle: "Examen Electron",
        url_img: "./assets/img/build/Exam-Electron.PNG",
        alt_img: "Exame Electron"
    }
];

addTitle("Langages", null, bSkillCol1);
languages.forEach(element => {
    addBar(element.label, element.value, bSkillCol1);
});

addTitle("Environnements", null, bSkillCol2);
environnements.forEach(element => {
    addBar(element.label, element.value, bSkillCol2);
});

addTitle("Network", "pt-3", bSkillCol2);
networks.forEach(element => {
    addBar(element.label, element.value, bSkillCol2);
});

addTitle("Telecoms", null, bSkillCol3);
telecoms.forEach(element => {
    addBar(element.label, element.value, bSkillCol3);
});

addTitle("Divers", "pt-3", bSkillCol3);
versionning.forEach(element => {
    addBar(element.label, element.value, bSkillCol3);
});

certifications.forEach(element => {
    const div_col = document.createElement('div');
    div_col.classList.add("col-lg-4", "col-sm-6", "mb-4");
    rowCertification.append(div_col);

    const divItem = document.createElement('div');
    divItem.classList.add("certification-item");
    div_col.append(divItem);

    const aLinkPDF = document.createElement('a');
    aLinkPDF.classList.add("certification-link");
    aLinkPDF.setAttribute("data-toggle", "modal");
    aLinkPDF.setAttribute("href", element.url_pdf);
    aLinkPDF.setAttribute("target", "_blank");
    divItem.append(aLinkPDF);

    const divPortfolioHover = document.createElement('div');
    divPortfolioHover.classList.add("certification-hover");
    aLinkPDF.append(divPortfolioHover);

    const divPortfolioHoverContent = document.createElement('div');
    divPortfolioHoverContent.classList.add("certification-hover-content");
    divPortfolioHover.append(divPortfolioHoverContent);

    const divIcon = document.createElement('i');
    divIcon.classList.add("fas", "fa-plus", "fa-3x");
    divPortfolioHoverContent.append(divIcon);

    const imgCertif = document.createElement('img');
    imgCertif.classList.add("img-fluid");
    imgCertif.setAttribute("src", element.url_img);
    imgCertif.setAttribute("alt", "certif");
    aLinkPDF.append(imgCertif);

    const divPortfolioCaption = document.createElement('div');
    divPortfolioCaption.classList.add("certification-caption");

    const divPortfolioCaptionHealing = document.createElement('div');
    divPortfolioCaptionHealing.classList.add("certification-caption-heading");
    divPortfolioCaptionHealing.innerText = element.category;

    const divPortfolioCaptionSub = document.createElement('div');
    divPortfolioCaptionSub.classList.add("certification-caption-subheading", "text-muted");
    divPortfolioCaptionSub.innerText = element.title;

    divPortfolioCaption.append(divPortfolioCaptionHealing, divPortfolioCaptionSub);
    divItem.append(divPortfolioCaption);

});

realisations.forEach(element => {
    const divCol3 = document.createElement('div');
    divCol3.classList.add("col-lg-3", "mx-2");

    const bLink = document.createElement('a');
    bLink.classList.add("build-item");
    bLink.setAttribute("href", element.url_link);
    bLink.setAttribute("target", "_blank");

    const divFondHover = document.createElement('div');
    divFondHover.classList.add("fond-hover");

    const divCaptionContent = document.createElement('div');
    divCaptionContent.classList.add("caption-content");

    const divH2 = document.createElement('div');
    divH2.classList.add("h2");
    divH2.innerText = element.title;

    const bmb = document.createElement('p');
    bmb.classList.add("mb-0");
    bmb.innerText = element.ssTitle;

    const img = document.createElement('img');
    img.classList.add("img-fluid");
    img.setAttribute("src", element.url_img);
    img.setAttribute("alt", element.title);

    rowRealisation.append(divCol3);
    divCol3.append(bLink);
    bLink.append(divFondHover, img);
    divFondHover.append(divCaptionContent);
    divCaptionContent.append(divH2, bmb);
});


//////////////////////////////////////////////////
//////////////////// FUNCTIONS ///////////////////
//////////////////////////////////////////////////
function addBar(label, value, col) {
    const bLabel = document.createElement('label');
    bLabel.innerText = label;
    const divProgress = document.createElement('div');
    divProgress.classList.add("progress");
    const divBar = document.createElement('div');
    divBar.classList.add("progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-dark");
    divBar.setAttribute("role", "progressbar");
    divBar.setAttribute("aria-valuenow", "25");
    divBar.setAttribute("aria-valuemin", "0");
    divBar.setAttribute("aria-valuemax", "100");
    divBar.style.width = value;
    divProgress.append(divBar);
    col.append(bLabel, divProgress);
}

function addTitle(title, param, col) {
    const bTitle = document.createElement('h3');
    if (param) {
        bTitle.classList.add("title", param);
    } else {
        bTitle.classList.add("title");
    }
    bTitle.innerText = title;
    col.append(bTitle);
}

function profileActive(active) {
    if (active) {
        btnProfile.classList.add("active");
    } else {
        btnProfile.classList.remove("active")
    }
}

function whoIamActive(active) {
    if (active) {
        btnWhoIAm.classList.add("active");
    } else {
        btnWhoIAm.classList.remove("active")
    }
}

function myExperienceActive(active) {
    if (active) {
        btnExperience.classList.add("active");
    } else {
        btnExperience.classList.remove("active");
    }
}

function myCertificationActive(active) {
    if (active) {
        btnCertification.classList.add("active");
    } else {
        btnCertification.classList.remove("active");
    }
}

function myBuildActive(active) {
    if (active) {
        btnBuild.classList.add("active");
    } else {
        btnBuild.classList.remove("active");
    }
}

function myHobbiesActive(active) {
    if (active) {
        btnHobbies.classList.add("active");
    } else {
        btnHobbies.classList.remove("active");
    }
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
    const url = baseURL1 + 'public/api/manager/CV';
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
