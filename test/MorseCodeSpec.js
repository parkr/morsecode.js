var MorseCode = require("../morsecode");
var converter = new MorseCode();

describe("morsecode.js", function(){

    it("is a thing", function(){
        expect(MorseCode).toBeDefined();
    });

    describe(".translate()", function(){

        describe("translating to morse code", function() {

            var translationOfNathan = "_ . . _ _ . . . . . _ _ .";
            var translationOfNathanAngelo = "_ . . _ _ . . . . . _ _ . . _ _ . _ _ . . . _ . . _ _ _";

            it("translates lowercase single words properly", function() {
                expect(
                  converter.translate("nathan")
                ).toBe(
                  translationOfNathan
                );
            });

            it("translates lowercase phrases properly", function() {
                expect(
                  converter.translate("nathan angelo")
                ).toBe(
                  translationOfNathanAngelo
                );
            });

            it("translates mixed-case single words properly", function() {
                expect(
                  converter.translate("Nathan")
                ).toBe(
                  translationOfNathan
                );
            });

            it("translates mixed-case phrases properly", function() {
                expect(
                  converter.translate("Nathan Angelo")
                ).toBe(
                  translationOfNathanAngelo
                );
            });

            it("translates uppercase single words properly", function() {
                expect(
                  converter.translate("NATHAN")
                ).toBe(
                  translationOfNathan
                );
            });

            it("translates uppercase phrases properly", function() {
                expect(
                  converter.translate("NATHAN ANGELO")
                ).toBe(
                  translationOfNathanAngelo
                );
            });

            it("translates punctuation correctly", function(){
                var subject = converter.translate("Hello, World");
                expect(/,/.test(subject)).toBe(true);
                expect(subject).toBe(
                  ". . . . . . _ . . . _ . . _ _ _ , . _ _ _ _ _ . _ . . _ . . _ . ."
                );
            });

        });

    });

});
