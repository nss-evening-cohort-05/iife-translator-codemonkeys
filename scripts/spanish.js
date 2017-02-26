var Language = (function(oldLanguage) {

	var spanish = {
		"that": "lo",
		"which": "que",
		"doesn't": "no me",
		"kill": "mata",
		"me": "me",
		"makes": "hace",
		"me stronger": "más fuerte"
	}

	oldLanguage.setSpanish = function(array) {
		var translated = [];
		for (var i=0; i<array.length; i++) {
			var keyValue = array[i];
			translated.push(spanish[keyValue])
		};
	return translated;
	}

	return oldLanguage;
})(Language || {});