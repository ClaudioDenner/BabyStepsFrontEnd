const containers = document.querySelectorAll('.container')
const items = document.querySelectorAll('.container span')

// configurando os containers que receberão os itens arrastaveis
containers.forEach((container)=>{
    container.addEventListener('dragover', dragOver ) //escutar evento de arrastar sobre, chamar a função dragOver quando acontecer
    container.addEventListener('dragenter', dragEnter) // escutar o evento de arrastar para dentro e chamar a respectiva função
    container.addEventListener('dragleave', dragLeave) //escutar o evento de arrastar para fora e chamar a respectiva função
    container.addEventListener('drop', drop) // escutar evento de drop e chamar a respectiva função

    //mobile
    container.addEventListener('touchmove', touchMove);
    container.addEventListener('touchend', touchEnd);
})

//configurando os itens arrastaveis
items.forEach((item)=>{
    
    item.addEventListener('dragstart', dragStart) // detectando evento de arrasto
    item.addEventListener('dragend', dragEnd) //detectando finalização do evento de arrasto

    //mobile
    item.addEventListener('touchstart', touchStart);
    item.addEventListener('touchmove', touchMove);
    item.addEventListener('touchend', touchEnd);
})

let draggedItem = null;

//Funções para os respectivos eventos nos containers
function dragOver(event){
    event.preventDefault()
    //o default deste evento é mudar o cursor para o icone de block
}
function dragEnter(event){
    this.style.border = '3px solid red'
}
function dragLeave(event){
   this.style.border = '2px dashed red'
    // mudando a borda ao arrastar para fora um item
}
function drop(event){
    //this ->  refere-se ao container
    //container recebendo o item que está em drag/drop
    this.appendChild(draggedItem);
    this.style.border = '2px solid red'
    console.log('dropou')
}



//funções para os respectivos eventos nos itens
function dragStart(event){
    draggedItem = this
    setTimeout(() => {
        
        this.style.display = 'none';
    }, 0); //zero segundos após a finalização do evento, ele irá  ocultar o elemento
}
function dragEnd(event){
    setTimeout(() => {
        draggedItem.style.display = 'block';
        draggedItem = null;
    }, 0); //zero segundo após a finalização do evento, ele irá deixar visível o elemento
}



// ************************************* mobile **************************************
function touchStart(e) {
    draggedItem = e.target;
    draggedItem.style.opacity = '0.5';

}

function touchMove(e) {
    e.preventDefault()

    let touchLocation = e.targetTouches[0]
    e.target.style.left = touchLocation.pageX+'px'
    e.target.style.top = touchLocation.pageY+'px'
}

function touchEnd(e) {
    if (draggedItem) {
        draggedItem.style.opacity = '1';
      }
      draggedItem = null;
      return true


}






