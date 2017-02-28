# Language Translator

Represent a small bilingual lexicon as a Javascript object. Each member of the team will build a JavaScript module that will convert text entered into an input field to the language that they choose.

### Project Parameters:

1. Languages chosen by the team:
	- Esperanto
	- French
	- German
	- Italian

1. HTML file that has:
	- `<textarea>`
	- `<select>` element with an option for each language
	- `<button>` with a label of "Translate"
	- an empty DOM element into which the translated text will be inserted.
1. The team must discuss and choose a single variable name that will hold all of the logic that the team creates
	- The team decided on "Language" for our variable
1. Each team member will create one JavaScript file that contains one IIFE. Each teammate's IIFE will augment the other teammates' IIFEs.
1. The lexicon should be a private variable that cannot be accessed by the other team member's module except through an accessor (getter) method.
1. Each IIFE should expose, in its public interface, a method named `setLang{chosen language}();` that accepts a single argument. That argument's value should be the text entered in by the user. The method should return the translated text.
1. The main.js file handles all DOM interactions and calls the methods from the IIFEs.

#### Screenshot of our browser view:
![translator homepage screenshot](https://raw.githubusercontent.com/nss-evening-cohort-05/iife-translator-codemonkeys/master/Screen%20Shot%202017-02-27%20at%206.21.51%20PM.png)

#### Pre-planning design of function structures
![pre-planning discussion](https://raw.githubusercontent.com/nss-evening-cohort-05/iife-translator-codemonkeys/master/iifewhiteboard.jpg)

######HOW TO RUN:
```
1. git clone https://github.com/nss-evening-cohort-05/iife-translator-codemonkeys
2. cd iife-translator-codemonkeys
3. npm install http-server -g
4. http-server -p 8080
```
######CONTRIBUTORS:
- Andrea
- Matt
- Anessa
- Dwayne
- Isabel



