const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', function () {
        const ID = button.id;
        if (ID == 'red') {
            body.style.backgroundColor = 'red'; 
        }
        if (ID == 'green') {
            body.style.backgroundColor = 'green'; 
        }
        if (ID == 'blue') {
            body.style.backgroundColor = 'blue'; 
        }
        if (ID == 'black') {
            body.style.backgroundColor = 'black'; 
        }
    })
});