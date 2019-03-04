$(function(){

//Cambio colores titulo infinito
	function colorUno(){
		$(".main-titulo").animate(
			{
			color: "gray"
			}, 2000, function(){
				colorDos()
				}
		)
	}

	function colorDos(){
		$(".main-titulo").animate(
			{
			color: "#DCFF0E"
			}, 2000, function(){
				colorUno()
				}
		)
	}

	colorUno()



})