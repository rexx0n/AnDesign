let burger = document.querySelector('.header__burger')
burger.querySelector('svg').addEventListener('click', ()=> {
    burger.querySelector('svg').classList.add('header__none')
    burger.querySelector('.header__burger-content').classList.remove('header__none')
})
burger.querySelector('.header__burger-content svg').addEventListener('click', ()=> {
    burger.querySelector('svg').classList.remove('header__none')
    burger.querySelector('.header__burger-content').classList.add('header__none')
})