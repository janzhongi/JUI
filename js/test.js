	function clearX(){
		$("#show").html("0");

	}


	function test(){
		for(var i=0;i<100000;i++){
			$("#show").html(i);
		}
	}

	function circution(){
		var i=0;
		main(i);
		


	}
	function main (i){
			if(i<100){
				i = i + 1;
				$("#show").html(i);
				i = setTimeout(function() {
	                        main(i);
	                    }, 0);
			}else{
				clearTimeout(i);
			}
			

		}