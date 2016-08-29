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
	});
});