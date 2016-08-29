$(function(){
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');
	
	atividade.on('keyup', function(event){
		var keyCode = event.keyCode;
		//console.log('atividade');
		
		if(keyCode === 13){
			
			//listaAtividades.prepend('<li>' + atividade.val() + '</li>');
			
			//adicionarNaLista(atividade.val());
			
			atividade.trigger('enter', atividade.val());
			
			atividade.val('');
		}
	});
	
	/*function adicionarNaLista(texto){
		listaAtividades.prepend('<li>' + texto + '</li>');
	}*/
	
	atividade.on('enter', function(evento, texto){
		listaAtividades.prepend('<li>' + texto + '</li>');
	});
	
	atividade.on('enter', function(evento, texto){
		console.log('Outra funcionalidade...');
	});
	
});