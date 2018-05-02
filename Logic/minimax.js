const Minimax = {

    CONSTANTS: {
        POINTS: {
            WINNER: 10,
            LOSER: -10
        }
    },

    lastMove: null,

    score: function (board) {
        if (this.win(board, 1)) {
            return this.CONSTANTS.POINTS.LOSER;
        } else if (this.win(board, -1)) {
            return this.CONSTANTS.POINTS.WINNER;
        }
        
        return 0;
    },

    win: function (board, player) {

        var i = 0;
        for (i = 0; i < board.length; i++) {
            if (board[i].indexOf(-1 * player) === -1 && board[i].indexOf(0) === -1) return true; // Row win

            const column = [
                board[0][i], 
                board[1][i], 
                board[2][i]
            ];

            if (column.indexOf(-1 * player) === -1 && column.indexOf(0) === -1) return true; // Column win
        }

        // Diagonal win
        let diagonal = [
            board[0][0], 
            board[1][1], 
            board[2][2]
        ];

        if (diagonal.indexOf(-1 * player) === -1 && diagonal.indexOf(0) === -1) return true;

        diagonal = [
            board[0][2], 
            board[1][1], 
            board[2][0]
        ];
        
        if (diagonal.indexOf(-1 * player) === -1 && diagonal.indexOf(0) === -1) return true;

        return false;
    },

    areMovesAvailable: function (board) {
        return board[0].indexOf(0) !== -1 || board[1].indexOf(0) !== -1 || board[2].indexOf(0) !== -1;
    },

    gameOver: function (board) {
        return this.win(board, 1) || this.win(board, -1) || !this.areMovesAvailable(board);
    },

    getAvailableMoves: function (board, player) {
        
        possibleMoves = [];

        board.forEach (
            (row, rowIndex) => {
                row.forEach (
                    (cell, index) => {
                        if (cell === 0) {
                            possibleMoves.push({ row: rowIndex, column: index })
                        }
                    }
                );
            }
        );

        return possibleMoves;
    },

    getNewState: function (board, move, player) {
        newState = [...board]; // clone array
        newState[move.row][move.column] = player;
        return newState;
    },

    makeMove: function (board, player, playerDefault, depth) {
        
        if (this.gameOver(board)) return this.score(board);
        
        var scores = [];
        var moves = [];

        possibleMoves = this.getAvailableMoves(board, player);
        possibleMoves.forEach (
            (possibleMove) => {
                possibleGame = this.getNewState(board, possibleMove, player);
                scores.push(this.makeMove(possibleGame, -1 * player, player, depth++) - (2 * depth));
                moves.push(possibleMove);
            }
        );

        var number;
        if (playerDefault === 1) {
            // min
            number = Math.min.apply(null, scores);
        } else {
            // max
            number = Math.max.apply(null, scores);
        }

        const index = scores.indexOf(number);
        this.lastMove = moves[index];

        return number;
    }
}

export default Minimax;
