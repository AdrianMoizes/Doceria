const pontos = document.getElementById('pontos');
const leiaMais = document.getElementById('mais');
const btnLerMais = document.getElementById('btnLerMais')
//função para ler mais
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
//função para o menu responsivo
document.getElementById('open-btn').addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar');
    document.getElementById('content').classList.toggle('open-bar');
});

//função para os background dos links no menu

const sideItems = document.querySelectorAll('.side-item');

sideItems.forEach(item => {
    item.addEventListener('click', () => {
        sideItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});