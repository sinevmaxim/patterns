class Employee {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak = () => {
        throw "Cannot invoke abstract method";
    };
}
class FirstEmployee extends Employee {
    speak = () => {
        console.log(`First Employee ${this.name}, Im a ${this.type}`);
    };
}
class SecondEmployee extends Employee {
    speak = () => {
        console.log(`Second Employee ${this.name}, Im a ${this.type}`);
    };
}
class ThirdEmployee extends Employee {
    speak = () => {
        console.log(`Third Employee ${this.name}, Im a ${this.type}`);
    };
}

class EmployeeFactory {
    createEmployee = () => {
        throw "Cannot invoke abstract method";
    };
}
class FirstEmployeeFactory extends EmployeeFactory {
    createEmployee = (name, type) => {
        return new FirstEmployee(name, type);
    };
}

class SecondEmployeeFactory extends EmployeeFactory {
    createEmployee = (name, type) => {
        return new SecondEmployee(name, type);
    };
}

class ThirdEmployeeFactory extends EmployeeFactory {
    createEmployee = (name, type) => {
        return new ThirdEmployee(name, type);
    };
}

class Client {
    constructor(factory) {
        this.factory = factory;
    }

    create = (name, type) => {
        this.employee = this.factory.createEmployee(name, type);
        return this.employee.speak();
    };
}
const client = new Client(new SecondEmployeeFactory());
client.create("Tim", "doctor");
