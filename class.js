class Dog {
    constructor(name, behavior) {
        this.name = name;
        this.behavior = [];
    }

    get dogName() {
        return this.name;
    }

    increaseBehavior() {
        return this.behavior +=1;
    }

    static dogBark() {
        console.log('woof woof');
    }
}

const tom = new Dog('Tom', 'White', 0);

class GermanShepherd extends Dog {
    constructor(name, behavior, speed){
        super(name, behavior);
        this.speed = speed;
    }
}

const venom = new GermanShepherd('Venom', 9, 240);
console.log(venom.increaseBehavior());