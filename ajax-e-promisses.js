/*necessartio jdk 8 comando java -version
 * iniciar o servidor de estados no cmd com comando java -jar localidades-1.0.0.jar
 */
$(function(){
	var resposta = $.ajax({
		method: 'GET',
		url: 'http://localhost:8080/estados',
		dataType: 'jsonp'
	});
	
	resposta.done(function(estados){
		var comboEstado = $('#combo-estado');
		//comboEstado.empty();
		comboEstado.html('<Option>Selecione o estado</option>');
		//console.log('tudo certo!', estados);
		estados.forEach(function(estado) {
			//console.log(estado);
			var optionEstado = $('<option>')
				.val('estado.uf')
				.text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});	
	
	resposta.fail(function(estados){
		alert('Erro carregando estados do servidor!');
	});
});