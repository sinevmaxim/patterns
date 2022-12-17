class Navigator {
    constructor(routeStrategy) {
        this.routeStrategy = routeStrategy;
    }
    buildRoute(pointA, pointB) {
        console.log('Starting Navigator App');
        this.routeStrategy.build(pointA, pointB);
        console.log('Closing Navigator App');
    }
}

class RouteStrategy {
    build(pointA, pointB) {}
}

class RoadStrategy extends RouteStrategy {
    build(pointA, pointB) {
        console.log('Built route using Road Strategy');
        console.log(pointA);
        console.log(pointB);
    }
}

class WalkingStrategy extends RouteStrategy {
    build(pointA, pointB) {
        console.log('Built route using Walking Strategy');
        console.log(pointA);
        console.log(pointB);
    }
}

class PublicTransportStrategy extends RouteStrategy {
    build(pointA, pointB) {
        console.log('Built route using Public Transport Strategy');
        console.log(pointA);
        console.log(pointB);
    }
}

const nav = new Navigator(new RoadStrategy());
nav.buildRoute('Moscow', 'Miami');

