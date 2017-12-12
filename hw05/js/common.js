//Global values
var abs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
var table = document.createElement('table');

function main() {
    var chess = drawTable('chess_table', 8);

    chess.classList.add('animated', 'bounceInDown');
    document.querySelector('#chess').appendChild(chess);
}

function drawTable(cls, x) {
    table.classList.add(cls);
    table.setAttribute('cellspacing', '0');
    table.id = 'chess_table';

    for(var i = 0; i <= x; i++) {
        var row = table.insertRow(i);
        row.setAttribute('row', x - i);

        if(i === x) {
            row.classList.add('chess_table_x');
        }

        for(var j = 0; j <= x; j++) {
            var cell = row.insertCell(j);

            if(j === 0) {
                if(i === x) {
                    cell.textContent = '';
                } else {
                    cell.textContent = x - i;
                }
            } else if(i === x) {
                cell.textContent = abs[j - 1];
            } else {
                cell.setAttribute('position', abs[j - 1] + (x - i));
            }
        }
    }

    //Добавляем белые фигуры на доску;
    //Функция добавления пешек, с возможностью указания строки,
    //количество пешек заполняется в соответствии с 2-м параметром
    insertPawns('2', 8, 'white');
    insertRook(['a1','h1'], 'white');
    insertHorse(['b1','g1'], 'white');
    insertElephant(['c1','f1'], 'white');
    insertQueen(['d1'], 'white');
    insertKing(['e1'], 'white');

    //Добавляем черные фигуры на доску
    insertPawns('7', 8, 'black');
    insertRook(['a8','h8'], 'black');
    insertHorse(['b8','g8'], 'black');
    insertElephant(['c8','f8'], 'black');
    insertQueen(['e8'], 'black');
    insertKing(['d8'], 'black');

    return table;
}

function insertPawns(row, x, type) {
    var chess = document.createElement('div');

    if(type === 'white') {
        chess.classList.add('figure', 'pawn_white');
    } else if(type === 'black') {
        chess.classList.add('figure', 'pawn_black');
    }

    for(var k = 0; k < x; k++) {
        table.querySelector('td[position="' + abs[k] + row + '"]').appendChild(chess.cloneNode(true));
    }
}

function insertRook(row, type) {
    var chess = document.createElement('div');

    if(type === 'white') {
        chess.classList.add('figure', 'rook_white');
    } else if(type === 'black') {
        chess.classList.add('figure', 'rook_black');
    }

    for(var i in row) {
        table.querySelector('td[position="' + row[i] + '"]').appendChild(chess.cloneNode(true));
    }
}

function insertHorse(row, type) {
    var chess = document.createElement('div');

    if(type === 'white') {
        chess.classList.add('figure', 'horse_white');
    } else if(type === 'black') {
        chess.classList.add('figure', 'horse_black');
    }

    for(var i in row) {
        table.querySelector('td[position="' + row[i] + '"]').appendChild(chess.cloneNode(true));
    }
}

function insertElephant(row, type) {
    var chess = document.createElement('div');

    if(type === 'white') {
        chess.classList.add('figure', 'elephant_white');
    } else if(type === 'black') {
        chess.classList.add('figure', 'elephant_black');
    }

    for(var i in row) {
        table.querySelector('td[position="' + row[i] + '"]').appendChild(chess.cloneNode(true));
    }
}

function insertQueen(row, type) {
    var chess = document.createElement('div');

    if(type === 'white') {
        chess.classList.add('figure', 'queen_white');
    } else if(type === 'black') {
        chess.classList.add('figure', 'queen_black');
    }

    for(var i in row) {
        table.querySelector('td[position="' + row[i] + '"]').appendChild(chess.cloneNode(true));
    }
}

function insertKing(row, type) {
    var chess = document.createElement('div');

    if(type === 'white') {
        chess.classList.add('figure', 'king_white');
    } else if(type === 'black') {
        chess.classList.add('figure', 'king_black');
    }

    for(var i in row) {
        table.querySelector('td[position="' + row[i] + '"]').appendChild(chess.cloneNode(true));
    }
}

window.onload = main;