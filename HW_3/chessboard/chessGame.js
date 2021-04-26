/*1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.*/
function chessboard() {
    var chessTable = document.createElement("table"),
        lets = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigures1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],
        whiteFigures1 = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1' ],
        blackFigures2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
        whiteFigures2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];
    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        var tr = chessTable.insertRow(i);
        for (var j = 0; j < 10; j++) {
            var td = tr.insertCell(j);
            switch (i) {
                case 0: td.innerText = lets[j];
                    break;
                case 1: td.innerHTML = blackFigures1[j];
                    break;
                case 2: td.innerHTML = blackFigures2[j];
                    break;
                case 7: td.innerHTML = whiteFigures2[j];
                    break;
                case 8: td.innerHTML = whiteFigures1[j];
                    break;
                case 9: td.innerText = lets[j];
                    break;
                default:
                    if (j === 0 || j === 9) {
                        td.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.appendChild(chessTable);
}
chessboard();