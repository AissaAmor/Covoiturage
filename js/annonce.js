// Ajout/supprimer/modifier Annonce //

function checkradio1() {
    var x = document.querySelector('input[name="clim"]:checked').value;
    console.log(x);
}
function checkradio2() {
    var y = document.querySelector('input[name="fume"]:checked').value;
    console.log(y);

}
function checkradio3() {
    var z = document.querySelector('input[name="music"]:checked').value;
    console.log(z);

}
function addTrajet() {
    var mytable = JSON.parse(localStorage.getItem('table'));
    var connectedUser = JSON.parse(localStorage.getItem("loggedUser"));
    var dep = document.getElementById('depart1').value;
    var dest = document.getElementById('arrive').value;
    var date = document.getElementById('dateDepart').value;
    var frais = document.getElementById('prix').value;
    var places = document.getElementById('place').value;
    var comm = document.getElementById('com').value;
    var ran = Math.floor((Math.random() * 1000) + 1);
    var todo = {
        departTrajet: dep,
        arriveTrajet: dest,
        dateTrajet: date,
        prix: frais,
        place: places,
        climatisation: document.querySelector('input[name="clim"]:checked').value,
        fumees: document.querySelector('input[name="fume"]:checked').value,
        musique: document.querySelector('input[name="music"]:checked').value,
        commentaire: comm,
        id: ran,
        iduser: connectedUser.id
    }
    if (mytable == null) {
        mytable = []
    }
    mytable.push(todo);
    localStorage.setItem('table', JSON.stringify(mytable));
}

function afficheAnnonceProfil() {
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part1').style.display = 'block';
    var mytable = JSON.parse(localStorage.getItem('table'));
    var connectedUser = JSON.parse(localStorage.getItem("loggedUser"));
    var reserver = JSON.parse(localStorage.getItem('Reservation'));
    var html = ``;
    for (let i = 0; i < reserver.length; i++) {
        console.log(reserver[i].idUser)
        console.log(connectedUser.id)
        if (reserver[i].idUser == connectedUser.id) {
            for (let j = 0; j < mytable.length; i++) {
                if (reserver[j].id == mytable[j].id) {
                    html += `<tr>       
                                <td id="bt1"><label id="titre2">Trajet N°${i + 1}</label><br>
                                     <label id="attribut">Lieu de depart :${mytable[i].departTrajet}</label><br>
                                     <label id="attribut">Destination :${mytable[i].arriveTrajet}</label><br>
                                     <label id="attribut">Date de trajet :${mytable[i].dateTrajet}<br> Prix par passager :${mytable[i].prix}</label><br>
                                     <label id="attribut">Nombre de places : ${mytable[i].place}<br> Climatisation : ${mytable[i].climatisation}</label><br>
                                     <label id="attribut">Tabac : ${mytable[i].fumees}<br> Musique : ${mytable[i].musique}</label>
                                </td>
                                <td>
                                    <input type="button" value="Modifier" id="btt1" onclick="importAnnonce(${i})">
                                    <input type="button" value="Delete"id="btt1" onclick='deleteAnnonce(${mytable[i].id})'>
                                 </td>
                            </tr>`
                    // console.log(mytable[i].id);
                }
            }
        }
    }
    document.getElementById('table1').innerHTML = html;
}
function deleteAnnonce(idAnnonce) {
    var mytable = JSON.parse(localStorage.getItem('table'));
    for (let i = 0; i < mytable.length; i++) {
        if (idAnnonce == mytable[i].id) {
            mytable.splice(i, 1);
        }

    }
    localStorage.setItem('table', JSON.stringify(mytable));
    console.log(mytable);
    this.afficheAnnonceProfil();
}
document.getElementById('part2').style.display = 'none';
function importAnnonce(pos) {
    var html = ``
    html += `<input type="button" value="Valider" onclick="editAnnonce(${pos})">`
    console.log(pos);
    document.getElementById('part1').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
    var mytable = JSON.parse(localStorage.getItem('table'));
    document.getElementById('destination').innerHTML = 'De  ' + mytable[pos].departTrajet + 'Vers ' + mytable[pos].arriveTrajet;
    document.getElementById('cout').value = mytable[pos].prix;
    document.getElementById('nombrePlaces').value = mytable[pos].place;
    document.getElementById('dateDep').value = mytable[pos].dateTrajet;
    document.getElementById('btt').innerHTML = html;
}
function editAnnonce(pos) {
    var mytable = JSON.parse(localStorage.getItem('table'));
    console.log(pos);
    var tabUser = {

        prix: document.getElementById('cout').value,
        placee: document.getElementById('nombrePlaces').value,
        dateT: document.getElementById('dateDep').value
        // climatisation: document.querySelector('input[name="clima"]:checked').value,
        // fumees: document.querySelector('input[name="tabac"]:checked').value,
        // musique: document.querySelector('input[name="musique"]:checked').value,
        // commentaire: document.getElementById('comm').value,
    }

    mytable.splice(pos, 1, tabUser);
    localStorage.setItem('table', JSON.stringify(mytable));

    this.editAnnonce();
}

