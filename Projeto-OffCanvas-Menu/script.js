const menu = document.querySelector('.offCanvas')
const main = document.querySelector('.main')



function showMenu(){
    
    menu.style.width = '300px'
    screen.width < 768 ? '' : main.style.marginLeft = '300px'
    




}

function hiddenMenu(){
    menu.style.width = '0px'
    main.style.marginLeft = '0px'



}