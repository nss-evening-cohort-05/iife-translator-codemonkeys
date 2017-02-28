var Language = (function(oldLanguage){
	var millenial = {"that":"", "which":"", "doesn't":"&#128581;", "kill":"&#128128;","me":"", "makes":"&#8658;", "stronger":"&#128170;"};
	
	oldLanguage.setMillenial = function(array){
		var translated = [];
		for (var i = 0; i<array.length; i++) {
			var keyValue = array[i];
			translated.push(millenial[keyValue])
		}
		console.log(translated);
		return translated;
	}
	return oldLanguage;
})(Language || {});