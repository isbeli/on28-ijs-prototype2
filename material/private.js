class User {
	name;
	age;
	email;
	#password;

	constructor(name, age, email, password) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.#password = password;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}

	#encryptPassword() {
		return (this.#password = `*** ${this.#password} + ***`);
	}

    get password() {
        return (this.#password);
    }

    set password(newPassword) {
        this.#password = newPassword;
    }
}

const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
user1.password = 11111;
console.log()

//console.log('Laura', 25, 'isbeliramirez@gmail.com', 123456)
console.log(user1.password)


// console.log(user1.name);
// console.log(user1.age);;
// console.log(user1.email);
// console.log(user1.password);




// console.log(user1.#password); //ERRO: A propriedade '#password' não é acessível fora da classe 'User' porque tem um identificador privado.ts
// console.log(user1.#encryptPassword()); //ERRO: A propriedade '#encryptPassword' não é acessível fora da classe 'User' porque tem um identificador privado.