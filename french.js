

var Language = (function(oldLang){
	var french = {"that": "Ce qui", "which": "ne", "doesn't": "me", "kill": "tue pas", "me": "me", "makes": "rend", "me": "plus", "stronger": "fort"}


oldLang.setFrench = function(array){
var translated = [];
for (y = 0; y < array.length; y++){
	var keyValue = array[y];
	translated.push(french[keyValue])};
	return translated;
}
return oldLang;
})(Language || {});










// Ce qui ne me tue pas me rend plus fort.













// That which doesn't kill me makes me stronger.