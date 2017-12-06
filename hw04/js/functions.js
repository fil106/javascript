function start() {
    console.warn("Привет, это текстовая игра.\nПредставь, ты попал в комнату из которой необходимо выбраться, и я помогу тебе в этом, просто следуй моим советам");
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}