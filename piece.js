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
    if (this.color == "white") {
      if (this.type == "king") {

      } else if (this.type == "queen") {
        let parentDivClassName = piece.parentElement.className;
        let parentDivClassNameNumber = Array.from(parentDivClassName)[1];
        parentDivClassNameNumber = parseInt(parentDivClassNameNumber);
        let parentDivClassNameLetter = Array.from(parentDivClassName)[0];
        let nextMovesClassNames = [];
        let bottomDiagonalNextMoveClassNameNumber = parentDivClassNameNumber - 1;
        let topDiagonalNextMoveClassNameNumber = parentDivClassNameNumber + 1;
        let lettersReversed = [];
        let numbersReversed = [];


        let rightBottomLetterWhite = 0;
        let rightBottomLetterBlack = 0;
        let rightTopLetterWhite = 0;
        let rightTopLetterBlack = 0;

        let rightLetterWhite = 0;
        let rightLetterBlack = 0;
        let topNumberWhite = 0;
        let topNumberBlack = 0;


        for (let letter of chessboardLetters) {

          let nextMoveClassNameNumber = chessboardLetters.indexOf(letter) + 1

          if (nextMoveClassNameNumber < parentDivClassNameNumber) {
            numbersReversed.unshift(nextMoveClassNameNumber);

          } else if (nextMoveClassNameNumber > parentDivClassNameNumber) {

            /*******
             * TOP *
             *******/

            let className = parentDivClassNameLetter + nextMoveClassNameNumber.toString();

            if (document.querySelector("." + className) !== null) {

              if (document.querySelector("." + className).innerHTML == "" && topNumberWhite == 0 && topNumberBlack == 0) {
                nextMovesClassNames.push(className);
              } else if (document.querySelector("." + className).querySelector(".white")) {
                topNumberWhite = 1;

              } else if (document.querySelector("." + className).querySelector(".black") && topNumberBlack == 0 && topNumberWhite == 0) {
                nextMovesClassNames.push(className)
                topNumberBlack = 1;
              }
            }
          }

          if (chessboardLetters.indexOf(letter) < chessboardLetters.indexOf(parentDivClassNameLetter)) {
            lettersReversed.unshift(letter);

          } else if (chessboardLetters.indexOf(letter) > chessboardLetters.indexOf(parentDivClassNameLetter)) {

            /*********
             * RIGHT *
             *********/

            let className = letter + parentDivClassNameNumber.toString();

            if (document.querySelector("." + className) !== null) {

              if (document.querySelector("." + className).innerHTML == "" && rightLetterWhite == 0 && rightLetterBlack == 0) {
                nextMovesClassNames.push(className);
              } else if (document.querySelector("." + className).querySelector(".white")) {
                rightLetterWhite = 1;

              } else if (document.querySelector("." + className).querySelector(".black") && rightLetterWhite == 0 && rightLetterBlack == 0) {
                nextMovesClassNames.push(className)
                rightLetterBlack = 1;
              }
            }


            let diagonalNextMoveClassNameNumberMinus = bottomDiagonalNextMoveClassNameNumber--;
            let diagonalNextMoveClassNameNumberPlus = topDiagonalNextMoveClassNameNumber++;

            /*************************
             * DIAGONAL RIGHT BOTTOM *
             *************************/

            className = letter + diagonalNextMoveClassNameNumberMinus.toString();

            if (document.querySelector("." + className) !== null) {

              if (document.querySelector("." + className).innerHTML == "" && rightBottomLetterWhite == 0 && rightBottomLetterBlack == 0) {
                nextMovesClassNames.push(className);
              } else if (document.querySelector("." + className).querySelector(".white")) {
                rightBottomLetterWhite = 1;

              } else if (document.querySelector("." + className).querySelector(".black") && rightBottomLetterWhite == 0 && rightBottomLetterBlack == 0) {
                nextMovesClassNames.push(className)
                rightBottomLetterBlack = 1;
              }
            }

            /**********************
             * DIAGONAL RIGHT TOP *
             **********************/

            className = letter + diagonalNextMoveClassNameNumberPlus.toString();

            if (document.querySelector("." + className) !== null) {

              if (document.querySelector("." + className).innerHTML == "" && rightTopLetterWhite == 0 && rightTopLetterBlack == 0) {
                nextMovesClassNames.push(className);
              } else if (document.querySelector("." + className).querySelector(".white")) {
                rightTopLetterWhite = 1;

              } else if (document.querySelector("." + className).querySelector(".black") && rightTopLetterWhite == 0 && rightTopLetterBlack == 0) {
                nextMovesClassNames.push(className)
                rightTopLetterBlack = 1;
              }
            }
          }

          // if (letter !== parentDivClassNameLetter) {

          //   let nextMoveClassName = letter + parentDivClassNameNumber;

          //   let nextMoveDiv = document.querySelector("." + nextMoveClassName);
          //   let moveButton = document.createElement("div");
          //   moveButton.classList.add("next-move");
          //   nextMoveDiv.appendChild(moveButton);
          // }

          // if ((chessboardLetters.indexOf(letter) + 1) !== parentDivClassNameNumber) {
          //   let nextMoveClassName = parentDivClassNameLetter + nextMoveClassNameNumber.toString();
          //   let nextMoveDiv = document.querySelector("." + nextMoveClassName);
          //   let moveButton = document.createElement("div");
          //   moveButton.classList.add("next-move");
          //   nextMoveDiv.appendChild(moveButton);
          // }
        }

        bottomDiagonalNextMoveClassNameNumber = parentDivClassNameNumber - 1;
        topDiagonalNextMoveClassNameNumber = parentDivClassNameNumber + 1;

        let leftBottomLetterWhite = 0;
        let leftBottomLetterBlack = 0;
        let leftTopLetterWhite = 0;
        let leftTopLetterBlack = 0;

        let leftLetterWhite = 0;
        let leftLetterBlack = 0;

        lettersReversed.forEach(letter => {

          /********
           * LEFT *
           ********/

          let className = letter + parentDivClassNameNumber.toString();

          if (document.querySelector("." + className) !== null) {

            if (document.querySelector("." + className).innerHTML == "" && leftLetterWhite == 0 && leftLetterBlack == 0) {
              nextMovesClassNames.push(className);
            } else if (document.querySelector("." + className).querySelector(".white")) {
              leftLetterWhite = 1;

            } else if (document.querySelector("." + className).querySelector(".black") && leftLetterWhite == 0 && leftLetterBlack == 0) {
              nextMovesClassNames.push(className)
              leftLetterBlack = 1;
            }
          }



          let diagonalNextMoveClassNameNumberMinus = bottomDiagonalNextMoveClassNameNumber--;
          let diagonalNextMoveClassNameNumberPlus = topDiagonalNextMoveClassNameNumber++;

          /************************
           * DIAGONAL LEFT BOTTOM *
           ************************/

          className = letter + diagonalNextMoveClassNameNumberMinus.toString();

          if (document.querySelector("." + className) !== null) {

            if (document.querySelector("." + className).innerHTML == "" && leftBottomLetterWhite == 0 && leftBottomLetterBlack == 0) {
              nextMovesClassNames.push(className);
            } else if (document.querySelector("." + className).querySelector(".white")) {
              leftBottomLetterWhite = 1;

            } else if (document.querySelector("." + className).querySelector(".black") && leftBottomLetterWhite == 0 && leftBottomLetterBlack == 0) {
              nextMovesClassNames.push(className)
              leftBottomLetterBlack = 1;
            }
          }

          /*********************
           * DIAGONAL LEFT TOP *
           *********************/

          className = letter + diagonalNextMoveClassNameNumberPlus.toString();

          if (document.querySelector("." + className) !== null) {

            if (document.querySelector("." + className).innerHTML == "" && leftTopLetterWhite == 0 && leftTopLetterBlack == 0) {
              nextMovesClassNames.push(className);
            } else if (document.querySelector("." + className).querySelector(".white")) {
              leftTopLetterWhite = 1;

            } else if (document.querySelector("." + className).querySelector(".black") && leftTopLetterWhite == 0 && leftTopLetterBlack == 0) {
              nextMovesClassNames.push(className)
              leftTopLetterBlack = 1;
            }
          }
        })


        let bottomNumberWhite = 0;
        let bottomNumberBlack = 0;

        numbersReversed.forEach(number => {

          /**********
           * BOTTOM *
           **********/

          let className = parentDivClassNameLetter + number;

          if (document.querySelector("." + className) !== null) {

            if (document.querySelector("." + className).innerHTML == "" && bottomNumberWhite == 0 && bottomNumberBlack == 0) {
              nextMovesClassNames.push(className);
            } else if (document.querySelector("." + className).querySelector(".white")) {
              bottomNumberWhite = 1;

            } else if (document.querySelector("." + className).querySelector(".black") && bottomNumberWhite == 0 && bottomNumberBlack == 0) {
              nextMovesClassNames.push(className)
              bottomNumberBlack = 1;
            }
          }
        })


        // creates white queen's move options
        nextMovesClassNames.forEach(move => {
          let nextMoveDiv = document.querySelector("." + move);
          let moveButton = document.createElement("div");
          moveButton.classList.add("next-move");
          nextMoveDiv.appendChild(moveButton);

        })

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