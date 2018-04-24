import { addToDom } from './helpers';  // Always must start with ./ to indicate which file to use. Must start from some directory
import add from './add';
import SuperPerson from './person';

addToDom("<hr>");

const Bob = new SuperPerson("Bob", "BobCat");
const Susie = new SuperPerson("Susie", "Wonder Susan");

addToDom(Bob.speak("I'm alive!!"));

addToDom(Bob.xRay());

addToDom(Susie.speak("Hello World! Heckin' wao!"));

addToDom(Bob.sayHeroName());