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
    var html = ``;
    document.getElementById('titre1').innerHTML = 'Mes Trajets';
    for (i = 0; i < mytable.length; i++) {
        if (mytable[i].iduser == connectedUser.id) {
            html += `	<table class="table">
            <thead class="thead-primary">
                <tr class="text-center">
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th class="bg-primary heading">Per Hour Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr class="">
                    <td class="car-image">
                        <div class="img" style="background-image:url(images/car-1.jpg);"></div>
                    </td>
                    <td class="product-name">
                        <h3>Cheverolet SUV Car</h3>
                    </td>
                    <td class="price">
                        <p class="btn-custom"><a href="#">Rent a car</a></p>
                        <div class="price-rate">
                            <h3>
                                <span class="num"><small class="currency">$</small> 10.99</span>
                                <span class="per">/per hour</span>
                            </h3>
                            <span class="subheading">$3/hour fuel surcharges</span>
                        </div>
                    </td>
                </tr><!-- END TR-->
                <tr class="">
                    <td class="car-image">
                        <div class="img" style="background-image:url(images/car-2.jpg);"></div>
                    </td>
                    <td class="product-name">
                        <h3>Cheverolet SUV Car</h3>
                    </td>
                    <td class="price">
                        <p class="btn-custom"><a href="#">Rent a car</a></p>
                        <div class="price-rate">
                            <h3>
                                <span class="num"><small class="currency">$</small> 10.99</span>
                                <span class="per">/per hour</span>
                            </h3>
                            <span class="subheading">$3/hour fuel surcharges</span>
                        </div>
                    </td>
                </tr><!-- END TR-->
                <tr class="">
                    <td class="car-image">
                        <div class="img" style="background-image:url(images/car-3.jpg);"></div>
                    </td>
                    <td class="product-name">
                        <h3>Cheverolet SUV Car</h3>
                    </td>
                    <td class="price">
                        <p class="btn-custom"><a href="#">Rent a car</a></p>
                        <div class="price-rate">
                            <h3>
                                <span class="num"><small class="currency">$</small> 10.99</span>
                                <span class="per">/per hour</span>
                            </h3>
                            <span class="subheading">$3/hour fuel surcharges</span>
                        </div>
                    </td>
                </tr><!-- END TR-->
                <tr class="">
                    <td class="car-image">
                        <div class="img" style="background-image:url(images/car-4.jpg);"></div>
                    </td>
                    <td class="product-name">
                        <h3>Cheverolet SUV Car</h3>
                    </td>
                    <td class="price">
                        <p class="btn-custom"><a href="#">Rent a car</a></p>
                        <div class="price-rate">
                            <h3>
                                <span class="num"><small class="currency">$</small> 10.99</span>
                                <span class="per">/per hour</span>
                            </h3>
                            <span class="subheading">$3/hour fuel surcharges</span>
                        </div>
                    </td>
                </tr><!-- END TR-->
                <tr class="">
                    <td class="car-image">
                        <div class="img" style="background-image:url(images/car-5.jpg);"></div>
                    </td>
                    <td class="product-name">
                        <h3>Cheverolet SUV Car</h3>

                    </td>

                    <td class="price">
                        <p class="btn-custom"><a href="#">Rent a car</a></p>
                        <div class="price-rate">
                            <h3>
                                <span class="num"><small class="currency">$</small> 10.99</span>
                                <span class="per">/per hour</span>
                            </h3>
                            <span class="subheading">$3/hour fuel surcharges</span>
                        </div>
                    </td>
                </tr><!-- END TR-->
                <tr class="">
                    <td class="car-image">
                        <div class="img" style="background-image:url(images/car-6.jpg);"></div>
                    </td>
                    <td class="product-name">
                        <h3>Cheverolet SUV Car</h3>

                    </td>

                    <td class="price">
                        <p class="btn-custom"><a href="#">Rent a car</a></p>
                        <div class="price-rate">
                            <h3>
                                <span class="num"><small class="currency">$</small> 10.99</span>
                                <span class="per">/per hour</span>
                            </h3>
                            <span class="subheading">$3/hour fuel surcharges</span>
                        </div>
                    </td>
                </tr><!-- END TR-->
            </tbody>
        </table>`
            // console.log(mytable[i].id);
        }
    }
    document.getElementsByID('table1').innerHTML = html;
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
    var connectedUser=JSON.parse(localStorage.getItem('loggedUser'));
    var resAnnonce = document.getElementById('reservationNumber').value;
        if (reserver == null) {
            reserver = []
        }
        console.log(mytable[pos].iduser);
        console.log(connectedUser.id);
        console.log(resAnnonce);
        if (mytable[pos].iduser == connectedUser.id) {
            if(resAnnonce < mytable[pos].place) {
                mytable[pos].place -=resAnnonce;
                console.log(mytable[pos].place);
                console.log(mytable[pos]);
                reserver.push(mytable[pos]);
                localStorage.setItem('Reservation', JSON.stringify(reserver));
            }
        }
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