// recherche/Reservez Annonce//


function rechercheAnnonce() {
    var mytable = JSON.parse(localStorage.getItem('table'));
    var lieuD = document.getElementById('listVille').value;
    var Arrive = document.getElementById('listVille1').value;
    var html = ``
    for (let i = 0; i < mytable.length; i++) {
        if ((lieuD == mytable[i].departTrajet) && (Arrive == mytable[i].arriveTrajet)) {

            html += `<tr>
                            <td id="colTrajet">
                                <label id="attribut">Lieu de depart :${mytable[i].departTrajet}</label><br>
                                <label id="attribut">Destination :${mytable[i].arriveTrajet}</label><br>
                                <label id="attribut">Date de trajet :${mytable[i].dateTrajet}<br> 
                                <label id="attribut">Prix par passager :${mytable[i].prix}</label><br>
                                <label id="attribut">Nombre de places : ${mytable[i].place}<br> 
                                <label id="attribut">Climatisation : ${mytable[i].climatisation}</label><br>
                                <label id="attribut">Tabac : ${mytable[i].fumees}<br> 
                                <label id="attribut">Musique : ${mytable[i].musique}</label>
                            </td>
                            <td id="colTrajet">
                                <input type="button" value="Reserver" class="btn-custom" onclick="reservation(${i})">
                                <input type="number" placeholder="Places reservez?" id="reservationNumber" onblur="validNbrePLaces()"><br>
                                <span id="messageErreur" style="color: red;"> </span><br>   
                            </td>
                         </tr>`
        } else if ((Arrive == mytable[i].arriveTrajet) || (lieuD == mytable[i].departTrajet)) {
            html += `<tr>
                            <td id="colTrajet">
                                <label id="attribut">Lieu de depart :${mytable[i].departTrajet}</label><br>
                                <label id="attribut">Destination :${mytable[i].arriveTrajet}</label><br>
                                <label id="attribut">Date de trajet :${mytable[i].dateTrajet}<br> 
                                <label id="attribut">Prix par passager :${mytable[i].prix}</label><br>
                                <label id="attribut">Nombre de places : ${mytable[i].place}<br> 
                                <label id="attribut">Climatisation : ${mytable[i].climatisation}</label><br>
                                <label id="attribut">Tabac : ${mytable[i].fumees}<br> 
                                <label id="attribut">Musique : ${mytable[i].musique}</label>
                            </td>
                            <td id="colTrajet">
                                <input type="number" placeholder="Places reservez?" id="reservationNumber" onblur="validNbrePLaces()"><br>
                                <span id="messageErreur"> </span><br>
                                <input type="button" value="Reserver" class="btn-custom" onclick="reservation(${i})">
                                <span id="reservationComplet"></span>
                            </td>
                         </tr>`
        }

        document.getElementById('rechAnnonce').innerHTML = html;
    }
}
function validNbrePLaces() {
    var resAnnonce = document.getElementById('reservationNumber').value;
    if (resAnnonce < 0) {
        document.getElementById("messageErreur").innerHTML = "un nombre positive SVP !";
        return false;
    }
    document.getElementById("messageErreur").innerHTML = "";
    return true;
}
// document.getElementById('nbreReserver').style.display="none";
// function afficheNbrePlace(){
//     document.getElementById('nbreReserver').style.display="block";
//     var html = ``;
//     html += ` <input type="number" placeholder="Nombre des places" id="reservation" onblur="validNbrePLaces()"><br>
//               <span id="messageErreur" style="color: red;"> </span><br>
//               <input type="button" value="Valider" onclick="reservation(${i})" id="bttreserver">`
//     document.getElementById('nbreReserver').innerHTML = html;
// }
function reservation(pos) {
    var mytable = JSON.parse(localStorage.getItem('table'));
    // var resAnnonce = document.getElementById('reservation').value;
    var reserver = JSON.parse(localStorage.getItem('Reservation'));
    var connectedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (reserver == null) {
        reserver = []
        for (let i = 0; i < mytable.length; i++) {
            mytable[pos].place -- ;
            tabReserve = {
                idReserve: Math.floor((Math.random() * 1000) + 1),
                id: mytable[pos].id,
                idUser: connectedUser.id
            }
            reserver.push(tabReserve);
        localStorage.setItem('Reservation', JSON.stringify(reserver));
        localStorage.setItem('table', JSON.stringify(mytable));
        document.getElementById("reservationComplet").innerHTML = "";
        }
    }
}   
    console.log(connectedUser.id);
    // if (resAnnonce <= mytable[pos].place) {
    // var test = false;
    // for (let i = 0; i < reserver.length; i++) {
    //     if (reserver[i].idUser == connectedUser.id) {
    //         test = true;
    //         position = i;
    //         break;
    //     }
    //     // var res = reserver[i].idReserve;
    //     //     mytable[pos].place -= resAnnonce;
    //     //     tabReserve = {
    //     //         idReserve: res,
    //     //         id: mytable[pos].id,
    //     //         idUser: connectedUser.id
    //     //     }
    //     //     reserver.splice(i, 1, tabReserve);
    //     //     localStorage.setItem('Reservation', JSON.stringify(reserver));
    //     //     localStorage.setItem('table', JSON.stringify(mytable));
    //     // }
    // }
    // console.log(position);
    // if ((test == true) && (resAnnonce <= mytable[pos].place)) {
    //     var res = reserver[position].idReserve;
    //     console.log(res)
    //     // var nbreReserver = 0;
    //     // nbreReserver += resAnnonce;
    //     mytable[pos].place -= resAnnonce;
    //     tabReserve = {
    //         idReserve: res,
    //         id: mytable[pos].id,
    //         idUser: connectedUser.id
    //         // nbrePlaces:nbreReserver
    //     }
    //     reserver.splice(position, 1, tabReserve);
    //     localStorage.setItem('Reservation', JSON.stringify(reserver));
    //     localStorage.setItem('table', JSON.stringify(mytable));
    //     document.getElementById("reservationComplet").innerHTML = "";
    // } else if ((test = true) || (resAnnonce <= mytable[pos].place)) {
    //     mytable[pos].place -= resAnnonce;
    //     // var nbreReserver = 0;
    //     // nbreReserver += resAnnonce;
    //     console.log(mytable[pos].place);
    //     tabReserve = {
    //         idReserve: Math.floor((Math.random() * 1000) + 1),
    //         id: mytable[pos].id,
    //         idUser: connectedUser.id,
    //         // nbrePlaces = nbreReserver
    //     }
    //     reserver.push(tabReserve);
    //     localStorage.setItem('Reservation', JSON.stringify(reserver));
    //     localStorage.setItem('table', JSON.stringify(mytable));
    //     document.getElementById("reservationComplet").innerHTML = "";
    // }
    // else {
    // document.getElementById("reservationComplet").innerHTML = "Annonce Complet";
    // }

    this.reservation();

}


