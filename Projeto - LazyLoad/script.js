const imgs = document.querySelectorAll('.img')



//for firts load
onScroll()

//for load across to event
document.addEventListener("scroll", onScroll)

function onScroll(){

    imgs.forEach(
        (e)=>{

            let heightScreenVisible = window.innerHeight

            let positionYimg = e.getBoundingClientRect().bottom
        
            let factorToAjust = 100

                if((positionYimg-factorToAjust) <= heightScreenVisible){

                    let statusLoadImage = e.getAttribute('statusLoad')

                    if(statusLoadImage == "false"){  

                        
                    let src = `https://picsum.photos/200/300?image=${(Math.random()*100).toFixed(0)}`

                    e.setAttribute('src', src)
                    e.setAttribute('statusLoad','true')

                    }
            }

        }
    )


}



