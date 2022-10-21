const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#FF6666','#FF6633', '#FF99FF', '#663399', '#33FFCC', '#66CC66', '#999999', '#CCCCCC', '#CCFFCC', '#CCFFFF', '#666633', '#CCFFFF', '#006666', '#0000FF', '#CC99FF','#FF3399']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}