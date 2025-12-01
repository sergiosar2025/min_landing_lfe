// scripte.js
// Obtém referências aos elementos do DOM
const mobileMenuButton = document.querySelector('.mobile-menu-icon button');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-menu .nav-link');

/*Função para alternar a exibição do menu mobile.
 * Adiciona ou remove a classe 'active' para controlar
 * a visibilidade via CSS.
 */
function menuAparece() {
    mobileMenu.classList.toggle('active');

    // Opcional: Altera o ícone do botão (ex: de menu para X)
    const icon = mobileMenuButton.querySelector('.icon');
    if (mobileMenu.classList.contains('active')) {
        // Se estiver aberto, muda o ícone para um 'X' (se você tiver um)
        icon.src = "close_white_36dp.svg"; // Assumindo que você tem este ícone
        icon.alt = "Fechar Menu";
    } else {
        // Se estiver fechado, volta para o ícone de menu
        icon.src = "menu_white_36dp.svg"; // Ícone original
        icon.alt = "Abrir Menu";
    }
}

// Adiciona o listener de clique no botão do menu mobile
mobileMenuButton.addEventListener('click', menuAparece);


// Fecha o menu mobile ao clicar em qualquer link (âncora) dentro dele
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Verifica se o menu está ativo antes de fechar
        if (mobileMenu.classList.contains('active')) {
            menuAparece(); // Chama a função para fechar o menu
        }
    });
});