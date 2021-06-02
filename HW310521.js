//Exrcitiu 1
function variabila(variabila){
if(variabila > 0 && variabila < 5){
    return true;
}else{
    return false;
}
}
console.log("1. " + variabila(2));

//Exercitiu 2
let x = 3;
let anotimpul;
switch(x){
    case 1:
        anotimpul = "iarna";
        break;

    case 2:
        anotimpul = "primavara";
        break;

    case 3:
        anotimpul = "vara";
        break;

    case 4:
        anotimpul = "toamna";
        break;
    
    default:
        anotimpul = "anotimpul nu a fost gasit";
        
}
console.log(`2. ${anotimpul}`);

//Exercitiu 3
//metoda substr()
let linie = "aaa bbb ccc";
let unu = linie.substr(0, 3);
let doi = linie.substr(8, 10);
let mod1 = unu + " " + doi;
console.log("3.")
console.log(" a\) " + mod1);

//metoda substring()
console.log(" b\) " + linie.substring(0, 3) + " " + linie.substring(8, 11));

//metoda slice()
let linie1 = linie.slice(0, 3) + linie.slice(7,11);
console.log(` c) ${linie1}`);

//Exercitiu 4
let text = "I learn javascript!";
let index = text.indexOf("learn");
let length = text.length;
let replace = text.replace("javascript", "html");
console.log("4.");
console.log(` The index of \"learn\" is ${index}.`);
console.log(` The text length is ${length}.`);
console.log(` ${replace}`);

//Exercitiu 5
let site = "https://www.w3schools.com/js/default.asp";
let verify = site.startsWith("http");
console.log(`5. It is ${verify} that the text starts with \"http\".`)

//Exercitiu 6

function myZi(zi){
    switch(zi){
        case 1:
            return "Luni";
        break;

        case 2:
            return "Marti";
        break;

        case 3:
            return "Miercuri";
        break;

        case 4:
            return "Joi";
        break;

        case 5:
            return "Vineri";
        break;

        case 6:
            return "Sambata";
        break;

        case 7:
            return "Duminica";
        break;
        
        default:
            return "Ziua saptamanii nu a fost gasita.";
    } 
}
console.log("6. Astazi este " + myZi(3));

//Exercitiu 7
let txt1 = "";
let txt2 = "-";
for(let i = 1; i < 10; i++){
    txt1 += "-" + i;
}
console.log(`7. ${txt1}${txt2}`);

//Exercitiu 8
let random = "";
for (let i = 0; i < 10; i++){
   random += Math.floor(Math.random() * 10) + " ";
}
console.log(`8. ${random}`);





