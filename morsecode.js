var MorseCode = function() {
    this.theCode = {
        a: ". _",
        b: "_ . . .",
        c: "_ . _ .",
        d: "_ . .",
        e: ".",
        f: ". . _ .",
        g: "_ _ .",
        h: ". . . .",
        i: ". .",
        j: ". _ _ _",
        k: "_ . _",
        l: ". _ . .",
        m: "_ _",
        n: "_ .",
        o: "_ _ _",
        p: ". _ _ .",
        q: "_ _ . _",
        r: ". _ .",
        s: ". . .",
        t: "_",
        u: ". . _",
        v: ". . . _",
        w: ". _ _",
        x: "_ . . _",
        y: "_ . _ _",
        z: "_ _ . .",
        0: "_ _ _ _ _",
        1: ". _ _ _ _",
        2: ". . _ _ _",
        3: ". . . _ _",
        4: ". . . . _",
        5: ". . . . .",
        6: "_ . . . .",
        7: "_ _ . . .",
        8: "_ _ _ . .",
        9: "_ _ _ _ ."
    };

    this.translate = function(to_translate) {
        if (/[a-zA-Z0-9]+/.test(to_translate)) {
            return this.translateToMorseCode(to_translate);
        } else {
            return this.translateToAlphanumeric(to_translate);
        }
    };

    this.translateToMorseCode = function(to_translate) {
        var characters = to_translate.toLowerCase().split("");
        var morseCode  = this.theCode;
        return characters.map(function(letter){
            if(morseCode.hasOwnProperty(letter)) {
                return morseCode[letter];
            } else {
                return letter;
            }
        }).join("");
    };

    this.translateToAlphanumeric = function(to_translate) {
        return "NOT IMPLEMENTED ERROR ZOMG";
    };
};

module.exports = MorseCode;
