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
        let parentDivClassName = piece.parentElement.className;
        let parentDivClassNameNumber = Array.from(parentDivClassName)[1];
        parentDivClassNameNumber = parseInt(parentDivClassNameNumber);
        let parentDivClassNameLetter = Array.from(parentDivClassName)[0];
        let diagonalMovesClassNames = [];
        let diagonalNextMoveClassNameNumber = parentDivClassNameNumber - 1;
        let diagonalNextMoveClassNameNumber2 = parentDivClassNameNumber + 1;
        let diagonalNextMoveClassNameNumberTwo = parentDivClassNameNumber - 1;
        let diagonalNextMoveClassNameNumberTwo2 = parentDivClassNameNumber + 1;
        let lettersReversed = [];


        for (let letter of chessboardLetters) {
          let nextMoveClassNameNumber = chessboardLetters.indexOf(letter) + 1




          if (chessboardLetters.indexOf(letter) < chessboardLetters.indexOf(parentDivClassNameLetter)) {
            lettersReversed.unshift(letter);


          }
          else if (chessboardLetters.indexOf(letter) > chessboardLetters.indexOf(parentDivClassNameLetter)) {
            let diagonalNextMoveClassNameNumberMinus = diagonalNextMoveClassNameNumber--;
            let diagonalNextMoveClassNameNumberPlus = diagonalNextMoveClassNameNumber2++;
            let className = letter + diagonalNextMoveClassNameNumberMinus.toString();
            diagonalMovesClassNames.push(className)
            className = letter + diagonalNextMoveClassNameNumberPlus.toString();
            diagonalMovesClassNames.push(className)
            console.log(diagonalNextMoveClassNameNumber)
          }

          if (letter !== parentDivClassNameLetter) {
            let nextMoveClassName = letter + parentDivClassNameNumber;
            let nextMoveDiv = document.querySelector("." + nextMoveClassName);
            let moveButton = document.createElement("div");
            moveButton.classList.add("next-move");
            nextMoveDiv.appendChild(moveButton);
          }

          if ((chessboardLetters.indexOf(letter) + 1) !== parentDivClassNameNumber) {
            let nextMoveClassName = parentDivClassNameLetter + nextMoveClassNameNumber.toString();
            let nextMoveDiv = document.querySelector("." + nextMoveClassName);
            let moveButton = document.createElement("div");
            moveButton.classList.add("next-move");
            nextMoveDiv.appendChild(moveButton);
          }

          // if (letter !== parentDivLetter && (chessboardLetters.indexOf(letter) + 1) !== parentDivNumber) {
          //   let nextMoveParentDivNumber = chessboardLetters.indexOf(letter) + 1;
          //   let nextMoveParentDivLetter = letter;
          //   let nextMoveClassName = nextMoveParentDivLetter + nextMoveParentDivNumber.toString();
          //   let nextMoveDiv = document.querySelector("." + nextMoveClassName);
          //   let moveButton = document.createElement("div");
          //   moveButton.classList.add("next-move");
          //   nextMoveDiv.appendChild(moveButton);
          // }

        }
        console.log(diagonalNextMoveClassNameNumber)


        lettersReversed.forEach(letter => {
          let diagonalNextMoveClassNameNumberMinus = diagonalNextMoveClassNameNumberTwo--;
          let diagonalNextMoveClassNameNumberPlus = diagonalNextMoveClassNameNumberTwo2++;
          let className = letter + diagonalNextMoveClassNameNumberMinus.toString();
          diagonalMovesClassNames.push(className)
          className = letter + diagonalNextMoveClassNameNumberPlus.toString();
          diagonalMovesClassNames.push(className)
        })

        diagonalMovesClassNames.forEach(move => {
          if (document.querySelector("." + move) !== null) {
            let nextMoveDiv = document.querySelector("." + move);
            let moveButton = document.createElement("div");
            moveButton.classList.add("next-move");
            nextMoveDiv.appendChild(moveButton);
          }
        })
        console.log(diagonalMovesClassNames)
        console.log(diagonalNextMoveClassNameNumber)


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