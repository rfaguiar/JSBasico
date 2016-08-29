$(function(){
	$('#botao1').on('click', function(event){
		console.log(arguments);
	});
	
	$('#link1').on('click', function(event){
		console.log('link1 clicado');
		event.preventDefault();
	});
	
	$('#input1').on('keyup', function(event){
		console.log(event.keyCode);
		if(event.keyCode === 13){
			alert('Enter precionado');
		}
	});
});
