var Language = (function(oldLanguage){
	var italian = {"that":"ci&ograve;", "which":"che", "doesn't":"non mi", "kill":"uccide mi", "makes": "rende", "me":"pi&ugrave;", "stronger":"forte"};
	
	oldLanguage.setUserInput = function(userInput){
	var newPhrase = userInput.split(" ");
	return newPhrase;
};
	oldLanguage.setItalian = function(array){
		var translated = [];
		for (var i = 0; i<array.length; i++) {
			var keyValue = array[i];
			translated.push(italian[keyValue])
		}
		return translated;
	}
	return oldLanguage;
})(Language || {});