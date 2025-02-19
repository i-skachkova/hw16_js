class StringBuilder{
    #value;
    constructor(str){
        this.#value = str;
    }
    
    get value(){
        return this.#value;
    }
    set value(newValue){
        this.#value = newValue;
    }

    append(str){
        this.#value += str;
    }
    prepend(str){
        this.#value = str + this.#value;
    }
    pad(str){
        this.#value = str + this.#value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='