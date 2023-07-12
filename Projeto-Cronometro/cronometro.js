const minute = document.getElementById('minute')
const second = document.getElementById('second')
const milisecond = document.getElementById('milisecond')
const lista = document.getElementById('lista')

const btStart = document.getElementById('btStart')
const btPause = document.getElementById('btPause')
const btReset = document.getElementById('btReset')

var varMilisecond = 0
var varSecond = 0
var varMinute = 0

var historic = []

var cronometroOn


function on(){

    btStart.style.display = 'none'
    btPause.style.display = 'flex'
    btReset.style.display = 'flex'
    cronometroOn = setInterval(()=>{
        if(varMilisecond>=99){
            varMilisecond = 0
            varSecond++
        } else{

            varMilisecond++
            
        }

        if(varSecond>=59){
            varSecond = 0
            varMinute++
            
        } 

        varMilisecond<10 ? milisecond.innerHTML = "0"+varMilisecond : milisecond.innerHTML = varMilisecond
        varSecond <10 ? second.innerHTML = "0"+varSecond : second.innerHTML = varSecond
        varMinute < 10 ? minute.innerHTML = "0"+varMinute : minute.innerHTML = varMinute

    },10)

    
}  


function off(){
    btStart.style.display = 'flex'
    btPause.style.display = 'none'
    clearInterval(cronometroOn)
    alimentList()

}

function alimentList(){

    historic.push(minute.innerHTML+":"+second.innerHTML+":"+milisecond.innerHTML)
    lista.innerHTML = ''
    historic.forEach(e=>{
        
        lista.innerHTML = `${lista.innerHTML} <li>${e}</li>`
    })



}


function reset(){
    off()
    varMilisecond = 0
    varSecond = 0
    varMinute = 0

    milisecond.innerHTML = "0"+varMilisecond
    second.innerHTML = "0"+varSecond
    minute.innerHTML = "0"+varMinute

    historic = []


    lista.innerHTML = ''
    btReset.style.display = 'none'

}