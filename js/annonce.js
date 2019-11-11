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
        iduser: connectedUser.id,
        nomUser:connectedUser.userName
    }
    if (mytable == null) {
        mytable = []
    }
    mytable.push(todo);
    localStorage.setItem('table', JSON.stringify(mytable));
}
function nbrePlaces() {
    var nbreplace = document.getElementById("place").value;
    if (nbreplace < 5) {
        document.getElementById("messagePlace").innerHTML = "";
        return true;
    } else {
        document.getElementById("messagePlace").innerHTML = "maximum 4 places";
        return false;

    }

}
function valideVoiture() {
    var choixVoiture = document.getElementById("allVoiture").value;
    console.log(choixVoiture)
    if (choixVoiture = 'allVoiture') {
        document.getElementById("messageVoiture").innerHTML = "";
        return true;
    } else {
        document.getElementById("messageVoiture").innerHTML = "Choisir une voiture";
        return false;
    }

}
function validDepart() {
    var validDep = document.getElementById("depart1").value;
    // console.log(validDep)
    if (validDep != 'depart') {
        document.getElementById("messageDepart").innerHTML = ' ';
        return true;
    } else {
        document.getElementById("messageDepart").innerHTML = 'Choisir un depart';
        return false;
    }

}
function validArrive() {
    var validArr = document.getElementById("arrive").value;
    // console.log(validArr)
    if (validArr != 'Arrive') {
        document.getElementById("messageArrive").innerHTML = ' ';
        return true;
    } else {
        document.getElementById("messageArrive").innerHTML = 'Choisir une destination';
        return false;
    }

}

// document.getElementById('part2').style.display = 'none';
function afficheAnnonceProfil() {
    // document.getElementById('part1').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
    var mytable = JSON.parse(localStorage.getItem('table'));
    // var reserver = JSON.parse(localStorage.getItem('Reservation'));
    var connectedUser = JSON.parse(localStorage.getItem('loggedUser'));
    var html = `<div class="row">`;
    for (let i = 0; i < mytable.length; i++) {
        if (mytable[i].iduser == connectedUser.id) {
            html += `
                         <div class="col-md-3" >
                            <div class="car-wrap">
                                <div class="img d-flex align-items-end" style="width: 100%;background-image: url(images/imgdefault.jpg);">
                                    <div class="price-wrap d-flex">
                                         <span class="rate" id="prixTrajet">${mytable[i].prix}</span>
                                         <p class="from-day">
                                           <span></span>
                                           <span>Prix</span>
                                         </p>
                                    </div>
                                </div>
                                <div class="text p-4 text-center"style="width: 100%;">
                                    <h6 class="mb-0"><a>lieux de départ</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${mytable[i].departTrajet} </span> </h6>
                                    <h6 class="mb-0"><a >lieux d'arrivée </a>:<span  style="color:rgb(255, 0, 0)" id="lda"> ${mytable[i].arriveTrajet}</span> </h6>
                                    <h6 class="mb-0"><a >date de trajet</a>:<span  style="color:rgb(255, 0, 0)" id="ddt"> ${mytable[i].dateTrajet} </span> </h6>
                                    <h6 class="mb-0"><a >nombre de place</a>:<span  style="color:rgb(255, 0, 0)" id="ndp"> ${mytable[i].place} </span> </h6>
                                    <p class="d-flex mb-0 d-block"><button id="btttt" class="btn btn-black btn-outline-black mr-1"style="width:350px;">Annuler</button>                          
                                </div>
                            </div>
                        </div>
                    `
        }
    }
    html  += `</div>`;
    document.getElementById('part2').innerHTML = html;
}
// function annuleAnnonce(pos) {
//             document.getElementById('btttt').onclick = function(){
//                 swal({
//                     title: "Are you sure?",
//                     text: "You will not be able to recover this imaginary file!",
//                     type: "warning",
//                     showCancelButton: true,
//                     confirmButtonColor: '#DD6B55',
//                     confirmButtonText: 'Yes, delete it!',
//                     closeOnConfirm: false,
//                     //closeOnCancel: false
//                 },
//                 function(){
//                     swal("Deleted!", "Your imaginary file has been deleted!", "success");
//                 });
//             };

