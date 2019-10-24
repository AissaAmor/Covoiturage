function myUser() {
    var user1 = document.getElementById("userName").value;

    
        if (user1 == ' ') {
            document.getElementById("messages0").innerHTML = "user name invalid";
            console.log('non valid');
            return false;

        }
        else return true;
    
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
    else return true;

}
function myprenom() {

    var pre = document.getElementById("prenom").value;

    if (pre == '') {
        document.getElementById("messages02").innerHTML = "remplir ce champ";  
        console.log('non valid');
        return false;
    }
    else return true;
}
function myemail() {
    var str1 = document.getElementById("mail").value;


    if (str1.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/)) {
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