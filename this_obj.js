

class Shape { 
  constructor(type) {
    this.name = type;
  }
  getArea() {
   return( "Desire :");
  }
}

class Triangle extends Shape {
  constructor(a,b,c) {
    super();
    this.type="triangle"
      this.a=a;
      this.b=b;
      this.c=c;
  }
  getArea() {
    const p=(this.a+this.b+this.c)/2;
    const S = Math.sqrt(p*((p-this.a)*(p-this.b)*(p-this.c)));
//     console.log(S)
   console.log(` ${this.type}_${super.getArea()}  ${S}`)
  }
}
class Rectangle  extends Shape{
  constructor(a,b){
    super()
    this.type="rectangle";
    this.a=a;
    this.b=b
  }
  getArea(){
    const S =this.a*this.b;
     console.log(` ${this.type}_${super.getArea()}  ${S}`)
  }
}
class Square extends Shape{
  constructor(a){
    super()
    this.a=a
  }
  getArea(){
  const S =this.a*this.a;
  console.log(` ${this.type}_${super.getArea()}  ${S}`)
    
  }
}
let d = new Triangle(3,4,5);
d.getArea()

let c = new Rectangle( 3,4);
c.getArea()

let a= new Square (2)
a.getArea()





