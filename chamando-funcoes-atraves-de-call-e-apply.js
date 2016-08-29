function Carro(nome, placa){
	this.nome = nome;
	this.placa = placa;
}

//var fox = new Carro('Fox', "AAA-1111");
var fox ={};

//Carro.call(fox, 'Fox', 'AAA-1111');

Carro.apply(fox, ['Fox', 'AAA-1111']);

console.log('fox', fox);