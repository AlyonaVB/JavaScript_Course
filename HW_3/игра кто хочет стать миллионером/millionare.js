var askQuestion;
var correctAnswer = 0;
var money = 0;
var ok = false;

function start() {
    for (var i = 0; i < questions.length; i++) {
        do {
            askQuestion = +prompt(questions[i].q00 + "\n" + questions[i].a01 + "\n" + questions[i].a02 + "\n" + questions[i].a03 + "\n" + questions[i].a04 + "\n" + '-1 - Exit');
            if (askQuestion == -1) {
                break;
            } else {
                ok = isAnswer(askQuestion);
            }
        } while (!ok);
        if (askQuestion == questions[i].correctAns) {
            correctAnswer++;
            if (i < 3) {
                money += 500 + "рублей";
            }
            else if ( i >= 4 && i <= 5) {
                money += 1000 + "рублей";
            }
            else {
                break;
            }
        }
    }
   
    alert("Количество верных ответов: " + correctAnswer + "\n Заработная сумма: " + money);
    alert("Игра закончена. Спасибо!");

    start();
}
start();
//------------------------------------------
function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
    
}