function arrayDiff(iterable) {
    let retornado = [];
    let comas = [];
    let b = iterable.toString();
    let splitted = b.split("");
    if (typeof(iterable[1])=='number'){
        for (i = 0; iterable.length > i; i++){
            if (iterable[i] != iterable[i+1]){
                retornado.push(iterable[i]);
            }
        } 
    } else {
        for (i = 0; splitted.length > i; i++){
            if (splitted[i] != ','){
                if(splitted[i] != splitted[i+1]){
                    comas.push(splitted[i]);
                }
            }
        }
        for (i = 0; comas.length > i; i++){
            if (comas[i] != ','){
                if(comas[i] != comas[i+1]){
                    retornado.push(comas[i]);
                }
            }
        }
    }
    return retornado;
}


arrayDiff([1,2,2,3,3]);
arrayDiff(['a', 'b', 'b'])
arrayDiff('AAAABBBCCDAABBB') 
arrayDiff('ABBCcAD')         
arrayDiff([1,2,2,3,3])       