//Pop In caché
function hide(){

    modal.style.display="none";
}
document.getElementById("bouton").addEventListener("click",hide);

//Bonjour+prénom 
function salut() {
    let salutations= document.getElementById("prenom").value;
    document.getElementById("Hi").innerText="Bonjour "+ salutations;
}
document.getElementById("bouton").addEventListener("click",salut);

//Confirmation du mail + remerciements
function remerciement() {
    let mercibcp= document.getElementById('email').value;
    document.getElementById("thank").innerText="Merci "+ document.getElementById("prenom").value +", nous te confirmons que tu seras informé sur ton email : "+ mercibcp;
}
document.getElementById("validate").addEventListener("click",remerciement);

//Pop-in caché + Pop-in de confirmation d'adresse mail.
function pop(){
    merci.style.display="none"
}
pop();

function app(){

    merci.style.display="flex";
}
document.getElementById("validate").addEventListener("click",app);

//Caché le contenu de la page quand on est sur les pop-in
function disp(){
    main.style.display="none"
}
document.getElementById("validate").addEventListener("click",disp);

function hide2(){

    merci.style.display="none";
}
document.getElementById("bouton2").addEventListener("click",hide2);

//reprise du prénom + aurevoir + merci
function aurevoir() {
    let name= document.getElementById("prenom").value;
    document.getElementById("bye2").innerText="Merci" + name + " et à bientôt !";
}
document.getElementById("bouton2").addEventListener("click",aurevoir);

//disparition de la photo
function photo(){
    Photographe.style.display="none";
}
photo();

//apparition de la photo 
function photo1(){

    Photographe.style.display="flex";
}
document.getElementById("bouton2").addEventListener("click",photo1);

//apparition de la barre de cookie après le 1er pop in
function cookiesBar(){
    cookies.style.display="flex";
}
document.getElementById("bouton").addEventListener("click", cookiesBar);

//quand on accepte, la barre disparait
function hideCookies(){
    cookies.style.display="none";
}
document.getElementById("acceptButton").addEventListener("click",hideCookies);

//quand on clique sur personnaliser, on ouvre le pop in de paramétrage des cookies
function setCookies(){
    modalCookies.style.display="flex";
}
document.getElementById("persoButton").addEventListener("click",setCookies);

//changement de couleur
//Rouge
function changeRed(){
    this.style.backgroundColor="red";
}
document.getElementById("refusContenu").addEventListener("click", changeRed);
document.getElementById("refusPub").addEventListener("click", changeRed);
document.getElementById("refusMesure").addEventListener("click", changeRed);

//Vert
function changeGreen(){
    this.style.backgroundColor="Green";
}
document.getElementById("acceptContenu").addEventListener("click", changeGreen);
document.getElementById("acceptPub").addEventListener("click", changeGreen);
document.getElementById("acceptMesure").addEventListener("click", changeGreen);

//fermeture du modal Cookie
function closeModal(){
    modalCookies.style.display="none";
}
document.getElementById("close").addEventListener("click", closeModal)

