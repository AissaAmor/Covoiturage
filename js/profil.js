// function readURL(input) {
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var loggedin = JSON.parse(localStorage.getItem('loggedUser'))

        reader.onload = function (e) {
            $('#blah')
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
            $('#blahh')
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

    document.getElementById('uname').value = loggedin.userName;
    document.getElementById('nom').value = loggedin.nom;
    document.getElementById('pre').value = loggedin.prenom;
    document.getElementById('num').value = loggedin.num;
    document.getElementById('email').value = loggedin.email;
    document.getElementById('date').value = loggedin.dateDeNaissance;
    document.getElementById('blah').src = './images/' + loggedin.image;
    document.getElementById('taswirtii').src = './images/' + loggedin.image;
    // document.getElementById('blahh')..setAttribute("class", )=loggedin.yourimage;
    // document.getElementById("H1")[0].setAttribute("class", "democlass");
    // document.getElementById('hom').value=loggedin[i].sex;
}
function modifp() {
    var loggedin = JSON.parse(localStorage.getItem('loggedUser'))
    var user = JSON.parse(localStorage.getItem('User')) || []
    var tabUser = {
        username: document.getElementById('uname').value,
        nom: document.getElementById('nom').value,
        prenm: document.getElementById('pre').value,
        nume: document.getElementById('num').value,
        email: document.getElementById('email').value,
        dat: document.getElementById('date').value,
        id: user.id,
        image: document.getElementById('blah').value
    }
    console.log(tabUser.id);
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == loggedin.id) {
            user.splice(i, 1, tabUser);
            console.log(i);
            localStorage.setItem('User', JSON.stringify(user));
            console.log(user);
        }
    }
    document.getElementById("taswirtii").src = ('blah');

}
function image() {
    var image = new Image();


    image.onload = function () {
        document.getElementById("blah").src = "profil.jpg";
    }



}