
let squares = document.querySelectorAll('.square')
let currentPlayer = '❌'

for (let index = 0; index < squares.length; index++) {

    const square = squares[index]; // o que isso faz?
    
    square.addEventListener('click', () => {
        const isFull = document.querySelector('.board').innerText.split('\n').length === 9

        if (square.innerHTML === '') {
            square.innerHTML = currentPlayer

            if (currentPlayer === '❌') {
                currentPlayer = '⭕️'
            }  else {
                currentPlayer = '❌'
            }
        } 

        if (isFull) {
            alert('Acabou!')
        }

    })
}

let resetButton = document.querySelector('#reset-button')

const reset = () => {
    const confirmReset = confirm('Vai mesmo apagar?')

    if (confirmReset) {
        for (let index = 0; index < squares.length; index++) {
            const square = squares[index];
            square.innerHTML = ''
            currentPlayer = '❌'
        }
    }
}

resetButton.addEventListener('click', reset)

