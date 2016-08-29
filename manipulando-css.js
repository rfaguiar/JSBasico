$(function(){
	var selecaoTodosUsuario = $('#selecao-todos-usuario');
	var selecaoUsuarios = $('.js-selecao-usuario');
	
	//console.log('js-selecao-usuario', selecaoUsuarios);
	//console.log('selecao-todos-usuario', selecaoTodosUsuario);
	
	//funcção para quando todos selecionados marcar o selecao todos quando desmarcar 1 desmarca todos
	selecaoUsuarios.on('click', function(){
		//console.log('clicou');
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		//console.log('totalUsuariosSelecionados', totalUsuariosSelecionados);
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuario.prop('checked', checked);
	});
	
	//função para selecionar todos e desselecionar
	selecaoTodosUsuario.on('click', function(){		
		selecaoUsuarios.prop('checked', selecaoTodosUsuario.prop('checked'));
//		if(selecaoTodosUsuario.prop('checked')){
//			selecaoUsuarios.parents('tr').addClass('selecionado');
//		}else{
//			selecaoUsuarios.parents('tr').removeClass('selecionado');
//		}
		estilizarLinhaUsuarios();
	});
	
	//função para mudar css da linha ao selecionar e deselecionar
	selecaoUsuarios.on('change', function(evento){
		//console.log('evento', evento);
		//var selecaoUsuario = $(evento.target);
		//console.log('selecaoUsuario', selecaoUsuario);
//		if(selecaoUsuario.prop('checked')){
//			selecaoUsuario.parents('tr').addClass('selecionado'); 
//		}else{
//			selecaoUsuario.parents('tr').removeClass('selecionado');
//		}
		estilizarLinhaUsuarios();
	});
	
	//função para aplicar ou remover css dos selecionados e deselecionados
	function estilizarLinhaUsuarios(){
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	};
});