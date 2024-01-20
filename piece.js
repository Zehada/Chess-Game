class Piece {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }

  initPiece(quantity) {

    piece = document.createElement("img");
    piece.classList.add(this.color + "-" + this.type);
    if (quantity) {
      piece.classList.add(this.color + "-" + this.type + "-" + quantity);
    }
    if (this.color == "white") {
      if (this.type == "king") {
        piece.src = "img/Chess_klt45.svg"
      } else if (this.type == "queen") {
        piece.src = "img/Chess_qlt45.svg"
      } else if (this.type == "rook") {
        piece.src = "img/Chess_rlt45.svg"
      } else if (this.type == "bishop") {
        piece.src = "img/Chess_blt45.svg"
      } else if (this.type == "knight") {
        piece.src = "img/Chess_nlt45.svg"
      } else if (this.type == "pawn") {
        piece.src = "img/Chess_plt45.svg"
      }
    } else if (this.color == "black") {
      if (this.type == "king") {
        piece.src = "img/Chess_kdt45.svg"
      } else if (this.type == "queen") {
        piece.src = "img/Chess_qdt45.svg"
      } else if (this.type == "rook") {
        piece.src = "img/Chess_rdt45.svg"
      } else if (this.type == "bishop") {
        piece.src = "img/Chess_bdt45.svg"
      } else if (this.type == "knight") {
        piece.src = "img/Chess_ndt45.svg"
      } else if (this.type == "pawn") {
        piece.src = "img/Chess_pdt45.svg"
      }
    }

  }

  firstPosition(letter, number) {
    let square = document.querySelector("." + letter + number);
    square.appendChild(piece);
  }

  move(piece) {
    if (this.color == "white") {
      if (this.type == "king") {

      } else if (this.type == "queen") {

      } else if (this.type == "rook") {

      } else if (this.type == "bishop") {

      } else if (this.type == "knight") {

      } else if (this.type == "pawn") {

        let parentDiv = piece.parentElement.className;
        let parentDivNumber = Array.from(parentDiv)[1];
        parentDivNumber = parseInt(parentDivNumber);
        let parentDivNumberPlusOne = parentDivNumber + 1;
        let moveClassName = Array.from(parentDiv)[0] + parentDivNumberPlusOne.toString();
        let nextMoveDiv = document.querySelector("." + moveClassName);
        let moveButton = document.createElement("div");
        moveButton.classList.add("next-move");
        nextMoveDiv.appendChild(moveButton);



        // if (click == 1) {
        //   selectedPiece.classList.remove("selected");
        // }





      }
    } else if (this.color == "black") {
      if (this.type == "king") {

      } else if (this.type == "queen") {

      } else if (this.type == "rook") {

      } else if (this.type == "bishop") {

      } else if (this.type == "knight") {

      } else if (this.type == "pawn") {

      }
    }
  }

}