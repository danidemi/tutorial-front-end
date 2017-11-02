// class definition and usage.
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}


var polygon = new Polygon(3, 4);
console.log( polygon );
console.log( polygon.area() );

// anonymous class definition.
var Circle = class {
    constructor(radius){
        this.radius = radius;
    }
    area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
};
console.log( Circle );
console.log( new Circle(3).area() );

