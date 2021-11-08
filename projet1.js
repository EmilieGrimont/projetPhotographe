function hide(){

    modal.style.display="none";
}
document.getElementById("bouton").addEventListener("click",hide);


function salut() {
    let salutations= document.getElementById("prenom").value;
    document.getElementById("Hi").innerText="Bonjour "+ salutations;
}
document.getElementById("bouton").addEventListener("click",salut);

document.getElementById("validate").addEventListener("click",remerciement)
function pop(){
    merci.style.display="none"
}
pop();

function app(){

    merci.style.display="flex";
}
document.getElementById("validate").addEventListener("click",app);


function remerciement() {
    let mercibcp= document.getElementById('email').value;
    document.getElementById("thank").innerText="Merci "+ document.getElementById("prenom").value +", nous te confirmons que tu seras informé sur ton email : "+ mercibcp;
}
document.getElementById("validate").addEventListener("click",remerciement);

function disp(){
    main.style.display="none"
}
document.getElementById("validate").addEventListener("click",disp);
function hide2(){

    merci.style.display="none";
}
document.getElementById("bouton2").addEventListener("click",hide2);

function aurevoir() {
    let name= document.getElementById("prenom").value;
    document.getElementById("bye2").innerText="Merci" + name + " et à bientôt !";
}
document.getElementById("bouton2").addEventListener("click",aurevoir);

function photo(){
    Photographe.style.display="none";
}
photo();
function photo1(){

    Photographe.style.display="flex";
}
document.getElementById("bouton2").addEventListener("click",photo1);
function cookiesBar(){
    cookies.style.display="flex";
}
document.getElementById("bouton").addEventListener("click", cookiesBar);
function hideCookies(){
    cookies.style.display="none";
}
document.getElementById("acceptButton").addEventListener("click",hideCookies);
