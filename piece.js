class Piece {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }

  initPiece(quantity) {

    piece = document.createElement("img");
    piece.classList.add(this.color, this.color + "-" + this.type);
    if (quantity) {
      piece.classList.add(this.color, this.color + "-" + this.type + "-" + quantity);
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
    let parentDivClassName = piece.parentElement.className;
    let parentDivClassNameNumber = Array.from(parentDivClassName)[1];
    parentDivClassNameNumber = parseInt(parentDivClassNameNumber);
    let parentDivClassNameLetter = Array.from(parentDivClassName)[0];
    let nextMovesClassNames = [];

    let indexOfParentDivClassNameLetter = chessboardLetters.indexOf(parentDivClassNameLetter);

    let bottomDiagonalNextMoveClassNameNumber = parentDivClassNameNumber - 1;
    let topDiagonalNextMoveClassNameNumber = parentDivClassNameNumber + 1;
    let lettersReversed = [];
    let numbersReversed = [];


    let rightBottomLetterOwn = 0;
    let rightBottomLetterOther = 0;

    let rightTopLetterOwn = 0;
    let rightTopLetterOther = 0;

    let rightLetterOwn = 0;
    let rightLetterOther = 0;

    let topNumberOwn = 0;
    let topNumberOther = 0;

    let bottomNumberOwn = 0;
    let bottomNumberOther = 0;

    let leftBottomLetterOwn = 0;
    let leftBottomLetterOther = 0;

    let leftTopLetterOwn = 0;
    let leftTopLetterOther = 0;

    let leftLetterOwn = 0;
    let leftLetterOther = 0;

    let className;


    /****************************************************
     * MOVE TOP ONCE (WHITE) / MOVE BOTTOM ONCE (BLACK) *
     ****************************************************/

    if (this.type == "king" || (this.type == "pawn" && this.color == "white")) {
      className = parentDivClassNameLetter + (parentDivClassNameNumber + 1).toString();

      if (document.querySelector("." + className) !== null) {
        if (!document.querySelector("." + className).querySelector("." + this.color)) {
          nextMovesClassNames.push(className);
        }
      }
    }

    /****************************************************
     * MOVE BOTTOM ONCE (WHITE) / MOVE TOP ONCE (BLACK) *
     ****************************************************/

    if (this.type == "king" || (this.type == "pawn" && this.color == "black")) {
      className = parentDivClassNameLetter + (parentDivClassNameNumber - 1).toString();

      if (document.querySelector("." + className) !== null) {
        if (!document.querySelector("." + className).querySelector("." + this.color)) {
          nextMovesClassNames.push(className);
        }
      }
    }


    /****************************************************
     * MOVE LEFT ONCE (WHITE) / MOVE RIGHT ONCE (BLACK) *
     ****************************************************/

    if (this.type == "king") {
      className = chessboardLetters[indexOfParentDivClassNameLetter - 1] + parentDivClassNameNumber.toString();

      if (document.querySelector("." + className) !== null) {
        if (!document.querySelector("." + className).querySelector("." + this.color)) {
          nextMovesClassNames.push(className);
        }
      }
    }

    /****************************************************
     * MOVE RIGHT ONCE (WHITE) / MOVE LEFT ONCE (BLACK) *
     ****************************************************/

    if (this.type == "king") {
      className = chessboardLetters[indexOfParentDivClassNameLetter + 1] + parentDivClassNameNumber.toString();

      if (document.querySelector("." + className) !== null) {
        if (!document.querySelector("." + className).querySelector("." + this.color)) {
          nextMovesClassNames.push(className);
        }
      }
    }


    /**********************************************************
     * MOVE TOP RIGHT ONCE (WHITE) / MOVE BOTTOM LEFT (BLACK) *
     **********************************************************/

    if (this.type == "king") {
      className = chessboardLetters[indexOfParentDivClassNameLetter + 1] + (parentDivClassNameNumber + 1).toString();

      if (document.querySelector("." + className) !== null) {
        if (!document.querySelector("." + className).querySelector("." + this.color)) {
          nextMovesClassNames.push(className);
        }
      }
    }

    /***************************************************************
     * MOVE TOP LEFT ONCE (WHITE) / MOVE BOTTOM RIGHT ONCE (WHITE) *
     ***************************************************************/

    if (this.type == "king") {
      className = chessboardLetters[indexOfParentDivClassNameLetter - 1] + (parentDivClassNameNumber + 1).toString();

      if (document.querySelector("." + className) !== null) {
        if (!document.querySelector("." + className).querySelector("." + this.color)) {
          nextMovesClassNames.push(className);
        }
      }
    }

    /***************************************************************
     * MOVE BOTTOM RIGHT ONCE (WHITE) / MOVE TOP LEFT ONCE (BLACK) *
     ***************************************************************/

    if (this.type == "king") {
      className = chessboardLetters[indexOfParentDivClassNameLetter + 1] + (parentDivClassNameNumber - 1).toString();

      if (document.querySelector("." + className) !== null) {
        if (!document.querySelector("." + className).querySelector("." + this.color)) {
          nextMovesClassNames.push(className);
        }
      }
    }

    /***************************************************************
     * MOVE BOTTOM LEFT ONCE (WHITE) / MOVE TOP RIGHT ONCE (BLACK) *
     ***************************************************************/

    if (this.type == "king") {
      className = chessboardLetters[indexOfParentDivClassNameLetter - 1] + (parentDivClassNameNumber - 1).toString();

      if (document.querySelector("." + className) !== null) {
        if (!document.querySelector("." + className).querySelector("." + this.color)) {
          nextMovesClassNames.push(className);
        }
      }
    }




    for (let letter of chessboardLetters) {

      let nextMoveClassNameNumber = chessboardLetters.indexOf(letter) + 1

      if (nextMoveClassNameNumber < parentDivClassNameNumber) {
        numbersReversed.unshift(nextMoveClassNameNumber);

      } else if (nextMoveClassNameNumber > parentDivClassNameNumber) {

        /******************************************
         * MOVE TOP (WHITE) / MOVE BOTTOM (BLACK) *
         ******************************************/

        if (this.type == "queen" || this.type == "rook") {
          className = parentDivClassNameLetter + nextMoveClassNameNumber.toString();

          if (document.querySelector("." + className) !== null) {

            if (document.querySelector("." + className).innerHTML == "" && topNumberOwn == 0 && topNumberOther == 0) {
              nextMovesClassNames.push(className);
            } else if (document.querySelector("." + className).querySelector("." + this.color)) {
              topNumberOwn = 1;

            } else if (!document.querySelector("." + className).querySelector("." + this.color) && topNumberOther == 0 && topNumberOwn == 0) {
              nextMovesClassNames.push(className)
              topNumberOther = 1;
            }
          }
        }
      }

      if (chessboardLetters.indexOf(letter) < chessboardLetters.indexOf(parentDivClassNameLetter)) {
        lettersReversed.unshift(letter);

      } else if (chessboardLetters.indexOf(letter) > chessboardLetters.indexOf(parentDivClassNameLetter)) {

        /******************************************
         * MOVE RIGHT (WHITE) / MOVE LEFT (BLACK) *
         ******************************************/
        if (this.type == "queen" || this.type == "rook") {
          className = letter + parentDivClassNameNumber.toString();

          if (document.querySelector("." + className) !== null) {

            if (document.querySelector("." + className).innerHTML == "" && rightLetterOwn == 0 && rightLetterOther == 0) {
              nextMovesClassNames.push(className);
            } else if (document.querySelector("." + className).querySelector("." + this.color)) {
              rightLetterOwn = 1;

            } else if (!document.querySelector("." + className).querySelector("." + this.color) && rightLetterOwn == 0 && rightLetterOther == 0) {
              nextMovesClassNames.push(className)
              rightLetterOther = 1;
            }
          }
        }

        let diagonalNextMoveClassNameNumberMinus = bottomDiagonalNextMoveClassNameNumber--;
        let diagonalNextMoveClassNameNumberPlus = topDiagonalNextMoveClassNameNumber++;

        /*****************************************************
         * MOVE RIGHT BOTTOM (WHITE) / MOVE LEFT TOP (BLACK) *
         *****************************************************/

        if (this.type == "queen" || this.type == "bishop") {
          className = letter + diagonalNextMoveClassNameNumberMinus.toString();

          if (document.querySelector("." + className) !== null) {

            if (document.querySelector("." + className).innerHTML == "" && rightBottomLetterOwn == 0 && rightBottomLetterOther == 0) {
              nextMovesClassNames.push(className);
            } else if (document.querySelector("." + className).querySelector("." + this.color)) {
              rightBottomLetterOwn = 1;

            } else if (!document.querySelector("." + className).querySelector("." + this.color) && rightBottomLetterOwn == 0 && rightBottomLetterOther == 0) {
              nextMovesClassNames.push(className)
              rightBottomLetterOther = 1;
            }
          }



          /*****************************************************
           * MOVE RIGHT TOP (WHITE) / MOVE LEFT BOTTOM (BLACK) *
           *****************************************************/

          className = letter + diagonalNextMoveClassNameNumberPlus.toString();

          if (document.querySelector("." + className) !== null) {

            if (document.querySelector("." + className).innerHTML == "" && rightTopLetterOwn == 0 && rightTopLetterOther == 0) {
              nextMovesClassNames.push(className);
            } else if (document.querySelector("." + className).querySelector("." + this.color)) {
              rightTopLetterOwn = 1;

            } else if (!document.querySelector("." + className).querySelector("." + this.color) && rightTopLetterOwn == 0 && rightTopLetterOther == 0) {
              nextMovesClassNames.push(className)
              rightTopLetterOther = 1;
            }
          }
        }
      }
    }

    bottomDiagonalNextMoveClassNameNumber = parentDivClassNameNumber - 1;
    topDiagonalNextMoveClassNameNumber = parentDivClassNameNumber + 1;



    lettersReversed.forEach(letter => {

      /******************************************
       * MOVE LEFT (WHITE) / MOVE RIGHT (BLACK) *
       ******************************************/

      if (this.type == "queen" || this.type == "rook") {

        className = letter + parentDivClassNameNumber.toString();

        if (document.querySelector("." + className) !== null) {

          if (document.querySelector("." + className).innerHTML == "" && leftLetterOwn == 0 && leftLetterOther == 0) {
            nextMovesClassNames.push(className);
          } else if (document.querySelector("." + className).querySelector("." + this.color)) {
            leftLetterOwn = 1;

          } else if (!document.querySelector("." + className).querySelector("." + this.color) && leftLetterOwn == 0 && leftLetterOther == 0) {
            nextMovesClassNames.push(className)
            leftLetterOther = 1;
          }
        }
      }


      let diagonalNextMoveClassNameNumberMinus = bottomDiagonalNextMoveClassNameNumber--;
      let diagonalNextMoveClassNameNumberPlus = topDiagonalNextMoveClassNameNumber++;

      /*****************************************************
       * MOVE LEFT BOTTOM (WHITE) / MOVE RIGHT TOP (BLACK) *
       *****************************************************/
      if (this.type == "queen" || this.type == "bishop") {
        className = letter + diagonalNextMoveClassNameNumberMinus.toString();

        if (document.querySelector("." + className) !== null) {

          if (document.querySelector("." + className).innerHTML == "" && leftBottomLetterOwn == 0 && leftBottomLetterOther == 0) {
            nextMovesClassNames.push(className);
          } else if (document.querySelector("." + className).querySelector("." + this.color)) {
            leftBottomLetterOwn = 1;

          } else if (!document.querySelector("." + className).querySelector("." + this.color) && leftBottomLetterOwn == 0 && leftBottomLetterOther == 0) {
            nextMovesClassNames.push(className)
            leftBottomLetterOther = 1;
          }
        }


        /*****************************************************
         * MOVE LEFT TOP (WHITE) / MOVE RIGHT BOTTOM (BLACK) *
         *****************************************************/

        className = letter + diagonalNextMoveClassNameNumberPlus.toString();

        if (document.querySelector("." + className) !== null) {

          if (document.querySelector("." + className).innerHTML == "" && leftTopLetterOwn == 0 && leftTopLetterOther == 0) {
            nextMovesClassNames.push(className);
          } else if (document.querySelector("." + className).querySelector("." + this.color)) {
            leftTopLetterOwn = 1;

          } else if (!document.querySelector("." + className).querySelector("." + this.color) && leftTopLetterOwn == 0 && leftTopLetterOther == 0) {
            nextMovesClassNames.push(className)
            leftTopLetterOther = 1;
          }
        }

      }
    })




    numbersReversed.forEach(number => {

      /******************************************
       * MOVE BOTTOM (WHITE) / MOVE TOP (BLACK) *
       ******************************************/
      if (this.type == "queen" || this.type == "rook") {
        className = parentDivClassNameLetter + number;

        if (document.querySelector("." + className) !== null) {

          if (document.querySelector("." + className).innerHTML == "" && bottomNumberOwn == 0 && bottomNumberOther == 0) {
            nextMovesClassNames.push(className);
          } else if (document.querySelector("." + className).querySelector("." + this.color)) {
            bottomNumberOwn = 1;

          } else if (!document.querySelector("." + className).querySelector("." + this.color) && bottomNumberOwn == 0 && bottomNumberOther == 0) {
            nextMovesClassNames.push(className)
            bottomNumberOther = 1;
          }
        }
      }
    })


    nextMovesClassNames.forEach(move => {
      let nextMoveDiv = document.querySelector("." + move);
      let moveButton = document.createElement("div");
      moveButton.classList.add("next-move");
      nextMoveDiv.appendChild(moveButton);

    })


  }
}