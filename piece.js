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
    let square = document.querySelector("#" + letter + number);
    square.appendChild(piece);
  }

  move(piece) {
    let parentDivId = piece.parentElement.id;
    let parentDivIdNumber = Array.from(parentDivId)[1];
    parentDivIdNumber = parseInt(parentDivIdNumber);
    let parentDivIdLetter = Array.from(parentDivId)[0];
    let nextMovesIds = [];
    let checkIds = [];
    let moveOut = [];

    window["topLeft" + this.color] = [];

    let topLeftCheckDivs = [];


    let indexOfParentDivIdLetter = chessboardLetters.indexOf(parentDivIdLetter);

    let bottomDiagonalNextMoveIdNumber = parentDivIdNumber - 1;
    let topDiagonalNextMoveIdNumber = parentDivIdNumber + 1;
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

    let id;
    let firstSquare;


    /****************************************************
     * MOVE TOP ONCE (WHITE) / MOVE BOTTOM ONCE (BLACK) *
     ****************************************************/

    if (this.type == "king") {
      id = parentDivIdLetter + (parentDivIdNumber + 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }
    }


    if (this.type == "pawn" && this.color == "white") {
      id = parentDivIdLetter + (parentDivIdNumber + 1).toString();

      if (document.querySelector("#" + id) !== null) {

        if (!document.querySelector("#" + id).querySelector("." + this.color) && !document.querySelector("#" + id).querySelector(".black")) {
          nextMovesIds.push(id);
        }
      }

    }


    /*************************
     * WHITE PAWN FIRST MOVE *
     *************************/

    firstSquare = parentDivIdLetter + (parentDivIdNumber + 1).toString();
    if (this.type == "pawn" && this.color == "white" && !piece.classList.contains("moved")) {
      id = parentDivIdLetter + (parentDivIdNumber + 2).toString();
      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color) && !document.querySelector("#" + id).querySelector(".black") && !document.querySelector("#" + firstSquare).querySelector("." + this.color) && !document.querySelector("#" + firstSquare).querySelector(".black")) {
          nextMovesIds.push(id);
        }
      }
    }

    /*************************
     * BLACK PAWN FIRST MOVE *
     *************************/

    firstSquare = parentDivIdLetter + (parentDivIdNumber - 1).toString();
    if (this.type == "pawn" && this.color == "black" && !piece.classList.contains("moved")) {
      id = parentDivIdLetter + (parentDivIdNumber - 2).toString();
      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color) && !document.querySelector("#" + id).querySelector(".white") && !document.querySelector("#" + firstSquare).querySelector("." + this.color) && !document.querySelector("#" + firstSquare).querySelector(".white")) {
          nextMovesIds.push(id);
        }
      }
    }

    /****************************************************
     * MOVE BOTTOM ONCE (WHITE) / MOVE TOP ONCE (BLACK) *
     ****************************************************/

    if (this.type == "king") {
      id = parentDivIdLetter + (parentDivIdNumber - 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }
    }

    if (this.type == "pawn" && this.color == "black") {
      id = parentDivIdLetter + (parentDivIdNumber - 1).toString();

      if (document.querySelector("#" + id) !== null) {

        if (!document.querySelector("#" + id).querySelector("." + this.color) && !document.querySelector("#" + id).querySelector(".white")) {
          nextMovesIds.push(id);
        }
      }

    }

    /****************************************************
     * MOVE LEFT ONCE (WHITE) / MOVE RIGHT ONCE (BLACK) *
     ****************************************************/

    if (this.type == "king") {
      id = chessboardLetters[indexOfParentDivIdLetter - 1] + parentDivIdNumber.toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }
    }

    /****************************************************
     * MOVE RIGHT ONCE (WHITE) / MOVE LEFT ONCE (BLACK) *
     ****************************************************/

    if (this.type == "king") {
      id = chessboardLetters[indexOfParentDivIdLetter + 1] + parentDivIdNumber.toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }
    }


    /**********************************************************
     * MOVE TOP RIGHT ONCE (WHITE) / MOVE BOTTOM LEFT (BLACK) *
     **********************************************************/

    if (this.type == "king") {
      id = chessboardLetters[indexOfParentDivIdLetter + 1] + (parentDivIdNumber + 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }
    }

    if (this.type == "pawn" && this.color == "white") {
      id = chessboardLetters[indexOfParentDivIdLetter + 1] + (parentDivIdNumber + 1).toString();
      let RightSquare = chessboardLetters[indexOfParentDivIdLetter + 1] + parentDivIdNumber.toString();


      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color) && document.querySelector("#" + id).querySelector(".black") || (document.querySelector("#" + RightSquare).querySelector(".black.pep"))) {
          nextMovesIds.push(id);
        }
      }
    }

    /***************************************************************
     * MOVE TOP LEFT ONCE (WHITE) / MOVE BOTTOM RIGHT ONCE (WHITE) *
     ***************************************************************/

    if (this.type == "king") {
      id = chessboardLetters[indexOfParentDivIdLetter - 1] + (parentDivIdNumber + 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }
    }

    if (this.type == "pawn" && this.color == "white") {
      id = chessboardLetters[indexOfParentDivIdLetter - 1] + (parentDivIdNumber + 1).toString();
      let leftSquare = chessboardLetters[indexOfParentDivIdLetter - 1] + parentDivIdNumber.toString();


      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color) && document.querySelector("#" + id).querySelector(".black") || (document.querySelector("#" + leftSquare).querySelector(".black.pep"))) {
          nextMovesIds.push(id);
        }
      }
    }

    /***************************************************************
     * MOVE BOTTOM RIGHT ONCE (WHITE) / MOVE TOP LEFT ONCE (BLACK) *
     ***************************************************************/

    if (this.type == "king") {
      id = chessboardLetters[indexOfParentDivIdLetter + 1] + (parentDivIdNumber - 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }
    }

    if (this.type == "pawn" && this.color == "black") {
      id = chessboardLetters[indexOfParentDivIdLetter + 1] + (parentDivIdNumber - 1).toString();
      let leftSquare = chessboardLetters[indexOfParentDivIdLetter + 1] + parentDivIdNumber.toString();


      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color) && document.querySelector("#" + id).querySelector(".white") || (document.querySelector("#" + leftSquare).querySelector(".white.pep"))) {
          nextMovesIds.push(id);
        }
      }
    }

    /***************************************************************
     * MOVE BOTTOM LEFT ONCE (WHITE) / MOVE TOP RIGHT ONCE (BLACK) *
     ***************************************************************/

    if (this.type == "king") {
      id = chessboardLetters[indexOfParentDivIdLetter - 1] + (parentDivIdNumber - 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }
    }

    if (this.type == "pawn" && this.color == "black") {
      id = chessboardLetters[indexOfParentDivIdLetter - 1] + (parentDivIdNumber - 1).toString();
      let RightSquare = chessboardLetters[indexOfParentDivIdLetter - 1] + parentDivIdNumber.toString();


      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color) && document.querySelector("#" + id).querySelector(".white") || (document.querySelector("#" + RightSquare).querySelector(".white.pep"))) {
          nextMovesIds.push(id);
        }
      }
    }



    /***************************************************************
     * MOVE WHITE KNIGHT TOP RIGHT / MOVE BLACK KNIGHT BOTTOM LEFT *
     ***************************************************************/

    if (this.type == "knight") {
      id = chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) + 1] + (parentDivIdNumber + 2).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }

      /***************************************************************
       * MOVE WHITE KNIGHT RIGHT TOP / MOVE BLACK KNIGHT LEFT BOTTOM *
       ***************************************************************/

      id = chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) + 2] + (parentDivIdNumber + 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }

      /***************************************************************
       * MOVE WHITE KNIGHT TOP LEFT / MOVE BLACK KNIGHT BOTTOM RIGHT *
       ***************************************************************/

      id = chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) - 1] + (parentDivIdNumber + 2).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }


      /***************************************************************
       * MOVE WHITE KNIGHT LEFT TOP / MOVE BLACK KNIGHT RIGHT BOTTOM *
       ***************************************************************/

      id = chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) - 2] + (parentDivIdNumber + 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }

      /***************************************************************
       * MOVE WHITE KNIGHT LEFT BOTTOM / MOVE BLACK KNIGHT RIGHT TOP *
       ***************************************************************/

      id = chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) - 2] + (parentDivIdNumber - 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }

      /***************************************************************
       * MOVE WHITE KNIGHT BOTTOM LEFT / MOVE BLACK KNIGHT TOP RIGHT *
       ***************************************************************/

      id = chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) - 1] + (parentDivIdNumber - 2).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }

      /***************************************************************
       * MOVE WHITE KNIGHT BOTTOM RIGHT / MOVE BLACK KNIGHT TOP LEFT *
       ***************************************************************/

      id = chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) + 1] + (parentDivIdNumber - 2).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }

      /***************************************************************
       * MOVE WHITE KNIGHT RIGHT BOTTOM / MOVE BLACK KNIGHT LEFT TOP *
       ***************************************************************/

      id = chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) + 2] + (parentDivIdNumber - 1).toString();

      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color)) {
          nextMovesIds.push(id);
        }
      }




    }



    for (let letter of chessboardLetters) {

      let nextMoveIdNumber = chessboardLetters.indexOf(letter) + 1

      if (nextMoveIdNumber < parentDivIdNumber) {
        numbersReversed.unshift(nextMoveIdNumber);

      } else if (nextMoveIdNumber > parentDivIdNumber) {

        /******************************************
         * MOVE TOP (WHITE) / MOVE BOTTOM (BLACK) *
         ******************************************/

        if (this.type == "queen" || this.type == "rook") {
          id = parentDivIdLetter + nextMoveIdNumber.toString();

          if (document.querySelector("#" + id) !== null) {

            if (document.querySelector("#" + id).innerHTML == "" && topNumberOwn == 0 && topNumberOther == 0) {
              nextMovesIds.push(id);
            } else if (document.querySelector("#" + id).querySelector("." + this.color)) {
              topNumberOwn = 1;

            } else if (!document.querySelector("#" + id).querySelector("." + this.color) && topNumberOther == 0 && topNumberOwn == 0) {
              nextMovesIds.push(id)
              topNumberOther = 1;
            }
          }
        }

      }

      if (chessboardLetters.indexOf(letter) < chessboardLetters.indexOf(parentDivIdLetter)) {
        lettersReversed.unshift(letter);

      } else if (chessboardLetters.indexOf(letter) > chessboardLetters.indexOf(parentDivIdLetter)) {

        /******************************************
         * MOVE RIGHT (WHITE) / MOVE LEFT (BLACK) *
         ******************************************/
        if (this.type == "queen" || this.type == "rook") {
          id = letter + parentDivIdNumber.toString();

          if (document.querySelector("#" + id) !== null) {

            if (document.querySelector("#" + id).innerHTML == "" && rightLetterOwn == 0 && rightLetterOther == 0) {
              nextMovesIds.push(id);
            } else if (document.querySelector("#" + id).querySelector("." + this.color)) {
              rightLetterOwn = 1;

            } else if (!document.querySelector("#" + id).querySelector("." + this.color) && rightLetterOwn == 0 && rightLetterOther == 0) {
              nextMovesIds.push(id)
              rightLetterOther = 1;
            }
          }
        }

        let diagonalNextMoveIdNumberMinus = bottomDiagonalNextMoveIdNumber--;
        let diagonalNextMoveIdNumberPlus = topDiagonalNextMoveIdNumber++;

        /*****************************************************
         * MOVE RIGHT BOTTOM (WHITE) / MOVE LEFT TOP (BLACK) *
         *****************************************************/

        if (this.type == "queen" || this.type == "bishop") {
          id = letter + diagonalNextMoveIdNumberMinus.toString();

          if (document.querySelector("#" + id) !== null) {

            if (document.querySelector("#" + id).innerHTML == "" && rightBottomLetterOwn == 0 && rightBottomLetterOther == 0) {
              nextMovesIds.push(id);
            } else if (document.querySelector("#" + id).querySelector("." + this.color)) {
              rightBottomLetterOwn = 1;

            } else if (!document.querySelector("#" + id).querySelector("." + this.color) && rightBottomLetterOwn == 0 && rightBottomLetterOther == 0) {
              nextMovesIds.push(id)
              rightBottomLetterOther = 1;
            }
          }



          /*****************************************************
           * MOVE RIGHT TOP (WHITE) / MOVE LEFT BOTTOM (BLACK) *
           *****************************************************/

          id = letter + diagonalNextMoveIdNumberPlus.toString();

          if (document.querySelector("#" + id) !== null) {

            if (document.querySelector("#" + id).innerHTML == "" && rightTopLetterOwn == 0 && rightTopLetterOther == 0) {
              nextMovesIds.push(id);
            } else if (document.querySelector("#" + id).querySelector("." + this.color)) {
              rightTopLetterOwn = 1;

            } else if (!document.querySelector("#" + id).querySelector("." + this.color) && rightTopLetterOwn == 0 && rightTopLetterOther == 0) {
              nextMovesIds.push(id)
              rightTopLetterOther = 1;
            }
          }
        }
      }
    }

    bottomDiagonalNextMoveIdNumber = parentDivIdNumber - 1;
    topDiagonalNextMoveIdNumber = parentDivIdNumber + 1;



    lettersReversed.forEach(letter => {

      if (lettersReversed.indexOf(letter) == (lettersReversed.length - 1)) {

        var lastIterationLetter = letter;

      }
      /******************************************
       * MOVE LEFT (WHITE) / MOVE RIGHT (BLACK) *
       ******************************************/

      if (this.type == "queen" || this.type == "rook") {

        id = letter + parentDivIdNumber.toString();

        if (document.querySelector("#" + id) !== null) {

          if (document.querySelector("#" + id).innerHTML == "" && leftLetterOwn == 0 && leftLetterOther == 0) {
            nextMovesIds.push(id);
          } else if (document.querySelector("#" + id).querySelector("." + this.color)) {
            leftLetterOwn = 1;

          } else if (!document.querySelector("#" + id).querySelector("." + this.color) && leftLetterOwn == 0 && leftLetterOther == 0) {
            nextMovesIds.push(id)
            leftLetterOther = 1;
          }
        }
      }


      let diagonalNextMoveIdNumberMinus = bottomDiagonalNextMoveIdNumber--;
      let diagonalNextMoveIdNumberPlus = topDiagonalNextMoveIdNumber++;

      /*****************************************************
       * MOVE LEFT BOTTOM (WHITE) / MOVE RIGHT TOP (BLACK) *
       *****************************************************/
      if (this.type == "queen" || this.type == "bishop") {
        id = letter + diagonalNextMoveIdNumberMinus.toString();

        if (document.querySelector("#" + id) !== null) {

          if (document.querySelector("#" + id).innerHTML == "" && leftBottomLetterOwn == 0 && leftBottomLetterOther == 0) {
            nextMovesIds.push(id);
          } else if (document.querySelector("#" + id).querySelector("." + this.color)) {
            leftBottomLetterOwn = 1;

          } else if (!document.querySelector("#" + id).querySelector("." + this.color) && leftBottomLetterOwn == 0 && leftBottomLetterOther == 0) {
            nextMovesIds.push(id)
            leftBottomLetterOther = 1;
          }
        }


        /*****************************************************
         * MOVE LEFT TOP (WHITE) / MOVE RIGHT BOTTOM (BLACK) *
         *****************************************************/

        id = letter + diagonalNextMoveIdNumberPlus.toString();

        if (document.querySelector("#" + id) !== null) {


          if (document.querySelector("#" + id).innerHTML == "" && leftTopLetterOwn == 0 && leftTopLetterOther == 0) {
            nextMovesIds.push(id);
            window["topLeft" + this.color].push(id);
            topLeftCheckDivs.push(id);

            if (document.querySelector("#" + id).id.includes(lastIterationLetter)) {

              window["topLeft" + this.color] = [];
              topLeftCheckDivs = [];
            }

          } else if (document.querySelector("#" + id).querySelector("." + this.color)) {
            leftTopLetterOwn = 1;
            window["topLeft" + this.color] = [];
            topLeftCheckDivs = [];

          } else if (!document.querySelector("#" + id).querySelector("." + this.color) && leftTopLetterOwn == 0 && leftTopLetterOther == 0) {
            nextMovesIds.push(id)
            leftTopLetterOther = 1;
            topLeftCheckDivs.push(id);

            if (document.querySelector("#" + id).querySelector(".black-king") || document.querySelector("#" + id).querySelector(".white-king")) {
              // window["topLeft" + this.color].push(id);
              window["topLeft" + this.color].push(parentDivId);
              topLeftCheckDivs = [];
            } else {
              window["topLeft" + this.color] = [];
            }

          } else if (document.querySelector("#" + id).innerHTML == "" && leftTopLetterOwn == 0 && leftTopLetterOther == 1) {
            if (document.querySelector("#" + id).id.includes(lastIterationLetter)) {
              topLeftCheckDivs = [];
            }

          } else if (!document.querySelector("#" + id).querySelector("." + this.color) && leftTopLetterOwn == 0 && leftTopLetterOther == 1) {

            leftTopLetterOther = 2;
            // topLeftCheckDivs.push(id);

            if (document.querySelector("#" + id).querySelector(".black-king") || document.querySelector("#" + id).querySelector(".white-king")) {
              // window["topLeft" + this.color].push(id);
              topLeftCheckDivs.push(id);
            } else {
              topLeftCheckDivs = [];
            }

          }

        } else if (document.querySelector("#" + id) == null && leftTopLetterOwn == 0 && leftTopLetterOther == 0) {
          let idnn = lettersReversed[lettersReversed.indexOf(letter) - 1] + (diagonalNextMoveIdNumberPlus.toString() - 1);
          if (document.querySelector("#" + idnn) !== null && document.querySelector("#" + idnn).innerHTML == "") {
            window["topLeft" + this.color] = [];
            topLeftCheckDivs = [];
          }
        }


      }

    })


    if (window["topLeft" + this.color].length > 0) {
      Array.prototype.push.apply(checkIds, window["topLeft" + this.color]);
    }

    if (topLeftCheckDivs.length > 0) {
      Array.prototype.push.apply(moveOut, topLeftCheckDivs);
    }


    numbersReversed.forEach(number => {

      /******************************************
       * MOVE BOTTOM (WHITE) / MOVE TOP (BLACK) *
       ******************************************/


      if (this.type == "queen" || this.type == "rook") {
        id = parentDivIdLetter + number;

        if (document.querySelector("#" + id) !== null) {

          if (document.querySelector("#" + id).innerHTML == "" && bottomNumberOwn == 0 && bottomNumberOther == 0) {
            nextMovesIds.push(id);

          } else if (document.querySelector("#" + id).querySelector("." + this.color)) {
            bottomNumberOwn = 1;

          } else if (!document.querySelector("#" + id).querySelector("." + this.color) && bottomNumberOwn == 0 && bottomNumberOther == 0) {
            nextMovesIds.push(id)
            bottomNumberOther = 1;

          }
        }

      }
    })




    if (checkIds.length > 0) {
      checkIds.forEach(checkId => {
        document.querySelector("#" + checkId).classList.add("check" + this.color);
      })
    }

    if (moveOut.length > 0) {
      moveOut.forEach(moveout => {
        document.querySelector("#" + moveout).classList.add("moveout" + this.color);
      })
    }

    nextMovesIds.forEach(move => {


      if (!document.querySelector(".checkwhite") && !document.querySelector(".checkblack") && !piece.parentElement.classList.contains("moveoutwhite")) {
        var nextMoveDiv = document.querySelector("#" + move);
      }

      else if (document.querySelector("#" + move).classList.contains("checkwhite")) {
        console.log("hello")
        var nextMoveDiv = document.querySelector("#" + move);
      }

      if (nextMoveDiv !== undefined) {
        let moveButton = document.createElement("div");
        moveButton.classList.add("next-move");
        nextMoveDiv.appendChild(moveButton);
      }

    })

  }


}