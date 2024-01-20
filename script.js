let StringManipulacao = function(){
    let frase = "Ganhei um caixa de bis obrigada coras";
    let fraseEspacado = "        aaaah       ";
    let replace = frase.replace('doendo', 'esquisito');
    let slice = frase.slice(0,3);
    let indexOF = frase.indexOf('doendo');
    let charAt = frase.charAt(14);
    let splitando = frase.split(' ');
    let trim = fraseEspacado.trim();
    let repeat = trim.repeat(3);
    let frase2 = "aaaaaaaaaaaaaaaaaaaaaaaaa"
    let aaa = frase2.replace(/a/g,'i') // /string/g g=global o replace ocorre só na primeira ocorrencia
    
    let inverso = '';
    for(i of frase){
        inverso = i + inverso;
    }

    console.log(inverso)
    console.log('* ' + aaa)
    console.log('repeat: ' + repeat)
    console.log('trim: ' + trim)
    console.log('slipt: ' + splitando);
    console.log('indexOF: ' + indexOF);
    console.log('charAt: ' + charAt);
    console.log('replace: ' + replace);
    console.log('slice: ' + slice)
}
