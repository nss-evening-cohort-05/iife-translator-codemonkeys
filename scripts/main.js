
var button = document.getElementById("submit");
button.addEventListener("click", function(e){
	var userInput = document.getElementById("enter-text").value;
	// var userInput = "kill me";
	var myArray = Language.setUserInput(userInput);
	var italianTranslated = Language.setItalian(myArray);
	// var spanishTranslated = Language.setSpanish(myArray);
	var germanTranslated = Language.setGerman(myArray);
	// var frenchTranslated = Language.setFrench(myArray);
	// var esperantoTranslated = Language.setEsperanto(myArray);
	var output = document.getElementById("result");
	var selections = document.getElementById("radios").childNodes;
	console.log(selections);
	for (var y = 0; y<selections.length; y++){
		if (selections[y].checked===true){
			if (selections[y].name ==="italian"){
				output.innerHTML = italianTranslated.toString().replace(/,/g, " ");
			} else if (selections[y].name==="spanish"){
				output.innerHTML = spanishTranslated.toString().replace(/,/g, " ");
			} else if (selections[y].name==="german"){
				output.innerHTML = germanTranslated.toString().replace(/,/g, " ");
			}else if (selections[y].name==="french"){
				output.innerHTML = frenchTranslated.toString().replace(/,/g, " ");
			}else if (selections[y].name==="esperanto"){
				output.innerHTML = esperantoTranslated.toString().replace(/,/g, " ");
			}
		}
	}

})
