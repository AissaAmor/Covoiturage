function checkradio1(){
    var x= document.querySelector('input[name="clim"]:checked').value;
    console.log(x);
}
function checkradio2(){
    var y= document.querySelector('input[name="fume"]:checked').value;
    console.log(y);

}
function checkradio3(){
    var z=document.querySelector('input[name="music"]:checked').value;
    console.log(z);

}  
function check() {
    var mytable = JSON.parse(localStorage.getItem('table'));
    var dep = document.getElementById('depart1').value;
    var dest = document.getElementById('arrive').value;
    var date = document.getElementById('dateDepart').value;
    var frais = document.getElementById('prix').value;
    var places = document.getElementById('place').value;
    var comm = document.getElementById('com').value;
var todo = {
    departTrajet: dep,
    arriveTrajet: dest,
    dateTrajet: date,
    prix: frais,
    place: places,
    climatisation: document.querySelector('input[name="clim"]:checked').value,
    fumees: document.querySelector('input[name="fume"]:checked').value,
    musique: document.querySelector('input[name="music"]:checked').value,
    commentaire:comm
}
if (mytable == null) {
    mytable = []
}
mytable.push(todo);
localStorage.setItem('table', JSON.stringify(mytable));
}
// var x=document.querySelector('[input="clim"]:checked').value;
// var y=document.querySelector('[input="fume"]:checked').value;
// var z=document.querySelector('[input="music"]:checked').value;
