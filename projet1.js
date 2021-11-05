function hide(){

    modal.style.display="none"
}
document.getElementById('bouton').addEventListener('click',hide)
function salut() {
    let salutations= document.getElementById('prenom').value;
    document.getElementById('Hi').innerText='Bonjour '+ salutations
}
document.getElementById('bouton').addEventListener('click',salut)
    
