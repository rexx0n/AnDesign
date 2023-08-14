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
//modal
btnWorkProgress.addEventListener('click', ()=> {
    modalMain.classList.remove('modal--none')
})
modalMain.querySelector('svg').addEventListener('click', ()=>{
    modalMain.classList.add('modal--none')
})
//burger
