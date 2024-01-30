const chessboard = document.querySelector(".chessboard");

const chessboardLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

const rooksLetters = ["a", "h"];
const bishopsLetters = ["b", "g"];
const knightsLetters = ["c", "f"];

let chessboardNumber = 8;



// Creates chessboard
for (let i = 0; i < 8; i++) {

    if (i % 2 == 0) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) {
                let square = document.createElement('div');
                square.classList.add(chessboardLetters[j] + (chessboardNumber));
                square.style.backgroundColor = "white";
                chessboard.appendChild(square);

            } else {
                let square = document.createElement('div');
                square.classList.add(chessboardLetters[j] + (chessboardNumber));
                square.style.backgroundColor = "brown";
                chessboard.appendChild(square);
            }
        }
    } else {
        for (let j = 0; j < 8; j++) {
            if (j % 2 > 0) {
                let square = document.createElement('div');
                square.classList.add(chessboardLetters[j] + (chessboardNumber));
                square.style.backgroundColor = "white";
                chessboard.appendChild(square);

            } else {
                let square = document.createElement('div');
                square.classList.add(chessboardLetters[j] + (chessboardNumber));
                square.style.backgroundColor = "brown";
                chessboard.appendChild(square);
            }
        }

    }

    chessboardNumber--;
}




// Chess pieces placement at the beginning of the game

let quantity = 1
let piece;

let whitePawn;
for (let letter of chessboardLetters) {
    whitePawn = new Piece("white", "pawn");
    whitePawn.initPiece(quantity);
    whitePawn.firstPosition(letter, "2");

    blackPawn = new Piece("black", "pawn");
    blackPawn.initPiece(quantity);
    blackPawn.firstPosition(letter, "7");

    quantity++;

}

quantity = 1;

for (let letter of rooksLetters) {
    whiteRook = new Piece("white", "rook");
    whiteRook.initPiece(quantity);
    whiteRook.firstPosition(letter, "1");

    blackRook = new Piece("black", "rook");
    blackRook.initPiece(quantity);
    blackRook.firstPosition(letter, "8");

    quantity++;

}

quantity = 1;

for (let letter of bishopsLetters) {
    whiteBishop = new Piece("white", "bishop");
    whiteBishop.initPiece(quantity);
    whiteBishop.firstPosition(letter, "1");

    blackBishop = new Piece("black", "bishop");
    blackBishop.initPiece(quantity);
    blackBishop.firstPosition(letter, "8");

    quantity++;

}

quantity = 1;

for (let letter of knightsLetters) {
    whiteKnight = new Piece("white", "knight");
    whiteKnight.initPiece(quantity);
    whiteKnight.firstPosition(letter, "1");

    blackKnight = new Piece("black", "knight");
    blackKnight.initPiece(quantity);
    blackKnight.firstPosition(letter, "8");

    quantity++;

}

whiteKing = new Piece("white", "king");
whiteKing.initPiece();
whiteKing.firstPosition(chessboardLetters[4], "1");

blackKing = new Piece("black", "king");
blackKing.initPiece();
blackKing.firstPosition(chessboardLetters[4], "8");


whiteQueen = new Piece("white", "queen");
whiteQueen.initPiece();
whiteQueen.firstPosition(chessboardLetters[3], "1");

blackQueen = new Piece("black", "queen");
blackQueen.initPiece();
blackQueen.firstPosition(chessboardLetters[3], "8");




document.addEventListener("click", nextMove);

function nextMove(e) {
    let selectedElement = document.querySelector(".selected");
    let nextMoves = document.querySelectorAll(".next-move");

    nextMoves.forEach(nextMove => {
        if (nextMove && (e.target == nextMove.parentElement || e.target == nextMove || e.target == nextMove.parentElement.querySelector("img"))) {
            let clonedElement = selectedElement.cloneNode();
            clonedElement.classList.remove("selected");
            if (nextMove.parentElement.querySelector("img")) {
                nextMove.parentElement.querySelector("img").remove();
            }
            nextMove.parentElement.appendChild(clonedElement);
            selectedElement.remove();
        }
    })

    if (selectedElement == null) {
        nextMoves.forEach(nextMove => nextMove.remove());
        e.target.classList.add("selected");
        selectedElement = document.querySelector(".selected");


    } else if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
        selectedElement = document.querySelector(".selected");
        nextMoves.forEach(nextMove => nextMove.remove());
    } else if (selectedElement !== null) {
        selectedElement.classList.remove("selected");
        e.target.classList.add("selected");
        selectedElement = document.querySelector(".selected");
        nextMoves.forEach(nextMove => nextMove.remove());
    }

    if (selectedElement !== null && selectedElement.classList.contains("white-pawn")) {
        whitePawn.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("white-queen")) {
        whiteQueen.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("white-king")) {
        whiteKing.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("white-rook")) {
        whiteRook.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("white-bishop")) {
        whiteBishop.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("white-knight")) {
        whiteKnight.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("black-pawn")) {
        blackPawn.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("black-queen")) {
        blackQueen.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("black-king")) {
        blackKing.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("black-rook")) {
        blackRook.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("black-bishop")) {
        blackBishop.move(e.target);
    } else if (selectedElement !== null && selectedElement.classList.contains("black-knight")) {
        blackKnight.move(e.target);
    }

}