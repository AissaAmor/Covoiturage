!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t,n){"use strict";function o(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function i(e,t){e.classList?e.classList.add(t):o(e,t)||(e.className+=" "+t)}function r(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("\\b"+t+"\\b","g"),"")}n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r})},function(e,t){!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype)},function(e,t){function n(e,t){if(e.checked=t,!0===t)e.closest("tr").classList.add("selected");else{e.closest("tr").classList.remove("selected");var n=e.closest("table").querySelectorAll(o);Array.from(n).forEach(function(e){e.checked=!1,e.classList.remove("all-selected")})}}var o=".table-select-all",i=".table-select-row";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".sidebar-toggle");Array.from(e).forEach(function(e){e.addEventListener("click",function(e){document.querySelectorAll(".adminx-sidebar")[0].classList.toggle("in")})});var t=document.querySelectorAll(i);Array.from(t).forEach(function(e){e.addEventListener("change",function(t){n(e,e.checked),0===function(e){var t=[];return Array.from(e).forEach(function(e){e.checked||t.push(e)}),t}(e.closest("table").querySelectorAll(i)).length&&Array.from(e.closest("table").querySelectorAll(o)).forEach(function(e){e.checked=!0,e.classList.add("all-selected")})})});var r=document.querySelectorAll(o);Array.from(r).forEach(function(e){e.addEventListener("change",function(t){var o=e.closest("table").querySelectorAll(i);e.checked?(e.classList.add("all-selected"),Array.from(o).forEach(function(e){n(e,!0)})):(e.classList.remove("all-selected"),Array.from(o).forEach(function(e){n(e,!1)}))})})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".sidebar-toggle");Array.from(e).forEach(function(e){e.addEventListener("click",function(e){var t=document.getElementById("#sidebar");Object(o.b)(t,"in")?Object(o.c)(t,"in"):Object(o.a)(t,"in")})})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=Object.assign({},this.getDefaultOptions(),t),this.container={};var n=this.randomID();document.body.appendChild(this.getElementFromString('<div id="'+n+'" class="notifications notifications-position-top"></div>')),this.container.top=document.getElementById(n);var o=this.randomID();document.body.appendChild(this.getElementFromString('<div id="'+o+'" class="notifications notifications-position-bottom"></div>')),this.container.bottom=document.getElementById(o);var i=this.randomID();document.body.appendChild(this.getElementFromString('<audio preload="auto" volume="'+this.options.volume+'" id="'+i+'">\n          <source src='+this.options.notificationSound+' type="audio/mpeg" />\n          <embed hidden="true" loop="false" src="'+this.options.notificationSound+'" />\n        </audio>')),this.player=document.getElementById(i),this.player.load(),this.player.volume=this.options.volume}return i(e,[{key:"getDefaultOptions",value:function(){return{notificationSound:"../dist/media/notification.mp3",volume:1,notification:{autoHide:!1,playSound:!0,duration:5e3,style:"default",position:"top"}}}},{key:"randomID",value:function(){return Math.random().toString(36).substr(2,10)}},{key:"getElementFromString",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild}}]),i(e,[{key:"generateNotificationCode",value:function(e,t){return'<div class="notification notification-'+t+' toggle is-hidden">\n        <div class="container d-flex justify-content-between align-items-center">\n          <div class="notification-text">'+e+'</div>\n          <button type="button" class="close" aria-label="Close">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">\n              <line x1="18" y1="6" x2="6" y2="18"></line>\n              <line x1="6" y1="6" x2="18" y2="18"></line>\n            </svg>\n          </button>\n        </div>\n      </div>'}},{key:"fire",value:function(e,t){var n=Object.assign({},this.options.notification,t);!0===n.playSound&&(this.player.pause(),this.player.currentTime=0,this.player.play());var i=this.container[n.position].appendChild(this.getElementFromString(this.generateNotificationCode(e,n.style)));setTimeout(function(){Object(o.c)(i,"is-hidden")},10);var r=i.querySelectorAll(".close");Array.from(r).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),Object(o.a)(i,"is-hidden"),setTimeout(function(){i.remove()},1e3)})}),!0===n.autoHide&&setTimeout(function(){Object(o.a)(i,"is-hidden"),setTimeout(function(){i.remove()},1e3)},n.duration)}}]),e}();window.notifications=r},,,,,,,,,function(e,t,n){e.exports=n(14)},function(e,t,n){n(1),n(2),n(3),n(4)}]);

function logout2() { 
    localStorage.removeItem('loggedUser');
    
} 

