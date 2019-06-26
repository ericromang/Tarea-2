function separar(str){
	return str.replace(/\s+/g,'').split("").reverse().join("") == str.replace(/\s+/g,'');
}
function palabras(str){
    return str.split(" ").length;
}
function letras(str){
    return vocales(str)+consonantes(str);
}
function vocales(str){
        return str.match(/[aeiou]/gi).length;
}
function consonantes(str){
    return str.match(/[bdfghjklmnñpqrstvxyz]/gi).length;
}

module.exports.separar = separar;
module.exports.palabras = palabras;
module.exports.letras = letras;
module.exports.vocales = vocales;
module.exports.consonantes = consonantes;