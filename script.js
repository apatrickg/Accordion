let buttonElements = document.querySelectorAll('.reveal-elements'), i;

buttonElements.forEach((question) => {
    question.addEventListener('click', (event) => {
       event.target.classList.toggle('bold');
       event.target.classList.toggle('flip');
       let divs = document.querySelectorAll('.reveal-elements');
       for(let i = 0; i < divs.length; i++){
           if(divs[i] !== event.target){
               divs[i].classList.remove('bold');
               divs[i].classList.remove('flip');
           } else{
               continue;
           }
       }
        if (!event.target.classList.contains('reveal-elements')) return;
        event.target.nextElementSibling.classList.toggle('show');
        let siblings = document.querySelectorAll('.element');
        for (let i = 0; i < siblings.length; i++){
            if(siblings[i] !== event.target.nextElementSibling){
                siblings[i].classList.remove('show')
            } else{
                continue;
            }
        }
    })
})

