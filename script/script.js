const pontos = document.getElementById('pontos');
const leiaMais = document.getElementById('mais');
const btnLerMais = document.getElementById('btnLerMais')

function lerMais () {
    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        leiaMais.style.display="none";
        btnLerMais.innerHTML = "Leia Mais";
    } else {
        pontos.style.display="none";
        leiaMais.style.display="inline";
        btnLerMais.innerHTML = "Leia Menos";
    }
}