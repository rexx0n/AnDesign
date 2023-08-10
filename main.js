import "./scss/style.scss";

let btnsNext = document.querySelectorAll('.computation__questions  .button-red')
let questions = document.querySelectorAll('.computation__question')
let paragraphs = document.querySelectorAll('.computation > p')
let modal = document.querySelector('.modal')
let modalMain = document.querySelector('.modal--main')
let btnWorkProgress = document.querySelector('.work-progress .button-red')
let count = 0
btnsNext.forEach(btn => {
    btn.addEventListener('click', () => {
        paragraphs.forEach(paragraph => {
            paragraph.classList.add('computation__question--none')
        })
        if (questions.length - 1 <= count) {
            modal.classList.remove('modal--none')
            modal.querySelector('svg').addEventListener('click', () => {
                modal.classList.add('modal--none')
            })
        } else {
            questions[count].classList.add('computation__question--none')
            count++
            questions[count].classList.remove('computation__question--none')
        }
    })
})
btnWorkProgress.addEventListener('click', ()=> {
    modalMain.classList.remove('modal--none')
})
modalMain.querySelector('svg').addEventListener('click', ()=>{
    modalMain.classList.add('modal--none')
})
//burger
let burger = document.querySelector('.header__burger')
burger.querySelector('svg').addEventListener('click', ()=> {
    burger.querySelector('svg').classList.add('header__none')
    burger.querySelector('.header__burger-content').classList.remove('header__none')
})
burger.querySelector('.header__burger-content svg').addEventListener('click', ()=> {
    console.log( burger.querySelector('svg'))
    burger.querySelector('svg').classList.remove('header__none')
    burger.querySelector('.header__burger-content').classList.add('header__none')
})