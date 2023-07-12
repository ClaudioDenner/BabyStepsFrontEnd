const modal = document.getElementById('modal')

function activeModal(){

    modal.style.display = 'flex'

}

window.onclick = (event)=>{
    if(event.target == modal){
     modal.style.display = 'none'

    }
}