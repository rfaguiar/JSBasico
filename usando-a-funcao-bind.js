/*necessartio jdk 8 comando java -version
 * iniciar o servidor de estados no cmd com comando java -jar localidades-1.0.0.jar
 */

var estado = (function(){
	var comboEstado = $('#combo-estado');
	
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
	}
	
	return {
		iniciar: iniciar
	}
	
})();

estado.iniciar();

