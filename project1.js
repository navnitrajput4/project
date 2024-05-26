const buttons = document.querySelectorAll('.button');
const body =document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(n) {
        
        console.log(n);
        console.log(n.target);
        if(n.target.id === 'grey'){
            body.style.backgroundColor = n.target.id
        }
        if(n.target.id === 'white'){
            body.style.backgroundColor = n.target.id
        }
        if(n.target.id === 'blue'){
            body.style.backgroundColor = n.target.id
        }
        if(n.target.id === 'yellow'){
            body.style.backgroundColor = n.target.id
        }

    });

});
