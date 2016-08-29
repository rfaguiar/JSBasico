/*necessartio jdk 8 comando java -version
 * iniciar o servidor de estados no cmd com comando java -jar localidades-1.0.0.jar
 */
var projeto = projeto || {};
projeto.Estado = (function(){
	
	function Estado(){
		this.comboEstado = $('#combo-estado');	
		this.emitter = $({});
		this.on = this.emitter.on.bind(this.emitter);
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
		
		this.comboEstado.on('change', onEstadoAlterado.bind(this));
				
	}
	
	function onEstadoAlterado(){
		this.emitter.trigger('alterado', this.comboEstado.val());
	}
	
	function onEstadosRetornados(estados){
		//console.log('this', this);
		this.comboEstado.html('<option value="">Selecione o estado</option>');
		estados.forEach(function(estado) {
			//console.log(estado);
			var optionEstado = $('<option>')
				.val(estado.uf)
				.text(estado.nome);
			this.comboEstado.append(optionEstado);
		}.bind(this));
	}
	
	function onError(){
		alert('Erro carregando estados do servidor!');
	}
		
	
	return Estado;
	
})();

projeto.Cidade = (function(){
	function Cidade(estado){
		this.comboCidade = $('#combo-cidade');
		this.estado = estado;
	}
	
	Cidade.prototype.iniciar = function(){
		//console.log('Iniciando cidade...');
		this.estado.on('alterado', onEstadoSelecionado.bind(this));
//		this.estado.on('alterado', function(){
//			console.log('Estado alterado ...', arguments);
//		});
	}
		
	function onEstadoSelecionado(evento, uf){
		if(uf){			
			console.log('UF', uf);
			$.ajax({
				method: 'GET',
				url: 'http://localhost:8080/cidades',
				dataType: 'jsonp',
				data:{
					uf: uf
				},
				success: onCidadesRetornados.bind(this),
				error: onError	
			});
		}else {
			this.comboCidade.html('');
			this.comboCidade.attr('disable', 'disable');
		}		
	}
	
	function onCidadesRetornados(cidades){
		this.comboCidade.removeAttr('disabled');
		this.comboCidade.html('<Option>Selecione a cidade</option>');
		cidades.forEach(function(cidade) {
			//console.log(estado);
			var optionCidade = $('<option>')
				.val(cidade.codigo)
				.text(cidade.nome);
			this.comboCidade.append(optionCidade);
		}.bind(this));
	}
	
	function onError(){
		alert('Erro carregando cidades do servidor!');
	}
	
	
	return Cidade;
})();


$(function(){
	var estado = new projeto.Estado();
	estado.iniciar();
	
	//console.log(estado);
	
	var cidade = new projeto.Cidade(estado);
	cidade.iniciar();
});


