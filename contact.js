function test() {
 var username = document.getElementById("username").value;
 var nom = document.getElementById("nom").value;
 var prénom = document.getElementById("prenom").value;
 var email = document.getElementById("email").value;
 var date = document.getElementById("date").value;
 var sex = document.getElementById("sex").value; 
 var adresse = document.getElementById("adresse").value;
 var num = document.getElementById("num").value;
 var image = document.getElementById("image").value;
     
}
     function login() {
        var user = document.getElementById("username").value;
        console.log(user);
        if (user == '') {
            alert('not valid');
            return false;
        }
        for (let i = 0; i < user.length; i++) {
            if (user[i] == ' ')
                return false
        }
        return true
    }

    function nom() {
        var nom = document.getElementById("nom").value;
        console.log(nom);
        if (nom == '') {
            console.log('not valide');
    
            return false
        }
    }

    function prenom() {
        var prenom = document.getElementById("prenom").value;
        console.log(prenom);
        if (prenom == '') {
            console.log('not valide');
            return false
        }
    
    }

    function VerifMail() {
        var a = document.getElementById("email").value;
        {
            if (a = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test("email".value)) {
                return (true)
            }
            alert("You have entered an invalid email address!")
            return (false)
        }
    }

    function verifAge() {
        var td = new Date()
        var dtn = document.getElementById("date").value;
    
        console.log(document.getElementById("date").value);
        var birthday = new Date(dtn);
        console.log("birthday");
        var age = (td - birthday) / (60 * 60 * 24 * 365 * 1000);
        console.log(age);
    
        if (age >= 18) {
            console.log("age valide");
            return true;
        }
        console.log("age non valide");
        return false;
    
    }

    function Num() {
        var num = document.getElementById("num");
        var message = document.getElementById("confirmeNum");
        var vert = "#06E98E";
        var rouge = "#FE0101";
        var none = "";
        var valide = /^0[0-9]\d{8}$/;
    
        console.log(num.value.length);
    
        if (num.value.length == 8) {
            num.style.backgroundColor = vert;
    
        }
    
        else {
            num.style.backgroundColor = rouge;
    
        }
    
        if (num.value == "") {
            num.style.backgroundColor = none;
            num.style.color = none;
            num.innerHTML = "";
        }
    }
    function adresse() {
        var prenom = document.getElementById("adresse").value;
        console.log(adresse);
        if (prenom == '') {
            console.log('not valide');
            return false
        }
    
    }

    function sex() {
        document.getElementById("homme").checked = true;
        document.getElementById("homme").checked = false;
        document.getElementById("femme").checked = true;
        document.getElementById("femme").checked = false;

    
    }