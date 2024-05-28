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

//função para a galeria de fotos
let slides = document.querySelectorAll('.slideshow');
        let dots = document.querySelectorAll('.dot');
        let slideIndex = 1;
        let timeoutID;
        const showSlides = (n) => {
            let i;
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }
            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            clearTimeout(timeoutID);
            timeoutID = setTimeout(autoSlides, 4000);
        };
        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };
        const currentSlide = (n) => {
            showSlides(slideIndex = n);
        };
        function autoSlides() {
            let i;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            timeoutID = setTimeout(autoSlides, 6000);
        }
        autoSlides();




