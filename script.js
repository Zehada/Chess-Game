const chessboard = document.querySelector(".chessboard");

const chessboardLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

const rooksLetters = ["a", "h"];
const bishopsLetters = ["c", "f"];
const knightsLetters = ["b", "g"];

let chessboardNumber = 8;

var audioMove = new Audio('sounds/move.mp3');



var audioTake = new Audio('sounds/take.mp3');




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

let whitePawn = new Piece("white", "pawn");
let blackPawn = new Piece("black", "pawn");

for (let letter of chessboardLetters) {
    whitePawn.initPiece(quantity);
    whitePawn.firstPosition(letter, "2");

    blackPawn.initPiece(quantity);
    blackPawn.firstPosition(letter, "7");

    quantity++;

}




quantity = 1;

let whiteRook = new Piece("white", "rook");
let blackRook = new Piece("black", "rook");


for (let letter of rooksLetters) {

    whiteRook.initPiece(quantity);
    whiteRook.firstPosition(letter, "1");


    blackRook.initPiece(quantity);
    blackRook.firstPosition(letter, "8");

    quantity++;

}

quantity = 1;

let whiteBishop = new Piece("white", "bishop");
let blackBishop = new Piece("black", "bishop");

for (let letter of bishopsLetters) {

    whiteBishop.initPiece(quantity);
    whiteBishop.firstPosition(letter, "1");

    blackBishop.initPiece(quantity);
    blackBishop.firstPosition(letter, "8");

    quantity++;

}

quantity = 1;

let whiteKnight = new Piece("white", "knight");
let blackKnight = new Piece("black", "knight");

for (let letter of knightsLetters) {

    whiteKnight.initPiece(quantity);
    whiteKnight.firstPosition(letter, "1");


    blackKnight.initPiece(quantity);
    blackKnight.firstPosition(letter, "8");

    quantity++;

}

let whiteKing = new Piece("white", "king");
whiteKing.initPiece();
whiteKing.firstPosition(chessboardLetters[4], "1");


let blackKing = new Piece("black", "king");
blackKing.initPiece();
blackKing.firstPosition(chessboardLetters[4], "8");


let whiteQueen = new Piece("white", "queen");
whiteQueen.initPiece();
whiteQueen.firstPosition(chessboardLetters[3], "1");

