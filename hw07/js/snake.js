var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 200;
var TIME_SPEED = 1000;
var FOOD_SPEED = 3000;
var WALL_SPEED = 4000;

var snakeTimer;
var timeTimer;
var wallTimer;
var walls = [];
var snake = [];
var snakeCoordX;
var snakeCoordY;
var direction = 'top';
var score = 0;
var time = {'second': '00','minutes': '00'};

function init() {
    generateGameField();

    document.getElementById('snake-start').addEventListener('click', startGameHandler);
    document.getElementById('snake-renew').addEventListener('click', refreshGameHandler);
    window.addEventListener('keydown', changeDirectionHandler);
}

function changeDirectionHandler(event) {
    switch(event.keyCode) {
    case 37:
        if(direction !== 'right') {
          direction = 'left';
        }
        break;
    case 38:
        if(direction !== 'bottom') {
          direction = 'top';
        }
        break;
    case 39:
        if(direction !== 'left') {
          direction = 'right';
        }
        break;
    case 40:
        if(direction !== 'top') {
          direction = 'bottom';
        }
        break;
    }
}

function generateGameField() {
    var table = document.createElement('table');
    table.classList.add('game-table');
    table.id = 'game-table';

    document.getElementById('snake-field').style.width = (FIELD_SIZE_X * 15 + FIELD_SIZE_X * 1 + 1) + 'px';

    for(var i = 0; i < FIELD_SIZE_X; i++) {
        var row = document.createElement('tr');
            for(var j = 0; j < FIELD_SIZE_Y; j++) {
                var cell = document.createElement('td');
                cell.classList.add('game-table-cell');

                row.appendChild(cell);
            }
            table.appendChild(row);
    }

    document.getElementById('snake-field').appendChild(table);
}

function createFood() {
    var foodCreated = false;

    while(!foodCreated) {
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var table = document.getElementById('game-table');
        var foodUnit = table.children[foodX].children[foodY];

    if(!foodUnit.classList.contains('snake-unit')) {
          foodCreated = true;
          foodUnit.classList.add('food-unit');
        }
    }
}

function createWall() {
    var wallCreated = false;

    while(!wallCreated) {
        var wallX = Math.floor(Math.random() * FIELD_SIZE_X);
        var wallY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var table = document.getElementById('game-table');
        var wallUnit = table.children[wallX].children[wallY];

        if(!wallUnit.classList.contains('snake-unit') && !wallUnit.classList.contains('food-unit')) {
            wallCreated = true;
            wallUnit.classList.add('wall-unit');
            walls.push(wallUnit);
        }
    }
}

function respawn() {
    snakeCoordX = Math.floor(FIELD_SIZE_X / 2);
    snakeCoordY = Math.floor(FIELD_SIZE_Y / 2);

    var table = document.getElementById('game-table');
    var snakeHead = table.children[snakeCoordX].children[snakeCoordY];
    var snakeTail = table.children[--snakeCoordX].children[snakeCoordY];

    snakeHead.classList.add('snake-unit');
    snakeTail.classList.add('snake-unit');

    snake.push(snakeHead);
    snake.push(snakeTail);
}

function move() {
    var newUnit;
    var table = document.getElementById('game-table');

    switch(direction) {
    case 'top':
        snakeCoordX--;
        break;
    case 'bottom':
        snakeCoordX++;
        break;
    case 'left':
        snakeCoordY--;
        break;
    case 'right':
        snakeCoordY++;
        break;
    }

    if(snakeCoordX >= 0 && snakeCoordX <= FIELD_SIZE_X) {
        newUnit = table.children[snakeCoordX].children[snakeCoordY];
    }

    if(newUnit && !isSnakeUnit(newUnit)) {

        if(isWallUnit(newUnit)) {
            if(score < 0) {
                gameOver('wall');
            }
        }

        newUnit.classList.add('snake-unit');
        snake.push(newUnit);

        if(!isFoodUnit(newUnit)) {
            removeTail();
        }

    } else if(snakeCoordX < 0) {
        snakeCoordX = FIELD_SIZE_X;
        hideTail();
    } else if(snakeCoordX >= FIELD_SIZE_X) {
        snakeCoordX = -1;
        hideTail();
    } else if(snakeCoordY < 0) {
        snakeCoordY = FIELD_SIZE_Y;
        hideTail();
    } else if(snakeCoordY >= FIELD_SIZE_Y) {
        snakeCoordY = -1;
        hideTail();
    } else {
        gameOver();
    }
}

function isSnakeUnit(unit) {
    return snake.includes(unit);
}

function gameOver(reason) {
    clearInterval(timeTimer);
    clearInterval(snakeTimer);
    clearInterval(wallTimer);
    var message = '';

    switch(reason) {
        case 'wall':
            message = 'Вы попали в стену, при длинне в 2 ячейки';
            break;
    }

    alert('Вы проиграли!' + message + '\nВаш счет: ' + score + ' и время: ' + time['minutes'] + ':' + time['second']);
}

function isFoodUnit(unit) {
    if(unit.classList.contains('food-unit')) {
        score++;
        insertScore();
        unit.classList.remove('food-unit');

        createFood();

        return true;
    } else {
        return false;
    }
}

function isWallUnit(unit) {
    if(unit.classList.contains('wall-unit')) {
        removeTail();
        score--;
        insertScore();
        unit.classList.remove('wall-unit');

        return true;
    } else {
        return false;
    }
}

function startGameHandler() {
    respawn();
    showScore();

    snakeTimer = setInterval(move, SNAKE_SPEED);
    timeTimer = setInterval(pasteTime, TIME_SPEED);
    wallTimer = setInterval(createWall, WALL_SPEED);
    setTimeout(createFood, FOOD_SPEED);
}

function refreshGameHandler() {}

function pasteTime() {
    time['second']++;

    if(time['second'] < 60) {
        if(time['second'] < 10) {
            time['second'] = '0' + time['second'];
        }

        document.getElementById('score_second').innerHTML = time['second'];
    } else if(time['second'] === 60) {
        time['second'] = 0;
        time['minutes']++;

        if(time['minutes'] < 10) {
            time['minutes'] = '0' + time['minutes'];
        }

        document.getElementById('score_minute').innerHTML = time['minutes'];
    }
}

function showScore() {
    document.getElementById('score').className = 'display_block';
}

function closeScore() {
    document.getElementById('score').className = 'display_none';
    time['second'] = '';
    time['minutes'] = '';
}

function clearGameField() {
    var cells = document.getElementsByClassName('game-table-cell');

    for(var i = 0; i < cells.length; i++) {
        cells[i].className = 'game-table-cell';
    }
}

function insertScore() {
    document.getElementById('score_b').innerHTML = score;
}

function hideTail() {
    var snakeTail = snake[0];
    snakeTail.classList.remove('snake-unit');
}

function removeTail() {
    var oldUnit = snake.shift();
    oldUnit.classList.remove('snake-unit');
}

window.onload = init;