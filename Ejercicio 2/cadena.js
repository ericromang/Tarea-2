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
    var result=0;
        for(var letterIndex in str){
            if(str[letterIndex].toLowerCase()== 'a' || str[letterIndex].toLowerCase()== 'e' || str[letterIndex].toLowerCase()== 'i'
            ||  str[letterIndex].toLowerCase()== 'o' || str[letterIndex].toLowerCase()== 'u')
                result++;
        }
        return result;
}
function consonantes(str){
    var result=0;
    str = str.replace(/\s+/g,'');
        for(var letterIndex in str){
            if(str[letterIndex].toLowerCase()!= 'a' && str[letterIndex].toLowerCase()!= 'e' && str[letterIndex].toLowerCase()!= 'i'
            && str[letterIndex].toLowerCase()!= 'o' && str[letterIndex].toLowerCase()!= 'u')
                result++;
        }
        return result;
}

module.exports.separar = separar;
module.exports.palabras = palabras;
module.exports.letras = letras;
module.exports.vocales = vocales;
module.exports.consonantes = consonantes;