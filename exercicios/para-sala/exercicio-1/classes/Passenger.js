import { Driver } from "./Driver";
export class Passenger {
    name;
    age;
    password;
    amoutSpent = 0

    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    requestDriver(driver, amount, password){
        if (password != this.password) {
            console.log('Senha inválida');
            return;
        }

        if (!(driver instanceof Driver)) {
            console.log('O parametro morotista é inválidoo');
            return;
        }

        this.amoutSpent -= amount;
        driver.rundriver(amount);
    }

}