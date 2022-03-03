class Retangulo{
 constructor(largura, altura){  
  this.altura = altura;
   this.largura = largura;
 }
  calcularArea(){
   return this.altura * this.largura
  }
  area(){
       return this.calcularArea()

  }
}
let retangulo_1 = new Retangulo(109, 10);
console.log (retangulo_1.calcularArea())
let retangulo_2 = new Retangulo(20, 20);
console.log(retangulo_2.calcularArea());
console.log(retangulo_2.area());
