const operator = document.querySelectorAll('.operator .section')

operator.forEach((section) =>{
    section.addEventListener('click', (event) =>{
        const getElement = section.parentElement
        const openElement = getElement.classList.toggle('open')
    })
})