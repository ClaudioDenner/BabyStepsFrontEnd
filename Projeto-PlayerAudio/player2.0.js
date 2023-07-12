
let music = document.getElementById('audio');
let buttonPlay = document.getElementById('play');
let barraProgress = document.getElementById('barra-progress');
let title = document.getElementById('title');
var percent = document.getElementById('percent') 
let inicioTime = document.getElementById('inicial')
let finalTime = document.getElementById('final')
var buttonVolume = document.getElementById('area-volume')
var controlButtonVolume = [{valor:0, status:false}]
var volume = document.getElementById('volume')

let colecao = ["Bita.mp3", "HorseNoName.mp3"]
let quantColecao = colecao.length-1
console.log(quantColecao)



let directory = "mp3/";
let file = "Bita.mp3";
let indiceFicheiro = 0
audio.src = directory+file

let onOf = false;

buttonPlay.addEventListener('click', function(){
   
    
    
    if(onOf == false){play(); buttonPlay.innerText = "pause"; onOf = true;} else {pause(); onOf=false; buttonPlay.innerText="play_arrow"}

})



function avancar(){
    if(indiceFicheiro==quantColecao){indiceFicheiro = 0; ficheiroValor(colecao[indiceFicheiro])}
    else {indiceFicheiro++; ficheiroValor(colecao[indiceFicheiro])}
}

function recuar(){
    if(indiceFicheiro==0){indiceFicheiro = quantColecao; ficheiroValor(colecao[indiceFicheiro])}
    else {indiceFicheiro--; ficheiroValor(colecao[indiceFicheiro])}
}


function play(){
    
    audio.play()
    title.innerHTML = file



}
function pause(){
    audio.pause();
}

function progress(){
    let percentualAudio = (audio.currentTime/60*100)/(audio.duration/60);
    let percentualAudioString = "width:"+percentualAudio+"%";
    barraProgress.style = percentualAudioString;


}

function ficheiroValor(name){
    file = name;
    music.src=directory+file;
    onOf=true;
    pause();
    play();
    buttonPlay.innerText="pause";
    title.innerText = name;
}


percent.addEventListener('click',(e)=>{
    

   audio.currentTime = (e.clientX/percent.offsetWidth)*(audio.duration)
   
})

buttonVolume.addEventListener('click',(e)=>{

    
    let valor = 300-(e.clientY-buttonVolume.offsetTop)
    volume.style.height = valor+'px'
    audio.volume = valor/300


})



function activeButtonVolume(){
   if(controlButtonVolume[0].status==false){
    buttonVolume.style.display = 'block'
    controlButtonVolume[0].status=true
   } else{
    buttonVolume.style.display = 'none'
    controlButtonVolume[0].status=false
   }
}

setInterval(progress, 500);
