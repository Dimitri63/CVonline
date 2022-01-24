//////////////////////////////////////////////////////
//////////////////////// Balises /////////////////////
//////////////////////////////////////////////////////
const bTableDataDictionary = document.querySelector('#data-dictionary');
//////////////////////////////////////////////////////
//////////////////// Data Dictionary /////////////////
//////////////////////////////////////////////////////
const dataDictionary = [
    {
        name: "client",
        color: "#04FF1F",
        color1: "#A0FFA6",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant du client",
                type: "Integer",
                size: "11",
                comments: ["Numéro unique séquentiel", "NOT NULL"]
            },
            {
                name: "name",
                description: "Nom du client",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL"]
            },
            {
                name: "surname",
                description: "Prénom du client",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL"]
            },
            {
                name: "email",
                description: "Email du client",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL", "unique en base de données", "sera utilisé comme identifiant"]
            },
            {
                name: "phone",
                description: "Téléphone du client",
                type: "Alpha Numérique",
                size: "20 max",
                comments: ["NOT NULL"]
            },
            {
                name: "password",
                description: "Mot de passe du client",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL", "8 caractères minimum", "sera crypté en BDD"]
            },
            {
                name: "active",
                description: "Indique si le compte est activé ou non",
                type: "Booleen",
                size: "",
                comments: ["NOT NULL", "Default : true"]
            },
            {
                name: "roles",
                description: "Les rôles du client",
                type: "Array",
                size: "",
                comments: ["NOT NULL", "Default : 'USER'", "rôle unique"]
            }
        ]
    },
    {
        name: "admin",
        color: "#FFEC03",
        color1: "#FDFFA3",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant de l'admin",
                type: "Integer",
                size: "11",
                comments: ["Numéro unique séquentiel", "NOT NULL"]
            },
            {
                name: "name",
                description: "Nom de l'admin",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL"]
            },
            {
                name: "surname",
                description: "Prénom de l'admin",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL"]
            },
            {
                name: "email",
                description: "Email de l'admin",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL", "unique", "sera utilisé comme identifiant"]
            },
            {
                name: "password",
                description: "Mot de passe de l'admin",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL", "8 caractères minimum", "sera crypté en BDD"]
            },
            {
                name: "active",
                description: "Indique si le compte est activé ou non",
                type: "Booleen",
                size: "",
                comments: ["NOT NULL", "Default : true"]
            },
            {
                name: "roles",
                description: "Les rôles de l'admin",
                type: "Array",
                size: "",
                comments: ["NOT NULL", "Default : 'ADMIN'", "rôle unique"]
            }
        ]
    },
    {
        name: "role",
        color: "#FF5300",
        color1: "#FFBA7D",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant du role",
                type: "Integer",
                size: "11",
                comments: ["Numéro unique séquentiel", "NOT NULL"]
            },
            {
                name: "role",
                description: "Nom du rôle",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL"]
            }
        ]
    },
    {
        name: "annonce",
        color: "#FF0019",
        color1: "#FF7F82",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant de l'annonce",
                type: "Integer",
                size: "11",
                comments: ["Numéro unique séquentiel", "NOT NULL"]
            },
            {
                name: "name",
                description: "Nom de l'annonce",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL", "3 caractères minimum"]
            },
            {
                name: "createdAt",
                description: "Date de création de l'annonce",
                type: "Date",
                size: "",
                comments: ["Automatique"]
            },
            {
                name: "text",
                description: "Texte de l'annonce",
                type: "Alpha Numérique",
                size: "1000 max",
                comments: ["vide si l'annonce contient une image"]
            },
            {
                name: "image",
                description: "Image de l'annonce",
                type: "File",
                size: "25 mo",
                comments: ["vide si l’annonce contient du texte"]
            },
        ]
    },
    {
        name: "zone",
        color: "#FF029D",
        color1: "#FFAAE0",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant de la zone",
                type: "Integer",
                size: "11",
                comments: ["Numéro unique séquentiel", "NOT NULL"]
            },
            {
                name: "name",
                description: "Nom de la zone",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL"]
            },
            {
                name: "createdAt",
                description: "Date de création de la zone",
                type: "Date",
                size: "",
                comments: ["Automatique"]
            },
            {
                name: "price",
                description: "Prix de base de la zone",
                type: "Integer",
                size: "11",
                comments: ["NOT NULL", "Tarif de base en centime €", "Exemple : hypercentre 2500 cent€"]
            }
        ]
    },
    {
        name: "stop",
        color: "#0204FF",
        color1: "#ADABFF",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant de l'arrêt",
                type: "Integer",
                size: "11",
                comments: ["Numéro unique séquentiel", "NOT NULL"]
            },
            {
                name: "name",
                description: "Nom de l'arrêt",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL"]
            },
            {
                name: "ipAddress",
                description: "Addresse IP de l'arrêt",
                type: "Alpha Numérique",
                size: "16 max",
                comments: ["NOT NULL", "Utiliser une regex"]
            },
            {
                name: "createdAt",
                description: "Date de création de l'arrêt",
                type: "Date",
                size: "",
                comments: ["Automatique"]
            },
        ]
    },
    {
        name: "timeSlot",
        color: "#00FFF9",
        color1: "#99FFFF",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant de la tranche horaire",
                type: "Integer",
                size: "11",
                comments: ["Numéro unique séquentiel", "NOT NULL"]
            },
            {
                name: "time",
                description: "Nom de la tranche horaire",
                type: "Alpha Numérique",
                size: "100 max",
                comments: ["NOT NULL", "Exemple : '10h00 - 11h00'"]
            },
            {
                name: "attendanceRate",
                description: "Taux de fréquentation à cette heure",
                type: "Integer",
                size: "11",
                comments: ["NOT NULL", "Ne peut-être négatif"]
            }
        ]
    },
    {
        name: "broadcast",
        color: "#07FF9C",
        color1: "#8AFFB7",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant de la diffusion",
                type: "Integer",
                size: "11",
                comments: ["Numéro unique séquentiel", "NOT NULL"]
            },
            {
                name: "dateStart",
                description: "Date de début de diffusion",
                type: "Date",
                size: "",
                comments: ["NOT NULL"]
            },
            {
                name: "duration",
                description: "Durée de la diffusion",
                type: "Integer",
                size: "11",
                comments: ["NOT NULL", "Ne peut-être négatif"]
            }
        ]
    },
    {
        name: "invoice",
        color: "#83FF00",
        color1: "#CAFF77",
        textColor: "#000",
        fields: [
            {
                name: "id",
                description: "Identifiant de la facture",
                type: "String",
                size: "11",
                comments: ["Numéro généré", "NOT NULL", "Exemple : '2365-2365-2658-1254'"]
            },
            {
                name: "createdAt",
                description: "Date de création de la facture",
                type: "Date",
                size: "",
                comments: ["Automatique"]
            },
            {
                name: "price",
                description: "Prix de la facture",
                type: "Integer",
                size: "11",
                comments: ["Automatique"]
            }
        ]
    },
]

dataDictionary.forEach(data => {
    const trH = document.createElement('tr');
    trH.style.backgroundColor = data.color;
    trH.style.color = data.textColor;
    const th = document.createElement('th');
    th.setAttribute('colspan', '5');
    th.style.textAlign = 'center';
    th.style.fontSize = '20px';
    th.innerText = data.name;
    trH.append(th);
    bTableDataDictionary.append(trH);
    data.fields.forEach(field => {
        const tr = document.createElement('tr');
        tr.style.backgroundColor = data.color1;
        tr.style.color = data.textColor;
        tr.classList.add('text-left');
        const tdName = document.createElement('td');
        tdName.innerText = field.name;
        const tdDescription = document.createElement('td');
        tdDescription.innerText = field.description;
        const tdType = document.createElement('td');
        tdType.innerText = field.type;
        const tdSize = document.createElement('td');
        tdSize.innerText = field.size;
        const tdComment = document.createElement('td');
        const ul = document.createElement('ul');
        field.comments.forEach((comment, i) => {
            const li = document.createElement('li');
            li.innerText = comment;
            ul.append(li);
        });
        tdComment.append(ul);
        tr.append(tdName, tdDescription, tdType, tdSize, tdComment);
        bTableDataDictionary.append(tr);
    });
});
