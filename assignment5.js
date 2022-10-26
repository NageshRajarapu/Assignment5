// #1 Write a program to get the volume of Cylinder, Sphere and
// Cone with four decimal places using objects and classess

class Shape {
    constructor(radius,height) {
      this.radius = radius;
      this.height = height;
    }
    getVolume() {
      console.log("This is Shape method");
    }
  }
  
  class Cylinder extends Shape {
    constructor(radius,height) {
      super(radius,height);
      this.radius = radius;
      this.height = height;
    }
    getVolume() {
      let volume = (Math.PI*this.radius*this.radius*this.height).toFixed(4);
      return volume;
    }
  }
  class Sphere extends Shape {
    constructor(radius) {
      super(radius);
      this.radius = radius;
    }
    getVolume() {
      let volume = ((4/3)*Math.PI*this.radius*this.radius*this.radius).toFixed(4);
      return volume;
    }
  }
  class Cone extends Shape {
    constructor(radius,height) {
      super(radius,height);
      this.radius = radius;
      this.height = height;
    }
    getVolume() {
      let volume = ((Math.PI*this.radius*this.radius*this.height)/3).toFixed(4);
      return volume;
    }
  }
  
  let cylinder = new Cylinder(5,3);
  let cylVolume = cylinder.getVolume();
  console.log(`The volume of Cylinder is: ${cylVolume}`);
  console.log();
  
  let sphere = new Sphere(6);
  let spVolume = sphere.getVolume();
  console.log(`The volume of Sphere is: ${spVolume}`);
  console.log();
  
  let cone = new Cone(4,5)
  let coneVolume = cone.getVolume();
  console.log(`The volume of Cone is: ${coneVolume}`);