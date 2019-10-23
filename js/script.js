function login() {
       var user = document.getElementById("enter login").value;
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
    function test() {
        var tabUser = JSON.parse(localStorage.getItem('tabuser'))
    
        var login = document.getElementById('login').value;
        var password = document.getElementById('psw').value;
         var val = JSON.parse(localStorage.getItem("tab1"));
    for (i = 0; i < tabUser.length; i++) {
        if (user == tabUser[i].user || password == tabUser[i].motdepass) {
            console.log('utilisateur existe');
            localStorage.setItem('loggedUser',JSON.stringify(tabUser[i]))
            location.href ='contact.html'
            // window.open("contact.html");
        }
    }
}