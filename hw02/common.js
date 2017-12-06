// ***** Скрипт *****

var a, b;
a = prompt("Введите число a", "Число");
b = prompt("Введите число b", "Число");

check(a,b);

function check(a,b) {
    var c;
    a = Number(a);
    b = Number(b);

    if(a >= 0 && b >= 0) {
        c = a - b;
        alert(a + " - " + b + " = " + c);
    } else if(a < 0 && b < 0) {
        c = a * b;
        alert(a + " * " + b + " = " + c);
    } else {
        c = a + b;
        alert(a + " + " + b + " = " + c);
    }
}

// ***** Вывод диапазона от d до 15 *****

var d = 9;

switch(d) {
    case 0:
        alert(0);
        d++;
    case 1:
        alert(1);
        d++;
    case 2:
        alert(2);
        d++;
    case 3:
        alert(3);
        d++;
    case 4:
        alert(4);
        d++;
    case 5:
        alert(5);
        d++;
    case 6:
        alert(6);
        d++;
    case 7:
        alert(7);
        d++;
    case 8:
        alert(8);
        d++;
    case 9:
        alert(9);
        d++;
    case 10:
        alert(10);
        d++;
    case 11:
        alert(11);
        d++;
    case 12:
        alert(12);
        d++;
    case 13:
        alert(13);
        d++;
    case 14:
        alert(14);
        d++;
    case 15:
        alert(15);
}

// ***** Функции арифметические *****

function sum(a,b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function minus(a,b) {
    a = Number(a);
    b = Number(b);
    return a - b;
}

function multi(a,b) {
    a = Number(a);
    b = Number(b);
    return a * b;
}

function div(a,b) {
    a = Number(a);
    b = Number(b);
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'sum':
            return sum(arg1, arg2);
            break;
        case 'minus':
            return minus(arg1, arg2);
            break;
        case 'multi':
            return multi(arg1, arg2);
            break;
        case 'div':
            return div(arg1, arg2);
            break;
    }
}

alert(mathOperation(5,4,'minus'));

// ***** Функция возведение в степень работает только возведение в положительную степень =) *****

function power(val, pow) {
    function powerFor(a,b) {
        var result = a;
        for(var i = 1;i < b;i++) {
            result *= a;
        }
        return result;
    }

    if(pow === 1) {
        return val;
    } else if(pow === 0) {
        return 1;
    } else if (pow > 1) {
        return powerFor(val, pow);
    }
}

alert (power(2,10));