// }else{
//         location.href="index.html";
//     }



//  ajouter/supprimer/modifier Voiture //


document.getElementById('infoProfil').style.display = 'none';
function infoPerso() {
    document.getElementById('infoProfil').style.display = 'block';
    document.getElementById('buttonProfil').style.display = 'none';
}

document.getElementById('infoVoiture').style.display = 'none';
function infoVoiture() {
    document.getElementById('infoVoiture').style.display = 'block';
    document.getElementById('infoProfil').style.display = 'none';
    document.getElementById('buttonProfil').style.display = 'none';
}

document.getElementById('voitureBtt').style.display = 'block';
document.getElementById('ajoutVoiture').style.display = 'none';
document.getElementById('tableVoiture').style.display = 'none';

function ajoutVoiture() {

    document.getElementById('ajoutVoiture').style.display = 'block';
    document.getElementById('tableVoiture').style.display = 'none';
    document.getElementById('voitureBtt').style.display = 'none';
    var tabVoiture = JSON.parse(localStorage.getItem('voiture'));
    var marque = document.getElementById('voi').value;
    var modele = document.getElementById('mar').value;
    var datePermis = document.getElementById('da').value;
    var ran = Math.floor((Math.random() * 1000) + 1);

    var voitureObjet = {
        marqueVoiture: marque,
        modeleVoiture: modele,
        dateDePermis: datePermis,
        id: ran,
    }
    if (tabVoiture == null) {
        tabVoiture = []
    }
    tabVoiture.push(voitureObjet);
    localStorage.setItem('Voiture', JSON.stringify(tabVoiture));
}


document.getElementById('voitureBtt').style.display = 'block';
document.getElementById('ajoutVoiture').style.display = 'none';
document.getElementById('tableVoiture').style.display = 'none';

function afficheVoiture() {

    document.getElementById('voitureBtt').style.display = 'none';
    document.getElementById('ajoutVoiture').style.display = 'none';
    document.getElementById('tableVoiture').style.display = 'block';
    var tabVoiture = JSON.parse(localStorage.getItem('Voiture'));
    // var connectedUser = JSON.parse(localStorage.getItem("loggedUser"));
    var html = ``;
    console.log(tabVoiture);
    for (i = 0; i < tabVoiture.length; i++) {
        html += `<tr>
                        <td>   
                            <label id="attribut">Marque :${tabVoiture[i].marqueVoiture}</label><br>
                            <label id="attribut">Modele:${tabVoiture[i].modeleVoiture}</label><br>
                            <label id="attribut">Date trajet :${tabVoiture[i].datePermis}</label><br>
                        </td>
                        <td>
                            <input type="button" value="ajout Voiture" id="btt1" onclick="ajoutVoiture()">
                            <input type="button" value="Delete" id="btt1" onclick='deleteVoiture(${tabVoiture[i].id})'>
                            <input type="button" id="btt1" value="Modifier" onclick="editVoiture()">
                        </td>
                    </tr>`
        // console.log(mytable[i].id);
    }
    document.getElementById('tableVoiture').innerHTML = html;

}