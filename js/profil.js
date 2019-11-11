// function readURL(input) {
// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         var connectedUser = JSON.parse(localStorage.getItem('loggedUser'))

//         reader.onload = function (e) {
//             $('#imageProfil')
//                 .attr('src', e.target.result)
//                 .width(150)
//                 .height(200);
//             connectedUser.image = e.target.result;
//             localStorage.setItem('loggedUser', JSON.stringify(connectedUser));
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }

function img() {
    var connectedUser = JSON.parse(localStorage.getItem('loggedUser'))
    $('#imageProfil')
        .attr('src', e.target.result)

    connectedUser.image = e.target.result;
    localStorage.setItem('loggedUser', JSON.stringify(connectedUser));

}

function voi(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageProfil')
                .attr('src', e.target.result)
                .width(15);

        };

        reader.readAsDataURL(input.files[0]);
    }
}


function modif() {
    var connectedUser = JSON.parse(localStorage.getItem('loggedUser'))
    // var user = JSON.parse(localStorage.getItem('User')) || []

    document.getElementById('username').value = connectedUser.userName;
    document.getElementById('nom').value = connectedUser.nom;
    document.getElementById('prenom').value = connectedUser.prenom;
    document.getElementById('email').value = connectedUser.email;
    document.getElementById('Adress').value = connectedUser.adresse;
    document.getElementById('numTel').value = connectedUser.num;
    document.getElementById('dateNaissance').value = connectedUser.dateDeNaissance;
    document.getElementById('imageProfil').src = './images/' + connectedUser.image;
    // document.getElementById('blahh')..setAttribute("class", )=loggedin.yourimage;
    // document.getElementById("H1")[0].setAttribute("class", "democlass");
    // document.getElementById('hom').value=loggedin[i].sex;
}
function modifierProfil() {
    var connectedUser = JSON.parse(localStorage.getItem('loggedUser'))
    var user = JSON.parse(localStorage.getItem('User'))
    var fullPath = document.getElementById("imageProfil").src;
     var filename = fullPath.replace(/^.*[\\\/]/, '');
    if (user == null) {
        user = []
    }
    // console.log(user.id)
    // console.log(tabUser.id);
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == connectedUser.id) {
            var tabUser = {
                Etat: user[i].Etat,
                adresse: document.getElementById('Adress').value,
                dateDeNaissance: document.getElementById('dateNaissance').value,
                email: document.getElementById('email').value,
                id: user[i].id,
                image: filename,
                nom: document.getElementById('nom').value,
                num: document.getElementById('numTel').value,
                password: user[i].password,
                prenom: document.getElementById('prenom').value,
                sexe: user[i].sexe,
                userName: document.getElementById('username').value
            }
            user.splice(i, 1, tabUser);
            // console.log(i);
            localStorage.setItem('User', JSON.stringify(user));
            localStorage.setItem('loggedUser', JSON.stringify(user[i]));
            // console.log(user);
        }
        // document.getElementById("taswirtii").innerHTML=('imageProfil'); 
    }
    // document.getElementById("taswirtii").src = ('imageProfil');

}
function image() {
    var image = new Image();


    image.onload = function () {
        document.getElementById("imageProfil").src = "profil.jpg";
    }



}