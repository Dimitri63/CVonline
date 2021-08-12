//////////////////////////////////////////////////
///////////////////// BALISES ////////////////////
//////////////////////////////////////////////////
let bSkillCol1 = document.querySelector("#skillsCol1");
let bSkillCol2 = document.querySelector("#skillsCol2");
let bSkillCol3 = document.querySelector("#skillsCol3");
let rowCertification = document.querySelector("#certifications");
let rowRealisation = document.querySelector("#realisations");

let languages = [
    {
        label: "HTML - CSS - SASS",
        value: "80%"
    },
    {
        label: "BootStrap - Materials",
        value: "70%"
    },
    {
        label: "SQL",
        value: "80%"
    },
    {
        label: "JAVA - Spring - Hibernate",
        value: "75%"
    },
    {
        label: "JS - JQuery",
        value: "80%"
    },
    {
        label: "Electron JS",
        value: "85%"
    },
    {
        label: "Angular",
        value: "80%"
    },
    {
        label: "PHP - Symfony",
        value: "10%"
    },
    {
        label: "C#",
        value: "20%"
    }
];
let environnements = [
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
let networks = [
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
let telecoms = [
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

let certifications = [
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

let realisations = [
    { 
        url_link: "#",
        title: "HTML / CSS",
        ssTitle: "BusinessCase",
        url_img: "./assets/img/build/Picom.PNG",
        alt_img: "picom"
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

certifications.forEach(element => {
    let div_col = document.createElement('div');
    div_col.classList.add("col-lg-4", "col-sm-6", "mb-4");
    rowCertification.append(div_col);

    let divItem = document.createElement('div');
    divItem.classList.add("certification-item");
    div_col.append(divItem);

    let aLinkPDF = document.createElement('a');
    aLinkPDF.classList.add("certification-link");
    aLinkPDF.setAttribute("data-toggle", "modal");
    aLinkPDF.setAttribute("href", element.url_pdf);
    aLinkPDF.setAttribute("target", "_blank");
    divItem.append(aLinkPDF);
    
    let divPortfolioHover = document.createElement('div');
    divPortfolioHover.classList.add("certification-hover");
    aLinkPDF.append(divPortfolioHover);

    let divPortfolioHoverContent = document.createElement('div');
    divPortfolioHoverContent.classList.add("certification-hover-content");
    divPortfolioHover.append(divPortfolioHoverContent);

    let divIcon = document.createElement('i');
    divIcon.classList.add("fas", "fa-plus", "fa-3x");
    divPortfolioHoverContent.append(divIcon);

    let imgCertif= document.createElement('img');
    imgCertif.classList.add("img-fluid");
    imgCertif.setAttribute("src", element.url_img);
    imgCertif.setAttribute("alt", "certif");
    aLinkPDF.append(imgCertif);

    let divPortfolioCaption = document.createElement('div');
    divPortfolioCaption.classList.add("certification-caption");

    let divPortfolioCaptionHealing = document.createElement('div');
    divPortfolioCaptionHealing.classList.add("certification-caption-heading");
    divPortfolioCaptionHealing.innerText = element.category;

    let divPortfolioCaptionSub = document.createElement('div');
    divPortfolioCaptionSub.classList.add("certification-caption-subheading", "text-muted");
    divPortfolioCaptionSub.innerText = element.title;

    divPortfolioCaption.append(divPortfolioCaptionHealing, divPortfolioCaptionSub);
    divItem.append(divPortfolioCaption);

});

realisations.forEach(element => {
    let divCol3 = document.createElement('div');
    divCol3.classList.add("col-lg-3", "mx-2");

    let bLink = document.createElement('a');
    bLink.classList.add("build-item");
    bLink.setAttribute("href", element.url_link);
    bLink.setAttribute("target", "_blank");

    let divFondHover = document.createElement('div');
    divFondHover.classList.add("fond-hover");

    let divCaptionContent = document.createElement('div');
    divCaptionContent.classList.add("caption-content");

    let divH2 = document.createElement('div');
    divH2.classList.add("h2");
    divH2.innerText = element.title;

    let bmb = document.createElement('p');
    bmb.classList.add("mb-0");
    bmb.innerText = element.ssTitle;

    let img = document.createElement('img');
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
    let bLabel = document.createElement('label');
    bLabel.innerText = label;
    let divProgress = document.createElement('div');
    divProgress.classList.add("progress");
    let divBar = document.createElement('div');
    divBar.classList.add("progress-bar", "bg-dark");
    divBar.setAttribute("role", "progressbar");
    divBar.setAttribute("aria-valuenow", "25");
    divBar.setAttribute("aria-valuemin", "0");
    divBar.setAttribute("aria-valuemax", "100");
    divBar.style.width = value;
    divProgress.append(divBar);
    col.append(bLabel, divProgress);
}
function addTitle(title, param, col) {
    let bTitle = document.createElement('h3');
    if (param) { bTitle.classList.add("title", param); }
    else { bTitle.classList.add("title");}
    bTitle.innerText = title;
    col.append(bTitle);
}
