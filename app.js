const gameBoardEle = document.querySelector("#gameboard")
const playerDisplay =  document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]



function createBoard(){
    startPieces.forEach((startPiece, index) => {
        const squareEle = document.createElement('div')
        squareEle.classList.add('square')
        // squareEle.innerHTML = startPiece
        squareEle.innerHTML = startPiece
        squareEle.setAttribute('square-id', index)
        const row = Math.floor(index/8) + 1
        if(row % 2 === 0){
            squareEle.classList.add(index % 2 === 0 ? "brown" : "beige")

        }
        else{
            squareEle.classList.add(index % 2 === 0 ? "beige" : "brown")
        }

        if(index <= 15){
            squareEle.firstChild.firstChild.classList.add('white')
        }


        gameBoardEle.append(squareEle)
    })
}

createBoard()

