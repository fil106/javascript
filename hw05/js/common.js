function main() {
    document.querySelector('#start').classList.add('display_none');
    document.querySelector('#ches').appendChild(drawTable('chess_table', 9));
}

function drawTable(cls, x) {
    var abs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    var table = document.createElement('table');
    table.classList.add(cls);
    table.setAttribute('cellspacing', '0');

    for(var i = 0; i < x; i++) {
        var row = table.insertRow(i);
        if(i === x - 1) {
            row.classList.add('chess_table_x');
        }

        for(var j = 0; j < x; j++) {
            var cell = row.insertCell(j);

            if(j === 0) {
                if(i === x - 1) {
                    cell.textContent = '';
                } else {
                    cell.textContent = (x - 1) - i;
                }
            } else if(i === x - 1) {
                cell.textContent = abs[j - 1];
            }
        }
    }
    return table;
}