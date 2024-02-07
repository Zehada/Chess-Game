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

    let topCheckIds = [];
    let topMoveOut = [];

    let rightCheckIds = [];
    let rightMoveOut = [];

    let bottomRightCheckIds = [];
    let bottomRightMoveOut = [];

    let topRightCheckIds = [];
    let topRightMoveOut = [];

    let leftCheckIds = [];
    let leftMoveOut = [];

    let topLeftCheckIds = [];
    let topLeftMoveOut = [];

    let bottomLeftCheckIds = [];
    let bottomLeftMoveOut = [];

    let bottomCheckIds = [];
    let bottomMoveOut = [];

    let indexOfParentDivIdLetter = chessboardLetters.indexOf(parentDivIdLetter);

    let bottomDiagonalNextMoveIdNumber = parentDivIdNumber - 1;
    let topDiagonalNextMoveIdNumber = parentDivIdNumber + 1;
    let lettersReversed = [];
    let numbersReversed = [];


    let top = {
      own: 0,
      other: 0
    }

    let right = {
      own: 0,
      other: 0
    }

    let bottomRight = {
      own: 0,
      other: 0
    }

    let topRight = {
      own: 0,
      other: 0
    }

    let left = {
      own: 0,
      other: 0
    }


    let topLeft = {
      own: 0,
      other: 0
    }

    let bottomLeft = {
      own: 0,
      other: 0
    }

    let bottom = {
      own: 0,
      other: 0
    }

    let id;
    let idnn;
    let firstSquare;

    let idList = [];


    /********
     * KING *
     ********/

    if (this.type == "king") {
      idList.push(parentDivIdLetter + (parentDivIdNumber + 1));
      idList.push(parentDivIdLetter + (parentDivIdNumber - 1));
      idList.push(chessboardLetters[indexOfParentDivIdLetter - 1] + parentDivIdNumber);
      idList.push(chessboardLetters[indexOfParentDivIdLetter + 1] + parentDivIdNumber);
      idList.push(chessboardLetters[indexOfParentDivIdLetter + 1] + (parentDivIdNumber + 1));
      idList.push(chessboardLetters[indexOfParentDivIdLetter - 1] + (parentDivIdNumber + 1));
      idList.push(chessboardLetters[indexOfParentDivIdLetter + 1] + (parentDivIdNumber - 1));
      idList.push(chessboardLetters[indexOfParentDivIdLetter - 1] + (parentDivIdNumber - 1));

      idList.forEach(id => {
        if (document.querySelector("#" + id) !== null) {
          if (!document.querySelector("#" + id).querySelector("." + this.color)) {
            if (this.color == "black" && !document.querySelector("#" + id).classList.contains("whitemove")) {
              nextMovesIds.push(id);
            } else if (this.color == "white" && !document.querySelector("#" + id).classList.contains("blackmove")) {
              nextMovesIds.push(id);
            }
          }
        }

      })
    }



    /**************
     * WHITE PAWN *
     **************/

    // move one square
    if (this.type == "pawn" && this.color == "white") {
      id = parentDivIdLetter + (parentDivIdNumber + 1);

      if (document.querySelector("#" + id) !== null) {

        if (!document.querySelector("#" + id).querySelector("." + this.color) && !document.querySelector("#" + id).querySelector(".black")) {
          nextMovesIds.push(id);
          document.querySelector("#" + id).classList.add("nowhitemove");
        }
      }

    }

    // Move two squares
    if (this.type == "pawn" && this.color == "white" && !piece.classList.contains("moved")) {
      firstSquare = parentDivIdLetter + (parentDivIdNumber + 1);
      id = parentDivIdLetter + (parentDivIdNumber + 2);
      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color) && !document.querySelector("#" + id).querySelector(".black") && !document.querySelector("#" + firstSquare).querySelector("." + this.color) && !document.querySelector("#" + firstSquare).querySelector(".black")) {
          nextMovesIds.push(id);
          document.querySelector("#" + id).classList.add("nowhitemove");

        }
      }
    }

    // Move top right
    if (this.type == "pawn" && this.color == "white") {
      id = chessboardLetters[indexOfParentDivIdLetter + 1] + (parentDivIdNumber + 1);
      let RightSquare = chessboardLetters[indexOfParentDivIdLetter + 1] + parentDivIdNumber;


      if (document.querySelector("#" + id) !== null) {
        document.querySelector("#" + id).classList.add("whitemove"); // It won't add "whitemove" other way because there won't be a "next-move" div if square is empty
        if (document.querySelector("#" + id).querySelector(".black") || (document.querySelector("#" + RightSquare).querySelector(".black.pep"))) {
          nextMovesIds.push(id);

          if (document.querySelector("#" + id).querySelector(".black-king")) {
            document.querySelector("#" + parentDivId).classList.add("whitecheck");
          }
        }
      }
    }

    // Move top left
    if (this.type == "pawn" && this.color == "white") {
      id = chessboardLetters[indexOfParentDivIdLetter - 1] + (parentDivIdNumber + 1);
      let leftSquare = chessboardLetters[indexOfParentDivIdLetter - 1] + parentDivIdNumber;


      if (document.querySelector("#" + id) !== null) {
        document.querySelector("#" + id).classList.add("whitemove");
        if (document.querySelector("#" + id).querySelector(".black") || (document.querySelector("#" + leftSquare).querySelector(".black.pep"))) {
          nextMovesIds.push(id);

          if (document.querySelector("#" + id).querySelector(".black-king")) {
            document.querySelector("#" + parentDivId).classList.add("whitecheck");
          }
        }
      }
    }


    /**************
     * BLACK PAWN *
     **************/

    // move one square
    if (this.type == "pawn" && this.color == "black") {
      id = parentDivIdLetter + (parentDivIdNumber - 1);

      if (document.querySelector("#" + id) !== null) {

        if (!document.querySelector("#" + id).querySelector("." + this.color) && !document.querySelector("#" + id).querySelector(".white")) {
          nextMovesIds.push(id);
          document.querySelector("#" + id).classList.add("noblackmove");
        }
      }

    }

    // Move two squares
    if (this.type == "pawn" && this.color == "black" && !piece.classList.contains("moved")) {
      firstSquare = parentDivIdLetter + (parentDivIdNumber - 1);
      id = parentDivIdLetter + (parentDivIdNumber - 2);
      if (document.querySelector("#" + id) !== null) {
        if (!document.querySelector("#" + id).querySelector("." + this.color) && !document.querySelector("#" + id).querySelector(".white") && !document.querySelector("#" + firstSquare).querySelector("." + this.color) && !document.querySelector("#" + firstSquare).querySelector(".white")) {
          nextMovesIds.push(id);
          document.querySelector("#" + id).classList.add("noblackmove");

        }
      }
    }

    // Move top right
    if (this.type == "pawn" && this.color == "black") {
      id = chessboardLetters[indexOfParentDivIdLetter - 1] + (parentDivIdNumber - 1);
      let RightSquare = chessboardLetters[indexOfParentDivIdLetter - 1] + parentDivIdNumber;


      if (document.querySelector("#" + id) !== null) {
        document.querySelector("#" + id).classList.add("blackmove");
        if (document.querySelector("#" + id).querySelector(".white") || (document.querySelector("#" + RightSquare).querySelector(".white.pep"))) {
          nextMovesIds.push(id);

          if (document.querySelector("#" + id).querySelector(".white-king")) {
            document.querySelector("#" + parentDivId).classList.add("blackcheck");
          }
        }
      }
    }

    // Move top left
    if (this.type == "pawn" && this.color == "black") {
      id = chessboardLetters[indexOfParentDivIdLetter + 1] + (parentDivIdNumber - 1);
      let leftSquare = chessboardLetters[indexOfParentDivIdLetter + 1] + parentDivIdNumber;

      if (document.querySelector("#" + id) !== null) {
        document.querySelector("#" + id).classList.add("blackmove");
        if (document.querySelector("#" + id).querySelector(".white") || (document.querySelector("#" + leftSquare).querySelector(".white.pep"))) {
          nextMovesIds.push(id);

          if (document.querySelector("#" + id).querySelector(".white-king")) {
            document.querySelector("#" + parentDivId).classList.add("blackcheck");
          }
        }
      }
    }

    /**********
     * KNIGHT *
     **********/
    if (this.type == "knight") {
      idList.push(chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) + 2] + (parentDivIdNumber + 1));
      idList.push(chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) - 1] + (parentDivIdNumber + 2));
      idList.push(chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) - 2] + (parentDivIdNumber + 1));
      idList.push(chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) - 2] + (parentDivIdNumber - 1));
      idList.push(chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) - 1] + (parentDivIdNumber - 2));
      idList.push(chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) + 1] + (parentDivIdNumber - 2));
      idList.push(chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) + 2] + (parentDivIdNumber - 1));
      idList.push(chessboardLetters[chessboardLetters.indexOf(parentDivIdLetter) + 1] + (parentDivIdNumber + 2));

      idList.forEach(id => {
        if (document.querySelector("#" + id) !== null) {
          if (!document.querySelector("#" + id).querySelector("." + this.color)) {
            nextMovesIds.push(id);

            if (this.color == "white" && document.querySelector("#" + id).querySelector(".black-king")) {
              document.querySelector("#" + parentDivId).classList.add("whitecheck");
            } else if (this.color == "black" && document.querySelector("#" + id).querySelector(".white-king")) {
              document.querySelector("#" + parentDivId).classList.add("blackcheck");
            }
          }
        }
      });
    }



    function pieceMoves(id, idnn, color, lastIteration, elements, positionCheckIds, positionMoveOut) {
      // idnn = id non null

      if (document.querySelector("#" + id) !== null) {


        if (document.querySelector("#" + id).innerHTML == "" && elements.own == 0 && elements.other == 0) {
          nextMovesIds.push(id);
          positionCheckIds.push(id);
          positionMoveOut.push(id);

          if (document.querySelector("#" + id).id.includes(lastIteration)) {

            positionCheckIds.length = 0;
            positionMoveOut.length = 0;
          }

        } else if (document.querySelector("#" + id).querySelector("." + color)) {
          elements.own = 1;
          positionCheckIds.length = 0;
          positionMoveOut.length = 0;

        } else if (!document.querySelector("#" + id).querySelector("." + color) && elements.own == 0 && elements.other == 0) {
          nextMovesIds.push(id)
          elements.other = 1;
          positionMoveOut.push(id);

          if (document.querySelector("#" + id).id.includes(lastIteration)) {
            positionMoveOut.length = 0;
          }


          if (document.querySelector("#" + id).querySelector(".black-king") || document.querySelector("#" + id).querySelector(".white-king")) {

            positionCheckIds.push(parentDivId);
            positionMoveOut.length = 0;
          } else {
            positionCheckIds.length = 0;
          }

        } else if (document.querySelector("#" + id).innerHTML == "" && elements.own == 0 && elements.other == 1) {
          if (document.querySelector("#" + id).id.includes(lastIteration)) {
            positionMoveOut.length = 0;
          } else {
            positionMoveOut.push(id);
          }

        } else if (!document.querySelector("#" + id).querySelector("." + color) && elements.own == 0 && elements.other == 1) {

          elements.other = 2;

          if (document.querySelector("#" + id).querySelector(".black-king") || document.querySelector("#" + id).querySelector(".white-king")) {
            // positionMoveOut.push(id);
            positionMoveOut.push(parentDivId);
          } else {
            positionMoveOut.length = 0;
          }

        }



      } else if (document.querySelector("#" + id) == null && elements.own == 0 && elements.other == 0) {
        if (document.querySelector("#" + idnn) !== null && document.querySelector("#" + idnn).innerHTML == "") {
          positionCheckIds.length = 0;
          positionMoveOut.length = 0;
        } else if (document.querySelector("#" + idnn) !== null && !document.querySelector("#" + idnn).querySelector("." + color)) {
          positionMoveOut.length = 0;
        }
      }
    }

    for (let letter of chessboardLetters) {

      if (chessboardLetters.indexOf(letter) == (chessboardLetters.length - 1)) {
        var lastIterationLetterOne = letter;
        var lastIterationNumberOne = chessboardLetters.indexOf(letter);
      }

      let nextMoveIdNumber = chessboardLetters.indexOf(letter) + 1

      if (nextMoveIdNumber < parentDivIdNumber) {
        numbersReversed.unshift(nextMoveIdNumber);

      } else if (nextMoveIdNumber > parentDivIdNumber) {

        if (this.type == "queen" || this.type == "rook") {

          // Move top
          id = parentDivIdLetter + nextMoveIdNumber;
          idnn = parentDivIdLetter + (nextMoveIdNumber - 1);

          pieceMoves(id, idnn, this.color, lastIterationNumberOne, top, topCheckIds, topMoveOut);

        }

      }

      if (chessboardLetters.indexOf(letter) < chessboardLetters.indexOf(parentDivIdLetter)) {
        lettersReversed.unshift(letter);

      } else if (chessboardLetters.indexOf(letter) > chessboardLetters.indexOf(parentDivIdLetter)) {


        if (this.type == "queen" || this.type == "rook") {

          // Move right
          id = letter + parentDivIdNumber;
          idnn = chessboardLetters[chessboardLetters.indexOf(letter) - 1] + parentDivIdNumber;

          pieceMoves(id, idnn, this.color, lastIterationLetterOne, right, rightCheckIds, rightMoveOut);

        }

        let diagonalNextMoveIdNumberMinus = bottomDiagonalNextMoveIdNumber--;
        let diagonalNextMoveIdNumberPlus = topDiagonalNextMoveIdNumber++;


        if (this.type == "queen" || this.type == "bishop") {

          // Move bottom right
          id = letter + diagonalNextMoveIdNumberMinus;
          idnn = chessboardLetters[chessboardLetters.indexOf(letter) - 1] + (diagonalNextMoveIdNumberPlus + 1);

          pieceMoves(id, idnn, this.color, lastIterationLetterOne, bottomRight, bottomRightCheckIds, bottomRightMoveOut);


          // Move top right
          id = letter + diagonalNextMoveIdNumberPlus;
          idnn = chessboardLetters[chessboardLetters.indexOf(letter) - 1] + (diagonalNextMoveIdNumberPlus - 1);

          pieceMoves(id, idnn, this.color, lastIterationLetterOne, topRight, topRightCheckIds, topRightMoveOut);

        }
      }
    }

    if (topCheckIds.length > 0) {
      Array.prototype.push.apply(checkIds, topCheckIds);
    }
    if (topMoveOut.length > 0) {
      Array.prototype.push.apply(moveOut, topMoveOut);
    }


    if (rightCheckIds.length > 0) {
      Array.prototype.push.apply(checkIds, rightCheckIds);
    }
    if (rightMoveOut.length > 0) {
      Array.prototype.push.apply(moveOut, rightMoveOut);
    }

    if (bottomRightCheckIds.length > 0) {
      Array.prototype.push.apply(checkIds, bottomRightCheckIds);
    }
    if (bottomRightMoveOut.length > 0) {
      Array.prototype.push.apply(moveOut, bottomRightMoveOut);
    }

    if (topRightCheckIds.length > 0) {
      Array.prototype.push.apply(checkIds, topRightCheckIds);
    }
    if (topRightMoveOut.length > 0) {
      Array.prototype.push.apply(moveOut, topRightMoveOut);
    }



    bottomDiagonalNextMoveIdNumber = parentDivIdNumber - 1;
    topDiagonalNextMoveIdNumber = parentDivIdNumber + 1;



    lettersReversed.forEach(letter => {

      if (lettersReversed.indexOf(letter) == (lettersReversed.length - 1)) {
        var lastIterationLetter = letter;
      }


      if (this.type == "queen" || this.type == "rook") {

        // Move left
        id = id = letter + parentDivIdNumber;
        idnn = lettersReversed[lettersReversed.indexOf(letter) - 1] + parentDivIdNumber;

        pieceMoves(id, idnn, this.color, lastIterationLetter, left, leftCheckIds, leftMoveOut);

      }


      let diagonalNextMoveIdNumberMinus = bottomDiagonalNextMoveIdNumber--;
      let diagonalNextMoveIdNumberPlus = topDiagonalNextMoveIdNumber++;


      if (this.type == "queen" || this.type == "bishop") {
        // Move bottom left
        id = letter + diagonalNextMoveIdNumberMinus;
        idnn = lettersReversed[lettersReversed.indexOf(letter) - 1] + (diagonalNextMoveIdNumberMinus + 1);

        pieceMoves(id, idnn, this.color, lastIterationLetter, bottomLeft, bottomLeftCheckIds, bottomLeftMoveOut);

        // Move top left
        id = letter + diagonalNextMoveIdNumberPlus;
        idnn = lettersReversed[lettersReversed.indexOf(letter) - 1] + (diagonalNextMoveIdNumberPlus - 1);

        pieceMoves(id, idnn, this.color, lastIterationLetter, topLeft, topLeftCheckIds, topLeftMoveOut);

      }

    })


    if (leftCheckIds.length > 0) {
      Array.prototype.push.apply(checkIds, leftCheckIds);
    }
    if (leftMoveOut.length > 0) {
      Array.prototype.push.apply(moveOut, leftMoveOut);
    }


    if (bottomLeftCheckIds.length > 0) {
      Array.prototype.push.apply(checkIds, bottomLeftCheckIds);
    }
    if (bottomLeftMoveOut.length > 0) {
      Array.prototype.push.apply(moveOut, bottomLeftMoveOut);
    }


    if (topLeftCheckIds.length > 0) {
      Array.prototype.push.apply(checkIds, topLeftCheckIds);
    }
    if (topLeftMoveOut.length > 0) {
      Array.prototype.push.apply(moveOut, topLeftMoveOut);
    }


    numbersReversed.forEach(number => {

      if (numbersReversed.indexOf(number) == (numbersReversed.length - 1)) {
        var lastIterationNumber = number;
      }

      if (this.type == "queen" || this.type == "rook") {

        // Move bottom
        id = parentDivIdLetter + number;
        idnn = parentDivIdLetter + (numbersReversed[numbersReversed.indexOf(number) - 1]);

        pieceMoves(id, idnn, this.color, lastIterationNumber, bottom, bottomCheckIds, bottomMoveOut);

      }

    })

    if (bottomCheckIds.length > 0) {
      Array.prototype.push.apply(checkIds, bottomCheckIds);
    }

    if (bottomMoveOut.length > 0) {
      Array.prototype.push.apply(moveOut, bottomMoveOut);
    }



    if (checkIds.length > 0) {
      checkIds.forEach(checkId => {
        document.querySelector("#" + checkId).classList.add(this.color + "check");
      })
    }

    if (moveOut.length > 0) {
      moveOut.forEach(moveout => {
        document.querySelector("#" + moveout).classList.add("moveout" + this.color);
      })
    }

    nextMovesIds.forEach(move => {


      if (this.color == "white") {
        if (document.querySelector(".blackcheck") && document.querySelector("#" + move).classList.contains("blackcheck") && !piece.parentElement.classList.contains("moveoutblack")) {
          var nextMoveDiv = document.querySelector("#" + move);
        } else if (!document.querySelector(".blackcheck") && !piece.parentElement.classList.contains("moveoutblack")) {

          var nextMoveDiv = document.querySelector("#" + move);
        } else if (piece.parentElement.classList.contains("moveoutblack") && document.querySelector("#" + move).classList.contains("moveoutblack")) {
          var nextMoveDiv = document.querySelector("#" + move);
        }


        if (this.type == "king") {
          var nextMoveDiv = document.querySelector("#" + move);
        }
      } else if (this.color == "black") {
        if (document.querySelector(".whitecheck") && document.querySelector("#" + move).classList.contains("whitecheck") && !piece.parentElement.classList.contains("moveoutwhite")) {
          var nextMoveDiv = document.querySelector("#" + move);
        } else if (!document.querySelector(".whitecheck") && !piece.parentElement.classList.contains("moveoutwhite")) {

          var nextMoveDiv = document.querySelector("#" + move);
        } else if (piece.parentElement.classList.contains("moveoutwhite") && document.querySelector("#" + move).classList.contains("moveoutwhite")) {
          var nextMoveDiv = document.querySelector("#" + move);
        }

        if (this.type == "king") {
          var nextMoveDiv = document.querySelector("#" + move);
        }

      }


      if (nextMoveDiv !== undefined) {

        if ((round % 2 == 1 && this.color == "white") || (round % 2 == 0 && this.color == "black")) {
          let moveButton = document.createElement("div");
          moveButton.classList.add("next-move");
          nextMoveDiv.appendChild(moveButton);
        } else if (round % 2 == 1 && this.color == "black") {
          nextMoveDiv.classList.add("blackmove");

        } else if (round % 2 == 0 && this.color == "white") {
          nextMoveDiv.classList.add("whitemove");

        }

      }

    })

  }


}