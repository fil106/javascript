function start() {
    randowNumber = getRandomInt(0,10);
    console.log("randowNumber = " + randowNumber);

    hello();
    game(getUserNumber());
}

function hello() {
    alert("Попробуем отгадать число?\nЯ задагал случайное число от 0 до 10 попытайтесь угадать это число, в процессе отгадывания, я буду помагать Вам.\nГотовы? Тогда кликаем на кнопку 'ОК'");
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUserNumber() {
    userNumber = prompt("Введите число от 0 до 10\nНапример " + getRandomInt(0,10), "Число");
    console.log("userNumber = " + userNumber);
    return userNumber;
}

function game(num) {
    if(num === null) {
        randowNumber = 0;
        userNumber = 0;
        alert("Для того чтобы заново начать игру, обновите страницу!");
    } else {
        if(isNaN(num)) {
            alert("Пожалуйста, введите число!");
            game(getUserNumber());
        } else {
            if (num >= 0 && num <= 10) {
                if(num < randowNumber) {
                    count++;
                    alert("Хорошая попытка, ваше число МЕНЬШЕ загаданного числа\nПопробуйте еще раз");
                    console.log(randowNumber + " < " + num);
                    game(getUserNumber());
                } else if(num > randowNumber) {
                    count++;
                    alert("Хорошая попытка, ваше число БОЛЬШЕ загаданного числа\nПопробуйте еще раз");
                    console.log(randowNumber + " < " + num);
                    game(getUserNumber());
                } else if(num == randowNumber) {
                    console.log(randowNumber + " < " + num);
                    finish();
                }
            } else {
                alert("Вы ввели число не входящее в диапазон от 0 до 10");
                game(getUserNumber());
            }
        }
    }
}

function finish() {
    randowNumber = 0;
    userNumber = 0;
    alert("Вы отлично постарались! Вы угадали число за " + count + " попыток\nСпасибо за великолепную игру!");
    start();
}