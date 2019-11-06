function myUser() {
    var user1 = document.getElementById("userName").value;

    
        if (user1 == ' ') {
            document.getElementById("messages0").innerHTML = "user name invalid";
            console.log('non valid');
            return false;

        }
        document.getElementById("messages0").innerHTML = "";
         return true;
    
    }
    // if (user1.indexOf(' ') >= 0) {

    //     console.log('non valid');

    //     return false
    // }

    // console.log('valid');

    // return true;


function mynom() {

    var nom1 = document.getElementById("nom").value;

    if (nom1 == '') {
        document.getElementById("messages01").innerHTML = "remplir ce champ";
        
        console.log('non valid');
         return false; 
    }
    document.getElementById("messages01").innerHTML = "";
     return true;

}
function myprenom() {

    var pre = document.getElementById("prenom").value;

    if (pre == '') {
        document.getElementById("messages02").innerHTML = "remplir ce champ";  
        console.log('non valid');
        return false;
    }
    document.getElementById("messages02").innerHTML = "";
     return true;
}
function myemail() {
    var str1 = document.getElementById("mail").value;


    if (str1.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/)) {

        document.getElementById("messages03").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("messages03").innerHTML = "mail invalid";
        return false;
    }
}
function mynum() {
    console.log('fdfdf');

    var num1 = document.getElementById("num").value;
    console.log(num1.length);

    if (num1.length < 8) {
        document.getElementById("messages04").innerHTML = "remplir au moins 8 chiffres";
        return false;

    }
    if (num1.length == 8) {
        document.getElementById("messages04").innerHTML = "";
        return true;

    }
}
function myadresse() {

    var add = document.getElementById("adresse").value;

    if (add == '') {
        document.getElementById("messages05").innerHTML = "remplir ce champ";  
        console.log('non valid');
        return false;
    }
    document.getElementById("messages05").innerHTML = "";
     return true;
}
function clickh() { 
var sdf= document.querySelector('input[name="genre"]:checked').value ;  
// document.getElementById("messages06").value=sdf ;
}

// function clickh() { 
//     var genre = document.forms[0];
//   var txt = "";
//   var i;
//   for (i = 0; i < genre.length; i++) {
//     if (genre[i].checked) {
//       txt = txt + genre[i].value + " ";
//     }
//   }
//   console.log(txt);
//   document.getElementById("messages06").innerHTML =txt;
// } 
// function clickh() {
//     var x = document.getElementById("myRadio").value;
//     var y = document.getElementById("myRa").value;
//      var genre = document.forms[0];
//      console.log(genre);
//      for (var i = 0; i < genre.length; i++) {
//          if (genre[0].checked) {
//             console.log("function clickh  for if");      
//     document.getElementById("messages06").innerHTML = x;  
//   }
//   else if (genre[1].checked) {
//     document.getElementById("messages06").innerHTML = y;
//   }
//   }
//   }



function myPass() {
    var a = document.getElementById("pass").value;

    if (a == "" && a.length < 8) {

        document.getElementById("messages07").innerHTML = "ce champ est vide";
        return false;
    }
    else if (a.match(/[a-z]/) || (a.match(/[A-Z]/))) {
        document.getElementById("messages07").innerHTML = "mail faible";

    }
    else if (a.match(/[a-zA-Z]/)) {
        document.getElementById("messages07").innerHTML = "mail moyen";


    }
    else if (a.match(/[a-zA-Z]/) && a.match(/[0-9]/)) {
        document.getElementById("messages07").innerHTML = "mail fort";
    }

}
function myConfirm() {

    var b = document.getElementById("confirmMot").value;
    if (document.getElementById('pass').value == b) {
        document.getElementById("messages08").innerHTML = "password confirmed";
        console.log('mot de passe confirm');
        return true;
    }
    document.getElementById("messages08").innerHTML = "password not confirmed";
    console.log('mot de passe nn confirm');
    return false;

}

function myBoutton() { 
    var User = localStorage.getItem('User')
    User = JSON.parse(User)
    if (User == null) {
        User = []
    }


    console.log(User);
    var etatUser='';
    var utilisateur = {

        id : Math.floor((Math.random() * 1000) + 1),
        userName: document.getElementById("userName").value,
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("mail").value,
        dateDeNaissance: document.getElementById("naiss").value,
        num: document.getElementById("num").value,
        adresse:document.getElementById("adresse").value,
        password: document.getElementById("pass").value,
        sexe: document.querySelector('input[name="genre"]:checked').value, 
        Etat: etatUser,
        image: "./images/imgdefault.jpg"
        // confirmPassword: document.getElementById("confirmMot").value,

    };
    User.push(utilisateur)
    var val = JSON.stringify(User);
    localStorage.setItem("User", val);
    console.log(localStorage.getItem("User"));
    console.log(JSON.parse(localStorage.getItem("User")));
    location.href = 'index.html';
}
function check() {
    var User = JSON.parse(localStorage.getItem("User"));
    

    var userName = document.getElementById('login');
    var userPw = document.getElementById('mdpass');
    // var verif = false;
    for (i = 0; i < User.length; i++) {
        if (userName.value == User[i].userName.match("hach") && userPw.value == User[i].password) {
            localStorage.setItem("loggedUser", JSON.stringify(User[i]))
            location.href = 'dashboard admin/index.html';
            // verif = true; 
            // if(User[i].Etat.match("Inactive")) {
           //   location.href="#";
            //} 
        
        }
        else if(User[i].Etat.match("Inactive")) {
            location.href="#";
            document.getElementById("bloq").innerHTML="votre compte a été désactivé";
             } 
        else if (userName.value == User[i].userName && userPw.value == User[i].password) {
                 
            localStorage.setItem("loggedUser", JSON.stringify(User[i]))
            location.href = 'userConnected.html';
            // verif = true;  
            //  console.log(logged);               
    }
    } 
    
}
function logout() { 
    localStorage.removeItem('loggedUser');
    location.href = 'index.html';
} 

function connected() { 
    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    
    if(loggedUser == null) { 
        console.log(loggedUser) ;
        
        location.href = 'index.html';
    }
    else {location.href = 'userConnected.html'; } 
}
function aboutConnected() { 
    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    
    if(loggedUser == null) { 
        console.log(loggedUser) ;
        
        location.href = 'about.html';
    }
    else {location.href = 'aboutConnected.html'; } 
}

function session() {  
    var logged = JSON.parse(localStorage.getItem('loggedUser'));  
    document.getElementById('loggedU').innerHTML=logged.userName ; 
}