function start() {
    randNumber = getNumber(4);
    console.log("randomNumber = " + randNumber);

    hello();
    game(getUserNumber());
}

function hello() {
    alert("Попробуем отгадать число?\nЯ задагал случайное число от " + minNum + " до " + maxNum + ", состоящее из неповторяющихся цифр! В качестве подсказок выступают 'коровы' (цифра угадана, но её позиция - нет) и 'быки' (когда совпадает и цифра и её позиция). Т.е. если загадано число 1234, а вы называете 6531, то результатом будет 1 корова (цифра 1) и 1 бык (цифра 3)");
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumber(len) {
    var resultNumbers = [];
    var currNumber, resultStr = '';

    if(isNumeric(len) && len > 0) {
        for (var i = 0; i < len; i++) {
            if (i === 0) {
                currNumber = getRandom(1, 9);
                resultNumbers.push(currNumber);
            } else {
                currNumber = getRandom(0, 9);
                var check = true;

                while(check) {
                    if(resultNumbers.indexOf(currNumber) === -1) {
                        resultNumbers.push(currNumber);
                        check = false;
                    } else {
                        currNumber = getRandom(0, 9);
                    }
                }
            }
        }
    } else {
        return "Ошибка!";
    }

    for(var j in resultNumbers) {
        resultStr += resultNumbers[j];
    }

    return parseInt(resultStr);
}

function getUserNumber() {
    userNumber = prompt("Введите число от " + minNum + " до " + maxNum + "\nНапример " + getRandom(minNum,maxNum), "Число");
    console.log("userNumber = " + userNumber);
    return userNumber;
}

function getCow(randomNum, userNum) {
    var rNum = randomNum + '';
    var uNum = userNum + '';
    var cow = 0;

    for(var i in rNum) {
        if(rNum.indexOf(uNum[i]) >= 0) {
            cow++;
        }
    }

    switch (cow) {
        case 0:
            return cow + " Коров";
            break;
        case 1:
            return cow + " Корова";
            break;
        case 2:
            return cow + " Коровы";
            break;
        case 3:
            return cow + " Коровы";
            break;
        case 4:
            return cow + " Коровы";
            break;
    }
}

function getBull(randomNum, userNum) {
    var rNum = randomNum + '';
    var uNum = userNum + '';
    var bull = 0;

    for(var i in rNum) {
        if(rNum.indexOf(uNum[i]) === uNum.indexOf(uNum[i])) {
            bull++;
        }
    }

    switch (bull) {
        case 0:
            return bull + " Быков";
            break;
        case 1:
            return bull + " Бык";
            break;
        case 2:
            return bull + " Быка";
            break;
        case 3:
            return bull + " Быка";
            break;
        case 4:
            return bull + " Быка";
            break;
    }
}

function game(num) {
    if(num === null) {
        randNumber = 0;
        userNumber = 0;
        alert("Для того чтобы заново начать игру, обновите страницу!");
    } else {
        if(isNumeric(num)) {
            if (num >= minNum && num <= maxNum) {
                if(num < randNumber) {
                    count++;
                    alert("Хорошая попытка, у Вас " + getCow(randNumber, userNumber) + " и " + getBull(randNumber, userNumber));
                    game(getUserNumber());
                } else if(num > randNumber) {
                    count++;
                    alert("Хорошая попытка, у Вас " + getCow(randNumber, userNumber) + " и " + getBull(randNumber, userNumber));
                    game(getUserNumber());
                } else if(num == randNumber) {
                    finish();
                }
            } else {
                alert("Вы ввели число не входящее в диапазон от " + minNum + " до " + maxNum);
                game(getUserNumber());
            }
        } else {
            alert("Пожалуйста, введите число!");
            game(getUserNumber());
        }
    }
}

function finish() {
    randowNumber = 0;
    userNumber = 0;
    alert("Вы отлично постарались! Вы угадали число за " + count + " попыток\nСпасибо за великолепную игру!");
    start();
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}