// Je sélectionne et je stocke
// l'icône burger
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
// la DIV modal
const modal = document.querySelector('.modal');
console.log(modal);

modal.style.transform = "translateY(-100vh)";

icone.addEventListener('click', function() {
   console.log("icone cliquée");
   
   /* ERREUR DE CODE*/
   // modal.classList.toggle('change-modal');
   icone.classList.toggle('fa-times');

   if(modal.style.transform === "translateY(-100vh)"){
      modal.style.transform = "translateY(0vh)"
   }
   else{
      modal.style.transform = "translateY(-100vh)";
   }
});
