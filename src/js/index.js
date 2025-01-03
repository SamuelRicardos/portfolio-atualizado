// lógica de mostrar e esconder os projetos
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    
    mostrarMaisProjetos();

    
    
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

// inicio de lógica do icone de menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height) {
           navLinks.forEach(links => {
            links.classList.remove('active');
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
            
           }) 
        }
    })
}

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

// lógica de voltar para o inicio ao dar refresh na pagina

window.onload = () => {
    if (window.location.hash) {
        // Remove o hash da URL
        window.history.replaceState(null, null, window.location.pathname);
        // Rola para o topo (sessão home)
        window.scrollTo(0, 0);
    }
};