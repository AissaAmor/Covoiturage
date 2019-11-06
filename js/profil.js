// function readURL(input) {
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var loggedin = JSON.parse(localStorage.getItem('loggedUser'))

        reader.onload = function (e) {
            $('#imageProfil')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
            loggedin.image = e.target.result;
            localStorage.setItem('loggedUser', JSON.stringify(loggedin));
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function img() {
    var loggedin = JSON.parse(localStorage.getItem('loggedUser'))
    $('#blah')
    .attr('src', e.target.result)

    loggedin.image = e.target.result;
    localStorage.setItem('loggedUser', JSON.stringify(loggedin));

}

function voi(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageProfil')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


function modif() {
    var loggedin = JSON.parse(localStorage.getItem('loggedUser'))
    // var user = JSON.parse(localStorage.getItem('User')) || []

    document.getElementById('username').value = loggedin.userName;
    document.getElementById('nom').value = loggedin.nom;
    document.getElementById('prenom').value = loggedin.prenom;
    document.getElementById('email').value = loggedin.email;
    document.getElementById('Adress').value = loggedin.adresse;
    document.getElementById('numTel').value = loggedin.num;
    document.getElementById('dateNaissance').value = loggedin.dateDeNaissance;
    document.getElementById('imageProfil').src = loggedin.image;
    // document.getElementById('blahh')..setAttribute("class", )=loggedin.yourimage;
    // document.getElementById("H1")[0].setAttribute("class", "democlass");
    // document.getElementById('hom').value=loggedin[i].sex;
}
function modifierProfil() {
    var loggedin = JSON.parse(localStorage.getItem('loggedUser'))
    var user = JSON.parse(localStorage.getItem('User')) || []
    console.log(user.id)
    // console.log(tabUser.id);
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == loggedin.id) {
                var tabUser = {
                    Etat:user[i].Etat, 
                    username: document.getElementById('username').value,
                    nom: document.getElementById('nom').value,
                    prenom: document.getElementById('prenom').value,
                    email: document.getElementById('email').value,
                    adresse: document.getElementById('Adress').value,
                    num: document.getElementById('numTel').value,
                    dateDeNaissance: document.getElementById('dateNaissance').value,
                    id: user[i].id,
                    image:document.getElementById('imageProfil').value,
                    sexe:user[i].sexe
                }
            user.splice(i, 1, tabUser);
            // loggedin.splice(1,1,tabUser);
            console.log(i);
            localStorage.setItem('User', JSON.stringify(user));
            localStorage.setItem('loggedUser', JSON.stringify(loggedin));
            console.log(user);
        }
        document.getElementById("taswirtii").innerHTML=('imageProfil'); 
    }
    document.getElementById("taswirtii").src = ('imageProfil');

}
function image() {
    var image = new Image();


    image.onload = function () {
        document.getElementById("imageProfil").src = "profil.jpg";
    }



}