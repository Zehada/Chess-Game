const chessboard = document.querySelector(".chessboard");

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

let number = 8;


for (let i = 0; i < 8; i++) {

    if (i % 2 == 0) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) {
                let square = document.createElement('div');
                square.classList.add(letters[j] + (number));
                square.style.backgroundColor = "white";
                chessboard.appendChild(square);

            } else {
                let square = document.createElement('div');
                square.classList.add(letters[j] + (number));
                square.style.backgroundColor = "brown";
                chessboard.appendChild(square);
            }
        }
    } else {
        for (let j = 0; j < 8; j++) {
            if (j % 2 > 0) {
                let square = document.createElement('div');
                square.classList.add(letters[j] + (number));
                square.style.backgroundColor = "white";
                chessboard.appendChild(square);

            } else {
                let square = document.createElement('div');
                square.classList.add(letters[j] + (number));
                square.style.backgroundColor = "brown";
                chessboard.appendChild(square);
            }
        }

    }

    number--;

}