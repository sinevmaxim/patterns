class Chat {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.chat = this;
    }

    send(msg, from, to) {
        if (to) {
            to.receive(msg, from);
        } else {
            Object.entries(this.users).forEach(([_, user]) => {
                if (user !== from) {
                    user.receive(msg, from);
                }
            });
        }
    }
}

class User {
    constructor(name) {
        this.chat = null;
        this.name = name;
    }
    send = (msg, to) => {
        this.chat.send(msg, this, to);
    };

    receive(msg, from) {
        console.log(`${from.name} to ${this.name} :  ${msg}`);
    }
}

var Misha = new User("Misha");
var Sasha = new User("Sasha");
var Pasha = new User("Pasha");
var Dasha = new User("Dasha");

var chat = new Chat();
chat.register(Misha);
chat.register(Sasha);
chat.register(Pasha);
chat.register(Dasha);

Misha.send("All you need is love.");
Misha.send("I love you Sasha.");
Sasha.send("Hey, no need to broadcast", Misha);
Pasha.send("Ha, I heard that!");
Dasha.send("Pasha, what do you think?", Pasha);
