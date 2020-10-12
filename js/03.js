// Complete the method/function so that it converts dash/underscore 
// delimited words into camel casing. The first word within the output 
// should be capitalized only if the original word was capitalized (known 
// as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function camel(text) {
    let dash = text.includes('-');
    let underscore = text.includes('_');
    if(dash === true) {
        console.log('tiene dash');
    } else if (underscore === true) {
        console.log('tiene underscore');
    } else {
        if(dash === false){
            console.log('no tiene dash');
        } else if (underscore === false) {
            console.log('no tiene underscore');
        }
    };
};

camel('the_stealt_hwarrior')