function affichUser() { 
    var todoUser = JSON.parse(localStorage.getItem('User')) || []
    // var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    var html = `  <thead>
     <tr>
    <th scope="col">
      <label class="custom-control custom-checkbox m-0 p-0">
        <input type="checkbox" class="custom-control-input table-select-all">
        <span class="custom-control-indicator"></span>
      </label>
    </th>
    <th scope="col">ID</th>
    <th scope="col">Image</th>
    <th scope="col">Username</th>
    <th scope="col">NOM</th>
    <th scope="col">PRENOM</th>
    <th scope="col">Date de Naissance</th>
    <th scope="col">E-MAIL</th>
    <th scope="col">TELEPHONE</th>
    <th scope="col">ADRESSE</th>
    <th scope="col">Sexe</th>
    <th scope="col">Etat</th> 
    <th scope="col">Actions</th>
  </tr>
  </thead>`;

    for (let i = 0; i < todoUser.length; i++) {
            html += ` <tbody>
            <tr>
              <!-- <th scope="row">
                <label class="custom-control custom-checkbox m-0 p-0">
                  <input type="checkbox" class="custom-control-input table-select-row">
                  <span class="custom-control-indicator"></span>
                </label>
              </th> -->
              <td></td>
              <td>${todoUser[i].id}</td>
              <td><img width=50 src='../../images/${todoUser[i].image}'></td>
              <td>${todoUser[i].userName}</td>
              <td>${todoUser[i].nom}</td>
              <td>${todoUser[i].prenom}</td>
              <td>${todoUser[i].dateDeNaissance}</td>
              <td>${todoUser[i].email}</td>
              <td>${todoUser[i].num}</td>
              <td>${todoUser[i].adresse}</td>
               <td>${todoUser[i].sexe}</td>
               <td id="rola">${todoUser[i].Etat}</td>
              
              <td>
                <button class="btn btn-sm btn-primary"onclick="active(${i})">Active</button>
                <button class="btn btn-sm btn-danger" onclick="inactive(${i})">Inactive</button>
              </td>
            </tr>
            </tbody>`
            
        

    //     <td> <input type="button" onclick='editelem(${i})'value="edit" id="identities1"> <br> 
    //     <input type="button" onclick='deleteTask(${todoTable[i].id})' value="Delete" id="identities2"></td>
        
    //     </td>
    // </tr>`
        
    }

    console.log(html);

    document.getElementById('myTable').innerHTML = html;


}
function inactive(pos) { 
    var todoUser = JSON.parse(localStorage.getItem('User')) || []

    console.log(pos);
    
    // todoUser[pos].Etat="";
    todoUser[pos].Etat="Inactive";
    console.log(todoUser[pos].Etat);
    localStorage.setItem('User', JSON.stringify(todoUser));
    affichUser();
} 
function active(pos) { 
  var todoUser=JSON.parse(localStorage.getItem('User')) || []
  todoUser[pos].Etat="Active" ; 
  localStorage.setItem('User',JSON.stringify(todoUser)); 
  affichUser();
} 

function afficheNombreDeCompte() { 
  var nb = JSON.parse(localStorage.getItem('User')) || [] 
  var nbAnnonce = JSON.parse(localStorage.getItem('table')) || [] 

  var lengthAnn = nbAnnonce.length; 
  var length = nb.length; 
  console.log(length); 
  console.log(nbAnnonce);
  document.getElementById('nbr').innerHTML = length;
  document.getElementById('nbrAnn').innerHTML = lengthAnn;

} 

function affichAnnonce() { 
  var ann = JSON.parse(localStorage.getItem('table')) || []
 

  var html = `  <thead>
   <tr>
  <th scope="col">
    <label class="custom-control custom-checkbox m-0 p-0">
      <input type="checkbox" class="custom-control-input table-select-all">
      <span class="custom-control-indicator"></span>
    </label>
  </th>
  <th scope="col">ID</th>
  <th scope="col">IDUSER</th>
  <th scope="col">Annonceur</th>
  <th scope="col">Départ</th>
  <th scope="col">Arrivée</th>
  <th scope="col">Date</th>
  <th scope="col">place disponible</th>
  <th scope="col">Prix</th>
  <th scope="col">Commentaire</th>
  <th scope="col">Actions</th>
</tr>
</thead>`;

  for (let i = 0; i < ann.length; i++) {
          html += ` <tbody>
          <tr>
            <!-- <th scope="row">
              <label class="custom-control custom-checkbox m-0 p-0">
                <input type="checkbox" class="custom-control-input table-select-row">
                <span class="custom-control-indicator"></span>
              </label>
            </th> -->
            <td></td>
            <td>${ann[i].id}</td>
            <td>${ann[i].iduser}</td>
            <td>${ann[i].nomUser}</td>
            <td>${ann[i].departTrajet}</td>
            <td>${ann[i].arriveTrajet}</td>
            <td>${ann[i].dateTrajet}</td>
            <td>${ann[i].place}</td>
            <td>${ann[i].prix}</td>
            <td>${ann[i].commentaire}</td>
            
            
            <td>
           
              <button class="btn btn-sm btn-danger" onclick='deleteAnnonce(${ann[i].id})'>Delete</button>
            </td>
          </tr>
          </tbody>`
          
      

  //     <td> <input type="button" onclick='editelem(${i})'value="edit" id="identities1"> <br> 
  //     <input type="button" onclick='deleteTask(${todoTable[i].id})' value="Delete" id="identities2"></td>
      
  //     </td>
  // </tr>`
      
  }

  console.log(html);

  document.getElementById('tableAnn').innerHTML = html;


} 
function deleteAnnonce(idAN) { 
  var ann = JSON.parse(localStorage.getItem('table'))
    console.log(ann) ;
    for(let i = 0 ; i<ann.length ; i++) { 
        if(idAN==ann[i].id) {
    ann.splice(i, 1); }} 
    localStorage.setItem('table', JSON.stringify(ann));
    this.affichAnnonce()

}