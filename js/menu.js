const btn = document.getElementById('btn-menu')

function toglemenu (event){
    if(event.type == 'touchstart') event.preventDefault()
    const menu = document.getElementById('menu')
    menu.classList.toggle('open')

}

btn.addEventListener('click', toglemenu)

btn.addEventListener('touchstart',toglemenu)





    
    
