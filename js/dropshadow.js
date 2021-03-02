var shadowstring = '';
var decaylength = 100;
var decaystrength = 1600;
var angle = 0.0;

for(var i=0; i<decaylength; i++){
    shadowstring += angle*i +'px '+i+'px rgba(138,3,3,'+((decaylength-i)/decaystrength)+'), ';
}
shadowstring = shadowstring.substr(0, shadowstring.length-2);

document.getElementById("longshadow").setAttribute("style", "text-shadow: " + shadowstring);