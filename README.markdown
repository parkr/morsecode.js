# morsecode.js

Cuz sometime you just want to speak in Morse Code with your best buds. Better do it in
JavaScript.

## Usage

### Node.js

```js
var MorseCode = require("./morsecode");
var morseConverter = new MorseCode();
morseConverter.translate("OMG HI");
// => "_ _ _ _ _ _ _ . . . . . . ."
```

### Browser

(For this one, add the necessary script tag to `morsecode.js`)

```js
// MorseCode is autoloaded to window.MorseCode
var morseConverter = new MorseCode();
morseConverter.translate("OMG HI");
// => "_ _ _ _ _ _ _ . . . . . . ."
```

## Tests

```bash
$ npm install -g jasmine-node
$ jasmine-node test
```

## License

MIT, do basically whatever you want. By [Parker Moore](http://parkermoore.de).