let blackQueen = new Piece("black", "queen");
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
                    if (!clonedElement.classList.contains("white-pawn") && !clonedElement.classList.contains("black-pawn")) {
                        audioTake.play();
                    }
                } else if (!clonedElement.classList.contains("white-pawn") && !clonedElement.classList.contains("black-pawn")) {
                    audioMove.play();
                }
                nextMove.parentElement.appendChild(clonedElement);

                if (clonedElement.classList.contains("white-king") && !selectedElement.classList.contains("moved") && nextMove.parentElement.id == "c1") {
                    let castlingRook = document.querySelector("#a1").querySelector(".white-rook");
                    let clonedRook = castlingRook.cloneNode();
                    document.querySelector("#d1").appendChild(clonedRook);
                    clonedRook.classList.add("moved");
                    castlingRook.remove();
                    audioTake.play();
                } else if (clonedElement.classList.contains("white-king") && !selectedElement.classList.contains("moved") && nextMove.parentElement.id == "g1") {
                    let castlingRook = document.querySelector("#h1").querySelector(".white-rook");
                    let clonedRook = castlingRook.cloneNode();
                    document.querySelector("#f1").appendChild(clonedRook);
                    clonedRook.classList.add("moved");
                    castlingRook.remove();
                    audioTake.play();
                }

                if (clonedElement.classList.contains("black-king") && !selectedElement.classList.contains("moved") && nextMove.parentElement.id == "c8") {
                    let castlingRook = document.querySelector("#a8").querySelector(".black-rook");
                    let clonedRook = castlingRook.cloneNode();
                    document.querySelector("#d8").appendChild(clonedRook);
                    clonedRook.classList.add("moved");
                    castlingRook.remove();
                    audioTake.play();
                } else if (clonedElement.classList.contains("black-king") && !selectedElement.classList.contains("moved") && nextMove.parentElement.id == "g8") {
                    let castlingRook = document.querySelector("#h8").querySelector(".black-rook");
                    let clonedRook = castlingRook.cloneNode();
                    document.querySelector("#f8").appendChild(clonedRook);
                    clonedRook.classList.add("moved");
                    castlingRook.remove();
                    audioTake.play();
                }

                if (clonedElement.classList.contains("white-pawn")) {
                    let moveTopLeft = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.id)[0]) - 1] + (parseInt(Array.from(selectedElement.parentElement.id)[1]) + 1);
                    let pepDivLeft = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.id)[0]) - 1] + (parseInt(Array.from(selectedElement.parentElement.id)[1]));
                    let moveTopRight = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.id)[0]) + 1] + (parseInt(Array.from(selectedElement.parentElement.id)[1]) + 1);
                    let pepDivRight = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.id)[0]) + 1] + (parseInt(Array.from(selectedElement.parentElement.id)[1]));

                    if (document.querySelector(".pep") && document.querySelector(".pep").parentElement.id == pepDivLeft && clonedElement.parentElement.id == moveTopLeft) {
                        document.querySelector(".pep").remove();
                        audioTake.play();


                    } else if (document.querySelector(".pep") && document.querySelector(".pep").parentElement.id == pepDivRight && clonedElement.parentElement.id == moveTopRight) {
                        document.querySelector(".pep").remove();
                        audioTake.play();
                    } else if ((clonedElement.parentElement.id == moveTopLeft || clonedElement.parentElement.id == moveTopRight) && !nextMove.parentElement.id.includes("8")) {
                        audioTake.play();
                    } else if (!nextMove.parentElement.id.includes("8")) {
                        audioMove.play();
                    }

                }

                if (clonedElement.classList.contains("black-pawn")) {
                    let moveTopLeft = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.id)[0]) + 1] + (parseInt(Array.from(selectedElement.parentElement.id)[1]) - 1);
                    let pepDivLeft = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.id)[0]) + 1] + (parseInt(Array.from(selectedElement.parentElement.id)[1]));
                    let moveTopRight = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.id)[0]) - 1] + (parseInt(Array.from(selectedElement.parentElement.id)[1]) - 1);
                    let pepDivRight = chessboardLetters[chessboardLetters.indexOf(Array.from(selectedElement.parentElement.id)[0]) - 1] + (parseInt(Array.from(selectedElement.parentElement.id)[1]));

                    if (document.querySelector(".pep") && document.querySelector(".pep").parentElement.id == pepDivLeft && clonedElement.parentElement.id == moveTopLeft) {
                        document.querySelector(".pep").remove();
                        audioTake.play();

                    } else if (document.querySelector(".pep") && document.querySelector(".pep").parentElement.id == pepDivRight && clonedElement.parentElement.id == moveTopRight) {
                        document.querySelector(".pep").remove();
                        audioTake.play();
                    } else if ((clonedElement.parentElement.id == moveTopLeft || clonedElement.parentElement.id == moveTopRight) && !nextMove.parentElement.id.includes("1")) {
                        audioTake.play();
                    } else if (!nextMove.parentElement.id.includes("1")) {
                        audioMove.play();
                    }

                }

                selectedElement.remove();

                if (document.querySelector(".pep")) {
                    document.querySelector(".pep").classList.remove("pep");
                }

                if (clonedElement.classList.contains("white-pawn") || clonedElement.classList.contains("black-pawn")) {
                    if (!clonedElement.classList.contains("moved") && (nextMove.parentElement.id.includes("4") || nextMove.parentElement.id.includes("5"))) {
                        clonedElement.classList.add("pep");
                    }

                    clonedElement.classList.add("moved");


                }

                if (clonedElement.classList.contains("white-king") || clonedElement.classList.contains("black-king") || clonedElement.classList.contains("white-rook") || clonedElement.classList.contains("black-rook")) {

                    clonedElement.classList.add("moved");


                }



                if (clonedElement.classList.contains("white-pawn") && clonedElement.parentElement.id.includes("8")) {
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

                if (clonedElement.classList.contains("black-pawn") && clonedElement.parentElement.id.includes("1")) {
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

        } else if (round % 2 == 0) {

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

            // nowhitemove className is for pawn moves that can't take pieces


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

            if (document.querySelector(".blackcheck")) {

                let checkDivs = document.querySelectorAll(".blackcheck");
                checkDivs.forEach(checkDiv => {
                    checkDiv.classList.remove("blackcheck");
                })
            }

            if (document.querySelector(".moveoutblack")) {

                let checkDivs = document.querySelectorAll(".moveoutblack");
                checkDivs.forEach(checkDiv => {
                    checkDiv.classList.remove("moveoutblack");
                })
            }

            if (document.querySelector(".blackmove")) {

                let blackMoves = document.querySelectorAll(".blackmove");
                blackMoves.forEach(blackMove => {
                    blackMove.classList.remove("blackmove");
                })
            }

        }





    } else if (document.querySelector(".promotion")) {

        let promotionSquareId = document.querySelector(".promotion").parentElement.id;

        if (e.target.className.includes("promotion")) {
            audioMove.play();
        }

        if (e.target.classList.contains("promotion-white-queen")) {

            whiteQueen.initPiece();
            whiteQueen.firstPosition(Array.from(promotionSquareId)[0], "8");
            whiteQueen.move(document.querySelector("#" + promotionSquareId).querySelector(".white-queen"));
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-white-knight")) {

            whiteKnight.initPiece();
            whiteKnight.firstPosition(Array.from(promotionSquareId)[0], "8");
            whiteKnight.move(document.querySelector("#" + promotionSquareId).querySelector(".white-knight"));
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-white-rook")) {

            whiteRook.initPiece();
            whiteRook.firstPosition(Array.from(promotionSquareId)[0], "8");
            whiteRook.move(document.querySelector("#" + promotionSquareId).querySelector(".white-rook"));
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-white-bishop")) {

            whiteBishop.initPiece();
            whiteBishop.firstPosition(Array.from(promotionSquareId)[0], "8");
            whiteBishop.move(document.querySelector("#" + promotionSquareId).querySelector(".white-bishop"));
            document.querySelector(".promotion").remove();
        }


        if (e.target.classList.contains("promotion-black-queen")) {

            blackQueen.initPiece();
            blackQueen.firstPosition(Array.from(promotionSquareId)[0], "1");
            blackQueen.move(document.querySelector("#" + promotionSquareId).querySelector(".black-queen"));
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-black-knight")) {

            blackKnight.initPiece();
            blackKnight.firstPosition(Array.from(promotionSquareId)[0], "1");
            blackKnight.move(document.querySelector("#" + promotionSquareId).querySelector(".black-knight"));
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-black-rook")) {

            blackRook.initPiece();
            blackRook.firstPosition(Array.from(promotionSquareId)[0], "1");
            blackRook.move(document.querySelector("#" + promotionSquareId).querySelector(".black-rook"));
            document.querySelector(".promotion").remove();

        } else if (e.target.classList.contains("promotion-black-bishop")) {

            blackBishop.initPiece();
            blackBishop.firstPosition(Array.from(promotionSquareId)[0], "1");
            blackBishop.move(document.querySelector("#" + promotionSquareId).querySelector(".black-bishop"));
            document.querySelector(".promotion").remove();
        }

    }
} 