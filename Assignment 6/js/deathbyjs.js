/*eslint-env browser*/

//STEP 1
/*function alphabet_order(str) {
    "use strict";
    return str.split('').sort().join('');
    //SPLITS STRING OBJECT INTO AN ARRAY VIA SUBSTRINGS
    //SORTS THE ARRAY : JOINS THE ARRAY INTO A STRING
    
}
window.console.log(alphabet_order("webmaster"));*/

//STEP 2
/*function uppercase(str) {
    "use strict";
    var array1 = str.split(' '); //SPLIT ARRAY INTO SUBSTRINGS
    var newarray1 = [];
    //CHARAT GETS SPECIFIC CHARACTER : UPPERCASE CAPITALIZES FIRST CHARACTER
    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    //JOINS THE SPLIT AND NEW ARRAY TOGETHER?
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));*/

//STEP 3
/*function vowel_count(str1) {
    "use strict";
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) //?
    {
        //CALLS STRING OBJECT OF A SPECIFIC VALUE 
        if (vowel_list.indexOf(str1[x]) !== -1) //-1 IF NOT FOUND
        {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));*/

//STEP 4
/*function makeid(l) {
    "use strict";
    var text = "";
    var char_list = "RCv1SBUCPmJkc2Y2nIi5L0FA"
    for (var i = 0; i < l; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
console.log(makeid(8));*/


//STEP 5
function Longest_Country_Name(country_name) {
    "use strict";
    return country_name.reduce(function (lname, country) {
            return lname.length > country.length ? lname : country;
        },
        "");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
