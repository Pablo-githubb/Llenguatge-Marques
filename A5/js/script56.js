$(document).ready(function(){ 
  
    $(".primaryContained").on('click', function(){
    $(".comment").addClass("commentClicked");
  });//end click
  $("textarea").on('keyup.enter', function(){
    $(".comment").addClass("commentClicked");
  });//end keyup
  });//End Function

new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
      }
  }

  });
  let temps = 0;
const rellotgeElement = document.getElementById('rellotge');

function actualitzarRellotge() {
   temps++;
   const minuts = Math.floor(temps / 60);
   const segons = temps % 60;
   rellotgeElement.textContent = `${minuts}:${segons < 10 ? '0' + segons : segons}`;
}

// Actualitzar cada segon
setInterval(actualitzarRellotge, 1000);

function validarContrasenya() {
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;
  
  if (password1 !== password2) {
     alert('Les contrasenyes no coincideixen!');
     return false; // Evita l'enviament del formulari
  }
  
  if (password1.length < 8) {
     alert('La contrasenya ha de tenir almenys 8 caràcters.');
     return false; // Evita l'enviament del formulari
  }
  
  return true; // Permet l'enviament del formulari si les condicions són correctes
}
function mostrarImatge(imatgeGran) {
  document.getElementById('gran').src = imatgeGran;
  document.getElementById('imatgeGran').style.display = 'block'; // Mostra la imatge gran
}
function canviarColor(estat) {
  const seccio = document.querySelector('.destacat');
  const textOcult = document.getElementById('textOcult');
  
  if (estat) {
     seccio.style.backgroundColor = 'yellow'; // Color de fons quan es passa el cursor
     seccio.style.color = 'red'; // Color del text quan es passa el cursor
     textOcult.style.display = 'block'; // Mostra el text ocult
  } else {
     seccio.style.backgroundColor = ''; // Recupera el color de fons original
     seccio.style.color = ''; // Recupera el color del text original
     textOcult.style.display = 'none'; // Amaga el text de nou
  }
}
