function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// user.token = 'adadadsa';

circle.location = { x1: 1 };

const propertyName = 'center-location';
circle[propertyName] = { x1: 1 };

delete circle['location'];