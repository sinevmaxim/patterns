class Builder {
    reset = () => {
        throw "Cannot invoke abstract method";
    };

    buildA = () => {
        throw "Cannot invoke abstract method";
    };

    buildB = () => {
        throw "Cannot invoke abstract method";
    };

    buildC = () => {
        throw "Cannot invoke abstract method";
    };

    getResult = () => {
        throw "Cannot invoke abstract method";
    };
}

class Data {
    constructor(data) {
        this.data = data;
        console.log(`Data constructor - ${this.data}`);
    }
}

class Text {
    constructor(data) {
        this.data = data;
        console.log(`Text constructor - ${this.data}`);
    }
}

class DataBuilder extends Builder {
    reset = () => {
        this.data = [];
    };

    buildA = () => {
        this.data.push("Hello");
        console.log("Building part A");
    };

    buildB = () => {
        this.data.push("My");
        console.log("Building part B");
    };

    buildC = () => {
        this.data.push("Name");
        console.log("Building part C");
    };

    getResult = () => {
        return new Data(this.data);
    }
}

class TextBuilder extends Builder {
    reset = () => {
        this.data = "";
    };

    buildA = () => {
        this.data += "Hello";
        console.log("Building part A");
    };

    buildB = () => {
        this.data += "My";
        console.log("Building part B");
    };

    buildC = () => {
        this.data += "Name";
        console.log("Building part C");
    };

    getResult = () => {
        return new Text(this.data);
    }
}

class Client {
    constructor(builder) {
        builder.reset();
        builder.buildA();
        builder.buildB();
        builder.buildC();
        builder.buildA();
        builder.getResult();
    }
}

const client1 = new Client(new TextBuilder());
const client2 = new Client(new DataBuilder());
