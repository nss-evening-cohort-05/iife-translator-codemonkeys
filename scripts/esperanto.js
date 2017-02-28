var Language = (function(oldLang) {

  // Private object variable to store the words of english phrase as keys and translated words as values
  var esparantoTranslation = {
                                "that" : "ke",
                                "which" : "kiu",
                                "doesn't" : "ne",
                                "kill" : "mortigu",
                                "me" : "mi",
                                "makes" : "fabrikas",
                                "me" : "mi",
                                "stronger" : "stroger"
					}

  // Pass english array to setEsperanto function to translate
  oldLang.setEsperanto = function(array) {
      var translated = [];

      for(y = 0; y < array.length; y++) {
        var keyValue = array[y]
        translated.push(esparantoTranslation[keyValue])
      };

      return translated;
    }

  // Return the new, augmented object with the new method on it
  return oldLang;
})(Language || {});
