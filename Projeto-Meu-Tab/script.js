const navs = document.querySelectorAll('.nav li')

const tab1 = document.getElementById('tab1')
const tab2 = document.getElementById('tab2')
const tab3 = document.getElementById('tab3')



navs.forEach((e)=>{
    e.addEventListener('click',()=>{
        navs.forEach((e2)=>{
            e2.classList.add('off')
        })

        tab1.classList.remove('active')
        tab2.classList.remove('active')
        tab3.classList.remove('active')

        switch(e.id){

            case '1':
                tab1.classList.add('active')
                e.classList.toggle('off')

                break;
            case '2':
                tab2.classList.add('active')
                e.classList.toggle('off')
                break;
            case '3':
                tab3.classList.add('active')
                e.classList.toggle('off')
                break;
            

        }

       
      

    })
})

