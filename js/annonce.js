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
    // document.getElementById('part1').style.display = 'block';
    // document.getElementById('part2').style.display = 'none';
    var mytable = JSON.parse(localStorage.getItem('table'));
    var html = ``;
    for (i = 0; i < mytable.length; i++) {
        html += `<tr>
                        <td>Lieu de depart :${mytable[i].departTrajet}<br> Destination :${mytable[i].arriveTrajet}
                            <br>Date de trajet :${mytable[i].dateTrajet}<br> Prix par passager :${mytable[i].prix}
                            <br>Nombre de places : ${mytable[i].place}<br> Climatisation : ${mytable[i].climatisation}
                            <br> Tabac : ${mytable[i].fumees}<br> Musique : ${mytable[i].musique}
                        </td>
                        <td id="btt2">
                            <a href="blog.html"><input type="button" value="Modifier" id="btt1" onclick="editAnnonce(${i},${mytable[i].id})"></a>
                            <input type="button" value="Delete"id="btt1" onclick='deleteAnnonce(${mytable[i].id})'>
                            </td>
                            </tr>`
        console.log(mytable[i].id);
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
// document.getElementById('part2').style.display = 'none';
function editAnnonce(pos, idTask) {
    // document.getElementById('part1').style.display = 'none';
    // document.getElementById('part2').style.display = 'block';
    var mytable = JSON.parse(localStorage.getItem('table'));
    document.getElementById('nombrePlaces').value = mytable[pos].place;
}