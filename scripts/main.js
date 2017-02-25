// var userInput = document.getElementById("enter-text").value;
var userInput = "kill me";
var myArray = Language.setUserInput(userInput);
var italianTranslated = Language.setItalian(myArray);
var output = document.getElementById("result");
console.log(myArray);
console.log(italianTranslated);
var button = document.getElementById("submit");
button.addEventListener("click", function(e){
	var selections = document.getElementById("radios").childNodes;
	for (var y = 0; y<selections.length; y++){
		if (selections[y].checked===true){
			if (selections[y].name ==="italian"){
				output.innerHTML = italianTranslated.toString().replace(/,/g, " ");
			
			} else if
		}
	}

})
