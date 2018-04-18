var minimax = {

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
        } else {
            return 0;
        }
    },

    win: function(board, player) {
        var searching;
        
        if (player == 1) {
            searching = 1;
        } else {
            searching = -1;
        }

        var i = 0;
        for (i = 0; i < board.length; i++) {
            if (board[i].indexOf(-1 * searching) == -1 && board[i].indexOf(0) == -1) return true; // Row win

            column = [
                board[0][i], 
                board[1][i], 
                board[2][i]
            ];

            if (column.indexOf(-1 * searching) == -1 && column.indexOf(0) == -1) return true; // Column win
        }

        // Diagonal win
        var diagonal = [
            board[0][0], 
            board[1][1], 
            board[2][2]
        ];

        if (diagonal.indexOf(-1 * searching) == -1 && diagonal.indexOf(0) == -1) return true;

        diagonal = [
            board[0][2], 
            board[1][1], 
            board[2][0]
        ];
        
        if (diagonal.indexOf(-1 * searching) == -1 && diagonal.indexOf(0) == -1) return true;

        return false;
    },

    gameOver: function (board) {
        return this.win(board, 1) || this.win(board, -1);
    },

    getAvailableMoves: function (board, player) {
        
        possibleMoves = [];

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    possibleMoves.push({row: i, column: j})
                }
            }
        }

        return possibleMoves;
    },

    getNewState: function (board, move, player) {
        newState = board.slice(0); // clone array
        newState[move.row][move.column] = player;
        return newState;
    },

    makeMove: function (board, player, playerDefault, depth){
        
        if (this.gameOver(board)) return this.score(board);
        
        var scores = [],
            moves = [];

        possibleMoves = this.getAvailableMoves(board, player);
        possibleMoves.forEach (
            (possibleMove) => {
                possibleGame = this.getNewState(board, possibleMove, player);
                scores.push(this.makeMove(possibleGame, -1 * player, player, depth++) - depth);
                moves.push(possibleMove);
            }
        );

        var number;
        if (playerDefault == 1) {
            // min
            number = Math.min.apply(null, scores);
        } else {
            // max
            number = Math.max.apply(null, scores);
        }

        var index = scores.indexOf(number);
        //console.log(index);
        //console.log(moves);
        //console.log(scores);

        if (moves[index] != undefined) {
            //console.log(moves[index]);
            this.lastMove = moves[index];
        }

        return number;
    }
}

export default minimax;