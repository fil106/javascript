var game = {
    objects: ["Шкаф", "Камод", "Входная дверь"],
    useObjects: [],
    currObject: "",
    step: 0,
    answers: {
        1: "1. Открываем;",
        2: "2. Подойти к другому объекту в комнате;"
    },
    answer: "",
    key: false,
    doSomething: function() {
        this.currObject = this.objects[getRandom(0,this.objects.length - 1)];

        if(this.useObjects.indexOf(this.currObject) === -1) {
            console.info("Вы видите перед собой '%s'. Откроем?", this.currObject);
            this.answer = prompt("Веберите действие, написав цифру:\n\n" +
                this.answers[1] + "\n" +
                this.answers[2] + "\n\n");
            this.whatNext();
        }
    },
    whatNext: function() {
        switch(this.currObject) {
            case this.objects[0]:
                if(this.answer === this.answers[1]) {
                    console.log("В шкафу вы видите только старую Шанель... Ничего полезного.");
                    this.doSomething();
                } else if(this.answer === this.answers[2]) {
                    this.doSomething();
                }
                break;
            case this.objects[1]:
                if(this.answer === this.answers[1]) {
                    console.log("Ухты в первом ящике под старой книгой вы нашли ключ. Похоже он от двери!");
                    this.key = true;
                    this.doSomething();
                } else if(this.answer === this.answers[2]) {
                    this.doSomething();
                }
                break;
            case this.objects[2]:
                if(this.answer === this.answers[1]) {
                    if(this.key = true) {
                        console.log("Вы достаете из кармана, найденный в комоде ключ, и спокойно открываете дверь. Отличная игра!");
                    }
                    console.log("Дергаете ручку... заперто, похоже нужен ключ.");
                    this.doSomething();
                } else if(this.answer === this.answers[2]) {
                    this.doSomething();
                }
                break;
        }
    }
};

start();
game.doSomething();