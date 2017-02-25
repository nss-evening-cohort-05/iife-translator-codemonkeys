var Language = (function(oldLanguage){

	var germanWords = {
		//That which doesn't kill me makes me stronger.
		//Lo que no me mata me hace más fuerte 
		"That": "Lo",
		"which": "que",
		"doesn't": "no",
		"kill": "matta",
		"me": "me",
		"makes": "hace",
		"stronger": "mas fuerte"
	};

oldLanguage.setGerman = function(myArray){
	var translated = [];
	for (var x = 0; x < myArray.length; x++){
		var keyValue = myArray[x];
		translated.push(germanWords[keyValue]);
	};
	return translated;
};


return oldLanguage;

})(Language || {});