//             mytable.splice(pos, 1);
//             localStorage.setItem('table', JSON.stringify(mytable));
//             var mytable = JSON.parse(localStorage.getItem('table'));
//         }
//         afficheAnnonceProfil();
//     }


    function afficheReservation() {
        document.getElementById('part2').style.display = 'block';
        // document.getElementById('part1').style.display = 'none';
        var mytable = JSON.parse(localStorage.getItem('table'));
        var reserver = JSON.parse(localStorage.getItem('Reservation'));
        var connectedUser = JSON.parse(localStorage.getItem('loggedUser'));
        var html = ``;
        for (let i = 0; i < reserver.length; i++) {
            if (reserver[i].idUser == connectedUser.id) {
                for (let j = 0; j < mytable.length; j++) {
                    if (reserver[i].id == mytable[j].id) {
                        reserver[i]['nbrPlace'] = mytable[j].place
                        reserver[i]['prix'] = mytable[j].prix
                        reserver[i]['departTrajet'] = mytable[j].departTrajet
                        reserver[i]['dateTrajet'] = mytable[j].dateTrajet
                        reserver[i]['arriveTrajet'] = mytable[j].arriveTrajet
                    }

                }
                html += `
        <div class="col-md-3" >
        <div class="car-wrap">
        <div class="img d-flex align-items-end" style="width: 100%;background-image: url(images/imgdefault.jpg);">
        <div class="price-wrap d-flex">
        <span class="rate" id="prixTrajet">${ reserver[i]['prix']}</span>
        <p class="from-day">
                                <span></span>
                                <span>Prix</span>
                                </p>
                        </div>
                    </div>
                    <div class="text p-4 text-center"style="width: 100%;">
                        <h6 class="mb-0"><a>lieux de départ</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${ reserver[i]['departTrajet']} </span> </h6>
                        
                        <h6 class="mb-0"><a >lieux d'arrivée </a>:<span  style="color:rgb(255, 0, 0)" id="lda"> ${ reserver[i]['arriveTrajet']}</span> </h6>
                        <h6 class="mb-0"><a >date de trajet</a>:<span  style="color:rgb(255, 0, 0)" id="ddt"> ${reserver[i]['dateTrajet']} </span> </h6>
                        <p class="d-flex mb-0 d-block"><a onclick="annuleReservation(${i})" class="btn btn-black btn-outline-black mr-1"style="width:350px;">Annuler</a>                          
                        </div>
                        </div>
                        </div>`
            }
        }
        document.getElementById('part2').innerHTML = html;
    }
    function reservation(pos) {
        var mytable = JSON.parse(localStorage.getItem('table'));
        // var resAnnonce = document.getElementById('reservation').value;
        var reserver = JSON.parse(localStorage.getItem('Reservation'));
        var connectedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if (reserver == null) {
            reserver = []
        }
        if (mytable[pos].place != 0) {
            mytable[pos].place -= 1;
            // console.log(mytable[pos].place);
            tabReserve = {
                idReserve: Math.floor((Math.random() * 1000) + 1),
                id: mytable[pos].id,
                idUser: connectedUser.id
            }
            console.log(tabReserve)
            reserver.push(tabReserve);
            localStorage.setItem('Reservation', JSON.stringify(reserver));
            localStorage.setItem('table', JSON.stringify(mytable));
            document.getElementById('messageTest').innerHTML = '';
            this.rechercheAnnonceUser();
        }
        //  else{document.getElementById('messageTest').innerHTML='Reservation impossible! pas des palces...'}
    }
    function annuleReservation(pos) {
        var mytable = JSON.parse(localStorage.getItem('table'));
        var reserver = JSON.parse(localStorage.getItem('Reservation'));
        // var connectedUser = JSON.parse(localStorage.getItem('loggedUser'));
        // console.log(pos);
        // console.log(reserver[0].id);
        console.log(pos);
        for (let i = 0; i < mytable.length; i++) {
            console.log(reserver[pos].id,mytable[i].id);
            if (reserver[pos].id == mytable[i].id) {
                console.log('azeaz');
                reserver.splice(pos, 1);
                mytable[i].place++;
                console.log(mytable[i].place)
                localStorage.setItem('Reservation', JSON.stringify(reserver));
                localStorage.setItem('table', JSON.stringify(mytable));
            }
        }
        afficheReservation();
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
    // document.getElementById('part2').style.display = 'none';
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
            dateT: document.getElementById('dateDep').value,
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


    // function rechercheAnnonce() {
    //     var mytable = JSON.parse(localStorage.getItem('table'));
    //     var lieuD = document.getElementById('listVille').value;
    //     var Arrive = document.getElementById('listVille1').value;
    //     var html = ``
    //     for (let i = 0; i < mytable.length; i++) {
    //         if ((lieuD == mytable[i].departTrajet) && (Arrive == mytable[i].arriveTrajet)) {

    //             html += `<tr>
    //                             <td id="colTrajet">
    //                                 <label class="mb-0">Lieu de depart :<span  style="color:rgb(255, 0, 0)"> ${mytable[i].departTrajet} </span></label><br>
    //                                 <label class="mb-0">Destination :${mytable[i].arriveTrajet}</label><br>
    //                                 <label class="mb-0">Date de trajet :${mytable[i].dateTrajet}<br> 
    //                                 <label class="mb-0">Prix par passager :${mytable[i].prix}</label><br>
    //                                 <label class="mb-0">Nombre de places : ${mytable[i].place}<br> 
    //                                 <label class="mb-0">Climatisation : ${mytable[i].climatisation}</label><br>
    //                                 <label class="mb-0">Tabac : ${mytable[i].fumees}<br> 
    //                                 <label class="mb-0">Musique : ${mytable[i].musique}</label>
    //                             </td>
    //                             <td id="colTrajet">
    //                                 <input type="button" value="Reserver" id="bttAnnonce" onclick="reservation(${i})">
    //                             </td>
    //                          </tr>`
    //         } else if ((Arrive == mytable[i].arriveTrajet) || (lieuD == mytable[i].departTrajet)) {
    //             html += `<tr>
    //                             <td id="colTrajet">
    //                                 <label class="mb-0">Lieu de depart :${mytable[i].departTrajet}</label><br>
    //                                 <label class="mb-0">Destination :${mytable[i].arriveTrajet}</label><br>
    //                                 <label class="mb-0">Date de trajet :${mytable[i].dateTrajet}<br> 
    //                                 <label class="mb-0">Prix par passager :${mytable[i].prix}</label><br>
    //                                 <label class="mb-0">Nombre de places : ${mytable[i].place}<br> 
    //                                 <label class="mb-0">Climatisation : ${mytable[i].climatisation}</label><br>
    //                                 <label class="mb-0">Tabac : ${mytable[i].fumees}<br> 
    //                                 <label class="mb-0">Musique : ${mytable[i].musique}</label>
    //                             </td>
    //                             <td id="colTrajet">
    //                                 <input type="button" value="Reserver" id="bttAnnonce" onclick="reservation(${i})">
    //                             </td>
    //                          </tr>`
    //         }

    //         document.getElementById('rechAnnonce').innerHTML = html;
    //     }
    // }
    // new affiche // 
    function rechercheAnnonceUser() {
        // document.getElementById('part2').style.display="none";
        var mytable = JSON.parse(localStorage.getItem('table'));
        var lieuD = document.getElementById('listVille').value;
        var Arrive = document.getElementById('listVille1').value;
        let html = `<div class="row">`;
        if (lieuD == 'All' && Arrive == 'All') {
            console.log('All');
            for (let i = 0; i < mytable.length; i++) {  
                    // console.log(lieuD);
                    // console.log(mytable[i].departTrajet);
                    // console.log(Arrive);
                    // console.log(mytable[i].arriveTrajet);
                console.log(i);
                
                html += `
                                <div class="col-md-3">
                                  <div class="car-wrap">
                                    <div class="img d-flex align-items-end" style="width: 100%;background-image: url(images/imgdefault.jpg);">
                                    <div class="price-wrap d-flex">
                                    <span class="rate" id="prixTrajet">${mytable[i].prix}</span>
                                            <p class="from-day">
                                            <span></span>
                                                <span>Prix</span>
                                            </p>
                                            </div>
                                    </div>
                                       <div class="text p-4 text-center" style="width: 100%;">
                                           <h6 class="mb-0"><a>Annonceur</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${mytable[i].nomUser} </span> </h6>                    
                                           <h6 class="mb-0"><a>lieux de départ</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${mytable[i].departTrajet} </span> </h6>                    
                                           <h6 class="mb-0"><a >lieux d'arrivée </a>:<span  style="color:rgb(255, 0, 0)" id="lda"> ${mytable[i].arriveTrajet}</span> </h6>
                                           <h6 class="mb-0"><a >date de trajet</a>:<span  style="color:rgb(255, 0, 0)" id="ddt"> ${mytable[i].dateTrajet} </span> </h6>
                                           <h6 class="mb-0"><a >nombre de place</a>:<span  style="color:rgb(255, 0, 0)" id="ndp"> ${mytable[i].place} </span> </h6>
                                           <h6 id="messageTest" style ="color:red;"></h6>                
                                           <p class="d-flex mb-0 d-block"><a onclick="reservation(${i})" class="btn btn-black btn-outline-black mr-1"style="width:300px;">Réserver</a>
                                       </div>            
                                    </div>
                            </div>`

            }
            // console.log(html);
            html  += `</div>`;
            document.getElementById('rechAnnnUser').innerHTML = html;
        } else {
            console.log('One')
            for (let i = 0; i < mytable.length; i++) {
                // console.log(lieuD);
                // console.log(mytable[i].departTrajet);
                // console.log(Arrive);
                // console.log(mytable[i].arriveTrajet);
                if ((lieuD == mytable[i].departTrajet) && (Arrive == mytable[i].arriveTrajet)) {

                    html += `
                                <div class="col-md-3" >
                                <div class="car-wrap">
                                    <div class="img d-flex align-items-end" style="width: 100%;background-image: url(images/imgdefault.jpg);">
                                        <div class="price-wrap d-flex">
                                            <p class="from-day">
                                                <span></span>
                                                <span>Prix</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="text p-4 text-center"style="width: 100%;">
                                        <h6 class="mb-0"><a>lieux de départ</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${mytable[i].departTrajet} </span> </h6>
                    
                                        <h6 class="mb-0"><a >lieux d'arrivée </a>:<span  style="color:rgb(255, 0, 0)" id="lda"> ${mytable[i].arriveTrajet}</span> </h6>
                                           <h6 class="mb-0"><a >date de trajet</a>:<span  style="color:rgb(255, 0, 0)" id="ddt"> ${mytable[i].dateTrajet} </span> </h6>
                                           <h6 class="mb-0"><a >nombre de place</a>:<span  style="color:rgb(255, 0, 0)" id="ndp"> ${mytable[i].place} </span> </h6>
                                           <h6 id="messageTest" style ="color:red;"></h6>
                    
                    
                                           <p class="d-flex mb-0 d-block"><a onclick="reservation(${i})" class="btn btn-black btn-outline-black mr-1"style="width:300px;">Réserver</a>
                
                                           </div>
                                           
                                           </div>
                                           </div>
                                            `
                }

                else if ((lieuD == mytable[i].departTrajet)|| (Arrive == mytable[i].arriveTrajet)) {
                    html += `
                                        
                                        <div class="col-md-3">
                                            <div class="car-wrap ftco-animate">
                                                <div class="img d-flex align-items-end" style="background-image: url(images/imgdefault.jpg);">
                                                    <div class="price-wrap d-flex">
                                                        <span class="rate" id="prixTrajet">${mytable[i].prix}</span>
                                                        <p class="from-day">
                                                            <span></span>
                                                            <span>Prix</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="text p-4 text-center">
                                                    <h6 class="mb-0"><a >lieux de départ</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${mytable[i].departTrajet} </span> </h6>
                                
                                                    <h6 class="mb-0"><a >lieux d'arrivée </a>:<span  style="color:rgb(255, 0, 0)" id="lda"> ${mytable[i].arriveTrajet}</span> </h6>
                                                       <h6 class="mb-0"><a >date de trajet</a>:<span  style="color:rgb(255, 0, 0)" id="ddt"> ${mytable[i].dateTrajet} </span> </h6>
                                                       <h6 class="mb-0"><a >nombre de place</a>:<span  style="color:rgb(255, 0, 0)" id="ndp"> ${mytable[i].place} </span> </h6>
                                                       <h6 id="messageTest" style ="color:red;"></h6>                                                                    
                                                    
                                
                                                       <p class="d-flex mb-0 d-block"><a onclick="reservation(${i})" class="btn btn-black btn-outline-black mr-1"style="width:300px;">Réserver</a>                                                                              </div>
                
                                                       </div>
                                                                                                                          
                                                       </div>
                                                       </div>`
                }
            }
            // console.log(html);
            document.getElementById('rechAnnnUser').innerHTML = html;

        }
        console.log(document.getElementById('rechAnnnUser'));
        //    this.rechercheAnnonceUser()
        // document.getElementById('rechAnn').innerHTML = 'djfklsdqhflhflqjsdhfjkqsdgfklqhsdkjfhdskjfhkjlqshfjksdhfkjqsdhfkjsqdhfkjh';
        // document.getElementById('rechAnnn').innerHTML = html;
    }
    function rechercheAnnonce() {
        var mytable = JSON.parse(localStorage.getItem('table'));
        var lieuD = document.getElementById('listVille').value;
        var Arrive = document.getElementById('listVille1').value;
        let html = `<div class="row">`;
        if (lieuD == 'All' && Arrive == 'All') {
            console.log('All');
            for (let i = 0; i < mytable.length; i++) {
                // console.log(lieuD);
                // console.log(mytable[i].departTrajet);
                // console.log(Arrive);
                // console.log(mytable[i].arriveTrajet);
                // console.log(i);

                html += `<div class="col-md-3">
                        <div class="car-wrap">
                             <div class="img d-flex align-items-end" style="width: 100%;background-image: url(images/imgdefault.jpg);">
                                  <div class="price-wrap d-flex">
                                     <span class="rate" id="prixTrajet">${mytable[i].prix}</span>
                                     <p class="from-day">
                                       <span></span>
                                       <span>Prix</span>
                                     </p>
                                  </div>
                             </div>
                           <div class="text p-4 text-center" style="width: 100%;">
                             <h6 class="mb-0"><a>lieux de départ</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${mytable[i].departTrajet} </span> </h6>
                             <h6 class="mb-0"><a >lieux d'arrivée </a>:<span  style="color:rgb(255, 0, 0)" id="lda"> ${mytable[i].arriveTrajet}</span> </h6>
                             <h6 class="mb-0"><a >date de trajet</a>:<span  style="color:rgb(255, 0, 0)" id="ddt"> ${mytable[i].dateTrajet} </span> </h6>
                             <h6 class="mb-0"><a >nombre de place</a>:<span  style="color:rgb(255, 0, 0)" id="ndp"> ${mytable[i].place} </span> </h6>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1"style="width:200px;">Réserver</a>                             
                           </div>
                        </div>
                        </div>`




            }
            // console.log(html);
            document.getElementById('rechAnnn').innerHTML = html;
        } else {
            console.log('One')
            for (let i = 0; i < mytable.length; i++) {
                // console.log(lieuD);
                // console.log(mytable[i].departTrajet);
                // console.log(Arrive);
                // console.log(mytable[i].arriveTrajet);
                if ((lieuD == mytable[i].departTrajet) && (Arrive == mytable[i].arriveTrajet)) {

                    html += `
                <div class="col-md-3" >
                <div class="car-wrap">
                    <div class="img d-flex align-items-end" style="width: 100%;background-image: url(images/imgdefault.jpg);">
                        <div class="price-wrap d-flex">
                            <span class="rate" id="prixTrajet">${mytable[i].prix}</span>
                            <p class="from-day">
                                <span></span>
                                <span>Prix</span>
                            </p>
                        </div>
                    </div>
                    <div class="text p-4 text-center"style="width: 100%;">
                        <h6 class="mb-0"><a>lieux de départ</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${mytable[i].departTrajet} </span> </h6>
    
                        <h6 class="mb-0"><a >lieux d'arrivée </a>:<span  style="color:rgb(255, 0, 0)" id="lda"> ${mytable[i].arriveTrajet}</span> </h6>
                           <h6 class="mb-0"><a >date de trajet</a>:<span  style="color:rgb(255, 0, 0)" id="ddt"> ${mytable[i].dateTrajet} </span> </h6>
                           <h6 class="mb-0"><a >nombre de place</a>:<span  style="color:rgb(255, 0, 0)" id="ndp"> ${mytable[i].place} </span> </h6>
                           
    
    
                           <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1"style="width:200px;">Réserver</a>                          
                    </div>
                </div>
            </div>`
                }

                else if ((Arrive == mytable[i].arriveTrajet) || (lieuD == mytable[i].departTrajet)) {
                    html += `
                        
                        <div class="col-md-3">
                            <div class="car-wrap ftco-animate">
                                <div class="img d-flex align-items-end" style="background-image: url(images/imgdefault.jpg);">
                                    <div class="price-wrap d-flex">
                                        <span class="rate" id="prixTrajet">${mytable[i].prix}</span>
                                        <p class="from-day">
                                            <span></span>
                                            <span>Prix</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="text p-4 text-center">
                                    <h6 class="mb-0"><a >lieux de départ</a>:<span  style="color:rgb(255, 0, 0)" id="ldd">${mytable[i].departTrajet} </span> </h6>
                
                                    <h6 class="mb-0"><a >lieux d'arrivée </a>:<span  style="color:rgb(255, 0, 0)" id="lda"> ${mytable[i].arriveTrajet}</span> </h6>
                                       <h6 class="mb-0"><a >date de trajet</a>:<span  style="color:rgb(255, 0, 0)" id="ddt"> ${mytable[i].dateTrajet} </span> </h6>
                                       <h6 class="mb-0"><a >nombre de place</a>:<span  style="color:rgb(255, 0, 0)" id="ndp"> ${mytable[i].place} </span> </h6>
                                       
                
                                       
                                       <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1"style="width:200px;">Réserver</a>
                                       </div>
                                       </div>
                                       </div>
                                       `
                }
            }
            // console.log(html);
            html  += `</div>`;
            document.getElementById('rechAnnn').innerHTML = html;

        }
        // console.log(document.getElementById('rechAnnn'))
        // document.getElementById('rechAnn').innerHTML = 'djfklsdqhflhflqjsdhfjkqsdgfklqhsdkjfhdskjfhkjlqshfjksdhfkjqsdhfkjsqdhfkjh';
        // document.getElementById('rechAnnn').innerHTML = html;
    }

    // function validNbrePLaces() {
    //     var resAnnonce = document.getElementById('reservationNumber').value;
    //     if (resAnnonce < 0) {
    //         document.getElementById("messageErreur").innerHTML = "un nombre positive SVP !";
    //         return false;
    //     }
    //     document.getElementById("messageErreur").innerHTML = "";
    //     return true;
    // }
    // document.getElementById('nbreReserver').style.display="none";
    // function afficheNbrePlace(){
    //     document.getElementById('nbreReserver').style.display="block";
    //     var html = ``;
    //     html += ` <input type="number" placeholder="Nombre des places" id="reservation" onblur="validNbrePLaces()"><br>
    //               <span id="messageErreur" style="color: red;"> </span><br>
    //               <input type="button" value="Valider" onclick="reservation(${i})" id="bttreserver">`
    //     document.getElementById('nbreReserver').innerHTML = html;
    // }
    // function afficheNbrePlace() {
    //     var html = ``;
    //     html += ` <input type="number" placeholder="Nombre des places" id="reservation" onblur="validNbrePLaces()"><br>
    //               <span id="messageErreur" style="color: red;"> </span><br>
    //               <input type="button" value="Valider" onclick="reservation(${i})" id="bttreserver">`
    //     document.getElementById('nbreReserver').innerHTML = html;
    // }

    // }

    //  ajouter/supprimer/modifier Voiture //


    document.getElementById('infoProfil').style.display = 'none';
    function infoPerso() {
        document.getElementById('infoProfil').style.display = 'block';
        document.getElementById('buttonProfil').style.display = 'none';
    }

// document.getElementById('infoVoiture').style.display = 'none';
// function infoVoiture() {
//     document.getElementById('infoVoiture').style.display = 'block';
//     document.getElementById('infoProfil').style.display = 'none';
//     document.getElementById('buttonProfil').style.display = 'none';
// }

// document.getElementById('voitureBtt').style.display = 'block';
// document.getElementById('ajoutVoiture').style.display = 'none';
// document.getElementById('tableVoiture').style.display = 'none';

// function ajoutVoiture() {

//     document.getElementById('ajoutVoiture').style.display = 'block';
//     document.getElementById('tableVoiture').style.display = 'none';
//     document.getElementById('voitureBtt').style.display = 'none';
//     var tabVoiture = JSON.parse(localStorage.getItem('voiture'));
//     var marque = document.getElementById('voi').value;
//     var modele = document.getElementById('mar').value;
//     var datePermis = document.getElementById('da').value;
//     var ran = Math.floor((Math.random() * 1000) + 1);

//     var voitureObjet = {
//         marqueVoiture: marque,
//         modeleVoiture: modele,
//         dateDePermis: datePermis,
//         id: ran,
//     }
//     if (tabVoiture == null) {
//         tabVoiture = []
//     }
//     tabVoiture.push(voitureObjet);
//     localStorage.setItem('Voiture', JSON.stringify(tabVoiture));
// }


// document.getElementById('voitureBtt').style.display = 'block';
// document.getElementById('ajoutVoiture').style.display = 'none';
// document.getElementById('tableVoiture').style.display = 'none';

// function afficheVoiture() {

//     document.getElementById('voitureBtt').style.display = 'none';
//     document.getElementById('ajoutVoiture').style.display = 'none';
//     document.getElementById('tableVoiture').style.display = 'block';
//     var tabVoiture = JSON.parse(localStorage.getItem('Voiture'));
//     // var connectedUser = JSON.parse(localStorage.getItem("loggedUser"));
//     var html = ``;
//     console.log(tabVoiture);
//     for (i = 0; i < tabVoiture.length; i++) {
//         html += `<tr>
//                         <td>   
//                             <label id="attribut">Marque :${tabVoiture[i].marqueVoiture}</label><br>
//                             <label id="attribut">Modele:${tabVoiture[i].modeleVoiture}</label><br>
//                             <label id="attribut">Date trajet :${tabVoiture[i].datePermis}</label><br>
//                         </td>
//                         <td>
//                             <input type="button" value="ajout Voiture" id="btt1" onclick="ajoutVoiture()">
//                             <input type="button" value="Delete" id="btt1" onclick='deleteVoiture(${tabVoiture[i].id})'>
//                             <input type="button" id="btt1" value="Modifier" onclick="editVoiture()">
//                         </td>
//                     </tr>`
//         // console.log(mytable[i].id);
//     }
//     document.getElementById('tableVoiture').innerHTML = html;

// }
