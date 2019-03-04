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

//Funcion generar dulces aleatoriamente

	function randomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function dulcesArrays(arrayType, index) {
		var dulcesCol1 = $('.col-1').children()
		var dulcesCol2 = $('.col-2').children()
		var dulcesCol3 = $('.col-3').children()
		var dulcesCol4 = $('.col-4').children()
		var dulcesCol5 = $('.col-5').children()
		var dulcesCol6 = $('.col-6').children()
		var dulcesCol7 = $('.col-7').children()

		var dulcesColumns = $([dulcesCol1, dulcesCol2, dulcesCol3, dulcesCol4,
		dulcesCol5, dulcesCol6, dulcesCol7])

		if (typeof index === 'number') {
		var dulcesRow = $([dulcesCol1.eq(index), dulcesCol2.eq(index), dulcesCol3.eq(index), 
			dulcesCol4.eq(index), dulcesCol5.eq(index), dulcesCol6.eq(index), dulcesCol7.eq(index)
			])} else {
				index = '';
			}

		if (arrayType === 'columns') {
		return dulcesColumns;
			} else if (arrayType === 'rows' && index !== '') {
				return dulcesRow;
				}
	}

//Array filas
	function dulcesRows(index) {
		var dulcesRow = dulcesArrays('rows', index)
		return dulcesRow;
	}
//Array columnas
	function dulcesColumns(index) {
	var candyColumn = dulcesArrays('columns')
	return dulcesColumn[index];
	}

})