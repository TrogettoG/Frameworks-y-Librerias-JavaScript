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
		var dulcesColumn = dulcesArrays('columns')
		return dulcesColumn[index];
	}

//Colocar dulces en el tablero
	function checkBoard() {
		fillBoard();
	}

	function fillBoard() {
		var top = 6;
		var column = $('[class^="col-"]');
	
		column.each(function () {
			var dulces = $(this).children().length;
			var agregar = top - dulces;
			for (var i = 0; i < agregar; i++) {
				var dulcesType = randomInt(1, 5);
				if (i === 0 && dulces < 1) {
					$(this).append('<img src="image/' + dulcesType + '.png" class="element"></img>');
				} else {
					$(this).find('img:eq(0)').before('<img src="image/' + dulcesType + '.png" class="element"></img>');
				}
			}
		});

		validaciones();
	}

//Validacion de dulces del mismo tipo
	//Columnas
	function validacionColumn() {
		for (var a = 0; a < 7; a++) {
			var contador = 0;
			var dulcesPosition = [];
			var dulcesEPosition = [];
			var dulcesColumn = candyColumns(i);
			var comparisonValue = dulcesColumn.eq(0);
			var gap = false;

			for (var i = 1; i < dulcesColumn.length; i++) {
				var srcComparison = comparisonValue.attr('src');
				var srcDulces = dulcesColumn.eq(i).attr('src');
	
				if (srcComparison != srcDulces) {
					if (dulcesPosition.length >= 3) {
						gap = true;
					} else {
						dulcesPosition = [];
					}
					contador = 0;
				} else {
					if (contador == 0) {
						if (!gap) {
							dulcesPosition.push(i - 1);
						} else {
							dulcesEPosition.push(i - 1);
						}
					}
					if (!gap) {
						dulcesPosition.push(i);
					} else {
						dulcesEPosition.push(i);
					}
					contador += 1;
				}
				comparisonValue = dulcesColumn.eq(i);
			}
			if (dulcesEPosition.length > 2) {
				dulcesPosition = $.merge(dulcesPosition, dulcesEPosition);
			}

			if (dulcesPosition.length <= 2) {
				dulcesPosition = [];
			}

			dulcesCount = dulcesPosition.length;
			if (dulcesCount >= 3) {
				borrarDulcesColumn(dulcesPosition, dulcesColumn);
				setScore(dulcesCount);
			}
		}
	}

	function borrarDulcesColumn(dulcesPosition, dulcesColumn) {
		for (var i = 0; i < dulcesPosition.length; i++) {
			dulcesColumn.eq(dulcesPosition[i]).addClass('delete');
		}
	}

	//Filas
	function validacionRow() {
		for (var a = 0; a < 6; a++) {
			var contador = 0;
			var dulcesPosition = [];
			var dulcesEPosition = [];
			var dulcesRow = dulcesRows(j);
			var comparisonValue = dulcesRow[0];
			var gap = false;

			for (var i = 1; i < dulcesRow.length; i++) {
				var srcComparison = comparisonValue.attr('src');
				var srcDulces = dulcesRow[i].attr('src');

				if (srcComparison != srcDulces) {
					if (dulcesPosition.length >= 3) {
						gap = true;
					} else {
						dulcesPosition = [];
					}
					contador = 0;
				} else {
					if (contador == 0) {
						if (!gap) {
							dulcesPosition.push(i - 1);
						} else {
							dulcesEPosition.push(i - 1);
						}
					}
					if (!gap) {
						dulcesPosition.push(i);
					} else {
						dulcesEPosition.push(i);
					}
					contador += 1;
				}
				comparisonValue = dulcesRow[i];
			}
			if (dulcesEPosition.length > 2) {
				dulcesPosition = $.merge(dulcesPosition, dulcesEPosition);
			}

			if (dulcesPosition.length <= 2) {
				dulcesPosition = [];
			}

			dulcesCount = dulcesPosition.length;
			if (dulcesCount >= 3) {
				deleteHorizontal(dulcesPosition, dulcesRow);
				setScore(dulcesCount);
			}
		}
	}

	function deleteHorizontal(dulcesPosition, dulcesRow) {
		for (var i = 0; i < dulcesPosition.length; i++) {
			dulcesRow[dulcesPosition[i]].addClass('delete');
		}
	}

	function validaciones() {
		validacionColumn()
		validacionRow()
		if ($('img.delete').length !== 0) {
			//animacion borrar
		}
	}












})