const chessboard = document.querySelector(".chessboard");

const chessboardLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

const rooksLetters = ["a", "h"];
const bishopsLetters = ["c", "f"];
const knightsLetters = ["b", "g"];

let chessboardNumber = 8;



// Creates chessboard
for (let i = 0; i < 8; i++) {

    if (i % 2 == 0) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) {
                let square = document.createElement('div');
                square.id = chessboardLetters[j] + (chessboardNumber);
                square.style.backgroundColor = "white";
                chessboard.appendChild(square);

            } else {
                let square = document.createElement('div');
                square.id = chessboardLetters[j] + (chessboardNumber);
                square.style.backgroundColor = "brown";
                chessboard.appendChild(square);
            }
        }
    } else {
        for (let j = 0; j < 8; j++) {
            if (j % 2 > 0) {
                let square = document.createElement('div');
                square.id = chessboardLetters[j] + (chessboardNumber);
                square.style.backgroundColor = "white";
                chessboard.appendChild(square);

            } else {
                let square = document.createElement('div');
                square.id = chessboardLetters[j] + (chessboardNumber);
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


let round = 1;



document.addEventListener("click", nextMove);


function nextMove(e) {


    if (!document.querySelector(".promotion")) {
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



                if (clonedElement.classList.contains("white-pawn")) {
                    let moveTopLeft = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.className)[0]) - 1] + (parseInt(Array.from(selectedElement.parentElement.className)[1]) + 1);
                    let pepDivLeft = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.className)[0]) - 1] + (parseInt(Array.from(selectedElement.parentElement.className)[1]));
                    let moveTopRight = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.className)[0]) + 1] + (parseInt(Array.from(selectedElement.parentElement.className)[1]) + 1);
                    let pepDivRight = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.className)[0]) + 1] + (parseInt(Array.from(selectedElement.parentElement.className)[1]));

                    if (document.querySelector(".pep") && document.querySelector(".pep").parentElement.className == pepDivLeft && clonedElement.parentElement.className == moveTopLeft) {
                        document.querySelector(".pep").remove();
                    } else if (document.querySelector(".pep") && document.querySelector(".pep").parentElement.className == pepDivRight && clonedElement.parentElement.className == moveTopRight) {
                        document.querySelector(".pep").remove();
                    }

                }

                if (clonedElement.classList.contains("black-pawn")) {
                    let moveTopLeft = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.className)[0]) + 1] + (parseInt(Array.from(selectedElement.parentElement.className)[1]) - 1);
                    let pepDivLeft = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.className)[0]) + 1] + (parseInt(Array.from(selectedElement.parentElement.className)[1]));
                    let moveTopRight = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.className)[0]) - 1] + (parseInt(Array.from(selectedElement.parentElement.className)[1]) - 1);
                    let pepDivRight = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.className)[0]) - 1] + (parseInt(Array.from(selectedElement.parentElement.className)[1]));

                    if (document.querySelector(".pep") && document.querySelector(".pep").parentElement.className == pepDivLeft && clonedElement.parentElement.className == moveTopLeft) {
                        document.querySelector(".pep").remove();
                    } else if (document.querySelector(".pep") && document.querySelector(".pep").parentElement.className == pepDivRight && clonedElement.parentElement.className == moveTopRight) {
                        document.querySelector(".pep").remove();
                    }

                }

                selectedElement.remove();

                if (document.querySelector(".pep")) {
                    document.querySelector(".pep").classList.remove("pep");
                }

                if (clonedElement.classList.contains("white-pawn") || clonedElement.classList.contains("black-pawn")) {
                    if (!clonedElement.classList.contains("moved") && (nextMove.parentElement.className.includes("4") || nextMove.parentElement.className.includes("5"))) {
                        clonedElement.classList.add("pep");
                    }

                    clonedElement.classList.add("moved");


                }



                if (clonedElement.classList.contains("white-pawn") && clonedElement.parentElement.className.includes("8")) {
                    let promotion = document.createElement("div");
                    promotion.classList.add("promotion");
                    clonedElement.parentElement.appendChild(promotion);

                    let queen = document.createElement("img");
                    queen.classList.add("promotion-white-queen");
                    queen.src = "img/Chess_qlt45.svg"
                    promotion.appendChild(queen);

                    let knight = document.createElement("img");
                    knight.classList.add("promotion-white-knight");
                    knight.src = "img/Chess_nlt45.svg"
                    promotion.appendChild(knight);

                    let rook = document.createElement("img");
                    rook.classList.add("promotion-white-rook");
                    rook.src = "img/Chess_rlt45.svg"
                    promotion.appendChild(rook);

                    let bishop = document.createElement("img");
                    bishop.classList.add("promotion-white-bishop");
                    bishop.src = "img/Chess_blt45.svg"
                    promotion.appendChild(bishop);

                    clonedElement.remove();
                }

                if (clonedElement.classList.contains("black-pawn") && clonedElement.parentElement.className.includes("1")) {
                    let promotion = document.createElement("div");
                    promotion.classList.add("promotion");
                    clonedElement.parentElement.appendChild(promotion);

                    let queen = document.createElement("img");
                    queen.classList.add("promotion-black-queen");
                    queen.src = "img/Chess_qdt45.svg"
                    promotion.appendChild(queen);

                    let knight = document.createElement("img");
                    knight.classList.add("promotion-black-knight");
                    knight.src = "img/Chess_ndt45.svg"
                    promotion.appendChild(knight);

                    let rook = document.createElement("img");
                    rook.classList.add("promotion-black-rook");
                    rook.src = "img/Chess_rdt45.svg"
                    promotion.appendChild(rook);

                    let bishop = document.createElement("img");
                    bishop.classList.add("promotion-black-bishop");
                    bishop.src = "img/Chess_bdt45.svg"
                    promotion.appendChild(bishop);

                    clonedElement.remove();
                }
                round++;
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

        if (round % 2 == 1) {

            let blackPieces = document.querySelectorAll(".black");
            blackPieces.forEach(blackPiece => {
                if (blackPiece.classList.contains("black-pawn")) {
                    blackPawn.move(blackPiece);
                } else if (blackPiece.classList.contains("black-queen")) {
                    blackQueen.move(blackPiece);
                } else if (blackPiece.classList.contains("black-knight")) {
                    blackKnight.move(blackPiece);
                } else if (blackPiece.classList.contains("black-rook")) {
                    blackRook.move(blackPiece);
                } else if (blackPiece.classList.contains("black-bishop")) {
                    blackBishop.move(blackPiece);
                } else if (blackPiece.classList.contains("black-king")) {
                    blackKing.move(blackPiece);
                }
            })

            let nextMovements = document.querySelectorAll(".next-move");
            nextMovements.forEach(nextMove => {
                if (!nextMove.parentElement.classList.contains("noblackmove")) {
                    nextMove.parentElement.classList.add("blackmove");
                }
                nextMove.remove();
            })

            let noBlackMove = document.querySelectorAll(".noblackmove");
            noBlackMove.forEach(blackMove => {
                blackMove.classList.remove("noblackmove");
            })

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
            }

            if (document.querySelector(".whitecheck")) {

                let checkDivs = document.querySelectorAll(".whitecheck");
                checkDivs.forEach(checkDiv => {
                    checkDiv.classList.remove("whitecheck");
                })
            }

            if (document.querySelector(".moveoutwhite")) {

                let checkDivs = document.querySelectorAll(".moveoutwhite");
                checkDivs.forEach(checkDiv => {
                    checkDiv.classList.remove("moveoutwhite");
                })
            }

            if (document.querySelector(".whitemove")) {

                let whiteMoves = document.querySelectorAll(".whitemove");
                whiteMoves.forEach(whiteMove => {
                    whiteMove.classList.remove("whitemove");
                })
            }
        } else {

            let whitePieces = document.querySelectorAll(".white");
            whitePieces.forEach(whitePiece => {
                if (whitePiece.classList.contains("white-pawn")) {
                    whitePawn.move(whitePiece);
                } else if (whitePiece.classList.contains("white-queen")) {
                    whiteQueen.move(whitePiece);
                } else if (whitePiece.classList.contains("white-knight")) {
                    whiteKnight.move(whitePiece);
                } else if (whitePiece.classList.contains("white-rook")) {
                    whiteRook.move(whitePiece);
                } else if (whitePiece.classList.contains("white-bishop")) {
                    whiteBishop.move(whitePiece);
                } else if (whitePiece.classList.contains("white-king")) {
                    whiteKing.move(whitePiece);
                }
            })

            let nextMovements = document.querySelectorAll(".next-move");
            nextMovements.forEach(nextMove => {
                if (!nextMove.parentElement.classList.contains("nowhitemove")) {
                    nextMove.parentElement.classList.add("whitemove");
                }
                nextMove.remove();
            })

            let noWhiteMove = document.querySelectorAll(".nowhitemove");
            noWhiteMove.forEach(whiteMove => {
                whiteMove.classList.remove("nowhitemove");
            })



            if (selectedElement !== null && selectedElement.classList.contains("black-pawn")) {
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





    } else if (document.querySelector(".promotion")) {

        let promotionSquareClassName = document.querySelector(".promotion").parentElement.className;

        if (e.target.classList.contains("promotion-white-queen")) {
            whiteQueen = new Piece("white", "queen");
            whiteQueen.initPiece();
            whiteQueen.firstPosition(Array.from(promotionSquareClassName)[0], "8");
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-white-knight")) {
            whiteKnight = new Piece("white", "knight");
            whiteKnight.initPiece();
            whiteKnight.firstPosition(Array.from(promotionSquareClassName)[0], "8");
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-white-rook")) {
            whiteRook = new Piece("white", "rook");
            whiteRook.initPiece();
            whiteRook.firstPosition(Array.from(promotionSquareClassName)[0], "8");
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-white-bishop")) {
            whiteBishop = new Piece("white", "bishop");
            whiteBishop.initPiece();
            whiteBishop.firstPosition(Array.from(promotionSquareClassName)[0], "8");
            document.querySelector(".promotion").remove();
        }


        if (e.target.classList.contains("promotion-black-queen")) {
            blackQueen = new Piece("black", "queen");
            blackQueen.initPiece();
            blackQueen.firstPosition(Array.from(promotionSquareClassName)[0], "1");
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-black-knight")) {
            blackKnight = new Piece("black", "knight");
            blackKnight.initPiece();
            blackKnight.firstPosition(Array.from(promotionSquareClassName)[0], "1");
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-black-rook")) {
            blackRook = new Piece("black", "rook");
            blackRook.initPiece();
            blackRook.firstPosition(Array.from(promotionSquareClassName)[0], "1");
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-black-bishop")) {
            blackBishop = new Piece("black", "bishop");
            blackBishop.initPiece();
            blackBishop.firstPosition(Array.from(promotionSquareClassName)[0], "1");
            document.querySelector(".promotion").remove();
        }

    }
} 