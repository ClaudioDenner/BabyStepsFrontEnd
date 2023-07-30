//select all buttons necessary
const buttonRight = document.querySelector('.right')
const buttonLeft = document.querySelector('.left')
const buttonTop = document.querySelector('.up')
const buttonBottom = document.querySelector('.down')


// add buttons in a array 
let items = [buttonRight, buttonLeft, buttonBottom, buttonTop]

// doing loop to this array for execute a function
items.forEach((i)=>{

    //select the element son for apply the rule necessary
    i.addEventListener('click', ()=>{
        let span = i.children[0]

        if(span.attributes.status.value == 'false'){
            span.style.visibility = 'visible'
            span.attributes.status.value = 'true'
        } else {
            span.style.visibility = 'hidden'
            span.attributes.status.value = 'false'
        }

    })
})

