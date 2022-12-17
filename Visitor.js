class Visitor {
    static visit = (v) => {
        v.doStuff()
    }
}

class First {
    doStuff = () => {
        console.log("First")
    }
}

class Second {
    doStuff = () => {
        console.log("Second")
    }
}

class Third {
    doStuff = () => {
        console.log("Third")
    }
}

const first = new First()
const second = new Second()
const third = new Third()

Visitor.visit(first)
Visitor.visit(second)
Visitor.visit(third)