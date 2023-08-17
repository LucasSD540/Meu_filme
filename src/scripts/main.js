document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const menu_icon = document.getElementById('icon');
    const menu_close = document.getElementById('close');

    // shows section
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAsAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // menu hamburger
        menu_icon.addEventListener('click', function() {
            const menuMobile = document.querySelector('.header__content__mobile');
            
            menuMobile.classList.add('header__content__mobile--is-active');
    })
        menu_close.addEventListener('click', function() {
            const menuMobile = document.querySelector('.header__content__mobile');

            menuMobile.classList.remove('header__content__mobile--is-active');
        })
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeAsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}