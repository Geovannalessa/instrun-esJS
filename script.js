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
let ArraysManipulacao = function(){
    var creaFunc = ['Kelvin', 'Felipe', 'Teo', 'Coras']
    //console.log(`testando os arrays: ${creaFunc[0]},${creaFunc[1]}, ${creaFunc[2]} ` )
    console.log(creaFunc);
    var AddPrimeiro = creaFunc.unshift('Pedro') //adiciona no inicio
    var RemoveUlt = creaFunc.pop() // remove o ultimo
    var AddUlti = creaFunc.push('Shirley') //adiciona no final
    var RemovePrime = creaFunc.shift() //remove o primeiro
    var RemoveAlg = creaFunc.slice(0,2);
    var tem = creaFunc.includes('Coras') //retorna true/false se o nome tiver no array
    var quemVemPrimeiro = creaFunc.sort()
    //transformar array em string => não funcionou no codewares 
    var join = creaFunc.join();
    //filter busca, map transforma
    var novoArray = creaFunc.filter(( fn )=>{ return fn.length < 4 })
    var map = novoArray.map((r)=>{ return  r.toLocaleUpperCase(); })

    //creaFunc.forEach( (f)=> console.log(f) )
    //for(var i = 0; i < creaFunc.length; i++) console.log('\n '+ creaFunc[i])
    console.log(join);
    console.log(map);
    console.log("Nomes menores que 4 caracteres: " + novoArray);
    console.log('Os primeiros: '+ quemVemPrimeiro);
    console.log(tem);
    console.log(RemoveAlg);
    console.log(creaFunc);
}
let ObjetosManipulacao = function(){
    var pessoa = { temCasa: true }
    //funcao para mostrar todas as informações dos engenheiros
    let informacoes = function(){ console.log(`${this.nome}  ${this.sobrenome} + idade ${this.idade} anos - ${this.nacionalidade}`)};
    var engenheiros = [
        {
            nome: 'Joberto',
            sobrenome: 'Fani',
            idade: 39,
            nacionalidade: 'India',
            informacoes: informacoes //aqui só atribui que a propriedade informacoes irá conter o metodo
        },
        {
            nome: 'Jonas',
            sobrenome: 'Soares',
            idade: 24,
            nacionalidade: 'Tainlândia',
            informacoes: informacoes
        },
        {
            nome: 'João',
            sobrenome: 'Victor',
            idade: 13,
            nacionalidade: 'França',
            informacoes: informacoes
        }
    ];
    
    for (let i = 0; i < engenheiros.length; i++) {
        // aqui chama a função para executar
        engenheiros[i].informacoes();
    }
    
    //acessando o array e a propriedade e modificando
     engenheiros[2].nome = 'Sergio'

    //for in - mostrando tudo oq tem no obj
    console.log('\n')
    for(let i in engenheiros ){
        console.log(i, engenheiros[i]);
    } 

    console.log('\n')
    //analisando se tem a propriedade no objeto
    if( 'nome' in engenheiros[1] ){
        console.log('tem')
    }else{
        console.log('não possui')
    }
}
