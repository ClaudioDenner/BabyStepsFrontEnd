const input = document.getElementById('input')
const typehead = document.getElementById('typehead')
const list = document.getElementById('list')
const close = document.getElementById('close')
let arr

fetch('https://gist.githubusercontent.com/letanure/3012978/raw/6938daa8ba69bcafa89a8c719690225641e39586/estados-cidades.json')
.then(result=> result.json())
.then(json => arr = json.estados[4].cidades)


input.addEventListener('input',()=>{


    list.innerHTML = ''
    let inputUpperCase = input.value[0].toUpperCase()+input.value.substring(1).toLowerCase()
    let newArr = arr.filter((e)=> e.includes(inputUpperCase))
    input.value =='' ? newArr = '' : newArr
    input.value != '' ?  typehead.style.display   =   'flex' : typehead.style.display   =   'none';
    newArr != '' ?  typehead.style.display   =   'flex' : typehead.style.display   =   'none';


    
    newArr.forEach((e)=>{
        
        list.innerHTML = list.innerHTML + `<li id='item'>${e}</li>`
    })

    const items = document.querySelectorAll('#item')



    input.value ==='' ? close.className = '' : close.className = "bi bi-x"

    items.forEach(item=>{
        item.addEventListener('click',function(event){
            const el = event.target
            input.value = el.innerText
            typehead.style.display   =   'none';
        })
    })

})


function erase(){
    input.value = ''
    typehead.style.display   =   'none';
    close.className = ''
}


