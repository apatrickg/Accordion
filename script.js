let buttonElement = document.querySelectorAll('.reveal-elements'), i;

function makeBold(event){
    let question = event.target
    
    if (question.style.fontWeight!== 'bold'){
        question.style.fontWeight = 'bold';
    } else{
        question.style.fontWeight = 'normal'
    }
    question.classList.toggle('flip');
}

for (let i = 0; i < buttonElement.length; i++){
    buttonElement[i].addEventListener('click', () =>{
       let e = buttonElement[i].nextElementSibling;
       if (e.style.display != 'block'){
           e.style.display = 'block';
       } else{
           e.style.display = 'none';
       }
    })
}

buttonElement.forEach((e) => {
    e.addEventListener('click', makeBold)
})
