function main(){
    var input = document.getElementById("inputColor");
    var color = input.value;
    var lowerColorName = color.toLowerCase();
    
    if(lowerColorName == "grün"){
        alert("Du kannst fahren!");
    } else if(lowerColorName == "orange"){
        alert("Du darfst anfahren oder musst bremsen!");
    } else if(lowerColorName == "rot"){
        alert("Du musst anhalten!");
    } else {
        alert("Das ist keine gültige Ampel-Farbe!");
    }
}