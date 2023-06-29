const accordion = document.querySelectorAll('.accordion-item')


accordion.forEach((item)=>{
    item.addEventListener('click', ()=>{
        let abrir = "&#9660;"
        let fechar = '&#9650;'
        const element = item.querySelector('.accordion-content')
        let titulo = item.querySelector('.symbol-title')
        let statusTitulo = titulo.getAttribute('prop')

        statusTitulo == 'off' ? titulo.innerHTML = fechar :  titulo.innerHTML = abrir
        statusTitulo == 'off' ? titulo.setAttribute('prop','on') : titulo.setAttribute('prop','off')


        element.classList.toggle('active')


    })
})