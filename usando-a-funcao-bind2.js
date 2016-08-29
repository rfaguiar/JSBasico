/*necessartio jdk 8 comando java -version
 * iniciar o servidor de estados no cmd com comando java -jar localidades-1.0.0.jar
 */

var Estado = (function(){
	
	function Estado(){
		this.comboEstado = $('#combo-estado');		
	}
	
	Estado.prototype.iniciar = function(){
		//console.log('Iniciando o estado...');
		$.ajax({
			method: 'GET',
			url: 'http://localhost:8080/estados',
			dataType: 'jsonp',
			success: onEstadosRetornados.bind(this),
			error: onError			
		});
		
		function onEstadosRetornados(estados){
			//console.log('this', this);
			this.comboEstado.html('<Option>Selecione o estado</option>');
			estados.forEach(function(estado) {
				//console.log(estado);
				var optionEstado = $('<option>')
					.val('estado.uf')
					.text(estado.nome);
				this.comboEstado.append(optionEstado);
			}.bind(this));
		}
		
		function onError(){
			alert('Erro carregando estados do servidor!');
		}
	}
	
	/*var comboEstado = $('#combo-estado');
	
	function iniciar(){
		$.ajax({
			method: 'GET',
			url: 'http://localhost:8080/estados',
			dataType: 'jsonp',
			success: onEstadosRetornados,
			error: onError
			
		});
	}
	
	function onEstadosRetornados(estados){
		comboEstado.html('<Option>Selecione o estado</option>');
		estados.forEach(function(estado) {
			//console.log(estado);
			var optionEstado = $('<option>')
				.val('estado.uf')
				.text(estado.nome);
			comboEstado.append(optionEstado);
		});
	}
	
	function onError(){
		alert('Erro carregando estados do servidor!');
	}*/
	
	return Estado;
	
})();

$(function(){
	var estado = new Estado();
	estado.iniciar();
});


