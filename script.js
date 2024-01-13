const chessboard = document.querySelector(".chessboard");



for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        for (let i = 0; i < 8; i++) {
            if (i % 2 == 0) {
                let square = document.createElement('div');
                square.style.backgroundColor = "red";
                chessboard.appendChild(square);

            } else {
                let square = document.createElement('div');
                square.style.backgroundColor = "blue";
                chessboard.appendChild(square);
            }
        }
    } else {
        for (let i = 0; i < 8; i++) {
            if (i % 2 > 0) {
                let square = document.createElement('div');
                square.style.backgroundColor = "red";
                chessboard.appendChild(square);

            } else {
                let square = document.createElement('div');
                square.style.backgroundColor = "blue";
                chessboard.appendChild(square);
            }
        }

    }
}