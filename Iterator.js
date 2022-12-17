class Iterator {
    constructor() {
        this.items = items;
        this.index = 0;
    }

    next = () => {
        if (this.hasNext()) {
            return this.items[++this.index];
        } else {
            throw new Exeption("Index out of range");
        }
    };

    first = () => {
        this.reset();
        return this.items[this.index];
    };

    reset = () => {
        this.index = 0;
    };

    hasNext = () => {
        return this.index + 1 <= this.items.length;
    };
}

var items = ["one", 2, "circle", true, "Applepie"];
var iter = new Iterator(items);

for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
    console.log(item);
}

