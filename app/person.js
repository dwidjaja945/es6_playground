
class Person {
    constructor(name) {
        this.name = name;
    }

    sleep(hours) {
        return `<h1>I'm going to sleep for ${hours} hours.</h1>`;
    }

    drink(cups) {
        return `<h1>I'm going to drink ${cups} of water</h1>`;
    }

    speak(message) {
        return `<h1>${this.name} said: ${message}</h1>`;
    }
}

class SuperPerson extends Person {
    constructor (name, heroName) {
        super(name);
        this.heroName = heroName;
    }

    sayHeroName() {
        return this.speak(`I am ${this.heroName}!!`);
    }

    xRay() {
        return this.speak("I see everything!!!");
    }
}

export default SuperPerson;