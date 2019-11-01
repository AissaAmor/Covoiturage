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
    var connectedUser = JSON.parse(localStorage.getItem("User"));
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
        id: ran
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
    var html = ``;
    for (i = 0; i < mytable.length; i++) {
        html += `<tr>
                        <td id="bt1"><label id="titre2">Trajet N°${i+1}</label><br>
                            <label id="attribut">Lieu de depart :${mytable[i].departTrajet}</label><br>
                            <label id="attribut">Destination :${mytable[i].arriveTrajet}</label><br>
                            <label id="attribut">Date de trajet :${mytable[i].dateTrajet}<br> Prix par passager :${mytable[i].prix}</label><br>
                            <label id="attribut">Nombre de places : ${mytable[i].place}<br> Climatisation : ${mytable[i].climatisation}</label><br>
                            <label id="attribut">Tabac : ${mytable[i].fumees}<br> Musique : ${mytable[i].musique}</label>
                        </td>
                        <td id="btt2">
                            <input type="button" value="Modifier" id="btt1" onclick="afficheAnnonce(${i})">
                            <input type="button" value="Delete"id="btt1" onclick='deleteAnnonce(${mytable[i].id})'>
                            </td>
                            </tr>`
            // console.log(mytable[i].id);
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
function afficheAnnonce(pos) {
    var html=``
    html += `<input type="button" value="Valider" onclick="editAnnonce(${pos})">`
    console.log(pos);
    document.getElementById('part1').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
    var mytable = JSON.parse(localStorage.getItem('table'));
    document.getElementById('cout').value = mytable[pos].prix;
    document.getElementById('nombrePlaces').value = mytable[pos].place;
    document.getElementById('dateDep').value = mytable[pos].dateTrajet;
    document.getElementById('btt').innerHTML=html;
}
function editAnnonce(pos){
    var mytable = JSON.parse(localStorage.getItem('table'));
    console.log(pos);
    var todo = {
        prix: document.getElementById('cout').value,
        placee: document.getElementById('nombrePlaces').value,
        dateT:document.getElementById('dateDep').value
        // climatisation: document.querySelector('input[name="clima"]:checked').value,
        // fumees: document.querySelector('input[name="tabac"]:checked').value,
        // musique: document.querySelector('input[name="musique"]:checked').value,
        // commentaire: document.getElementById('comm').value,
    }
    
    mytable.splice(pos,1,todo);
    localStorage.setItem('table', JSON.stringify(mytable));
    console.log(mytable);
    // this.editAnnonce();
}