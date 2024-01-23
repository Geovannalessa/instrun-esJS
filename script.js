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
let funcoes = function(){ 
    //Declarações de Funções
     function FuncoesNomeadas(){
       //essas funções podem ser declaradas antes/depois da escrita da função
       console.log("Funções nomeadas:" + '\n' + nomeDaFuncao() + '\n' + antesDeDeclarar());
       function nomeDaFuncao(){
         var mensagem = 'Hello World';
         return mensagem;
       }
       function antesDeDeclarar(){
         var mensagem = 'vamo ver se funciona e se tem a ver com o let e var ';
         let mensagem2 = 'andei sem rumo por ai'
         return mensagem + mensagem2;
       }
     }
     function ExpressaoDeFuncoes(){
       console.log("Expressão de Funções:")
   
       var funcao = function(){
         return 'amendoim';
       }
       console.log(funcao) // retorna o codigo da função
       console.log(funcao()) //retorna o que a função retorna
   
       // * quando uma variavel recebe uma função ela se torna uma função? SIM
       var mago = ()=>console.log('vingardio leviosa');
       mago();
    }
   
     // --- Expressão de função invocada imediatamente (IIFE) ---
     // -- Ela auto se chama - init()
     (
       function inicializador(){
         //alert('Hello World');
         PintarBackGround()
       }
     )();
   
     function PintarBackGround (){
       var body = document.getElementById('tudo')
       body.innerHTML += '✨'
     }
     FuncoesNomeadas();
     console.log('\n');
     ExpressaoDeFuncoes();
}
let fors = function(){
  var arrayEstados = ['MG', 'RJ', 'SP', 'GO', 'BA', 'SE', 'TO', 'AM']

  console.log('-----------------FOR-------------------');
  //FOR tradicional -> Para iterar sobre uma sequência conhecida de números. For (inicialização; condição; iteração) { ... }
  var inicio = 0;
  var condicao = arrayEstados.length;
  for(let i = inicio; i < condicao; i++){
    console.log('Estados: ' + arrayEstados[i])
  }

  console.log('-----------------FOREACH---------------------');
  //FOREACH -> Para executar uma função para cada elemento de um array. array.forEach(function(elemento) { ... })
  arrayEstados.forEach(estados => {console.log("estados: " +estados)});

  console.log('-----------------FOR OF----------------------');
  //FOR OF -> Para iterar sobre valores de coleções iteráveis (arrays, strings, etc.).  for (variavel of iteravel) { ... }
  for(let estados of arrayEstados){
    console.log('estados novamente: '+ estados)
  }

  console.log('-----------------FOR IN---------------------');
  //FOR IN -> para iterar objetos. for (variavel in objeto) { ... }
  var obj = {pais: 'Alemanha', capital: 'Berlim' };
  for(let p in obj){
    console.log(p +': ' + obj[p])
  }
}
fors()
funcoes()
   
//AJAX
//Consumir apo
//POO
//
   //IIFE
   
   /*var result = (
     function(){
       var fruta = 'jabuticaba';
       return fruta;
     }
   )();
   result;
   
   (
     function () {
       var abacaxi = 'y';
       console.log(abacaxi)
       return abacaxi;
   })();
   abacaxi;
   
   var result = (function() {
     var nome = "Matheus";
     return nome;
   })();
   alert(result)
   
   ArraysManipulacao()
   
   
   //transformou a string em array de acordo com os espaços
   var arrayString = string.slipt(' ');
   let inverso = '';
   
   //fazendo um loop no arrayString para fazer a validacao
   for(var i = 0; i < arrayString.length; i++){
     //validando para pegar as palavras maiores q 5
      if(arrayString[i].length > 5 ){
        for(j of arrayString){
          //inverter as palavras
          inverso = j + inverso;
        }
      }
   }
   
   function spinWords(string){
     var arrayString = string.slipt(' ');
     var inverso = "";
     var novoArray = arrayString.map((r)=>{
       if(r.length > 5){
         for(j of arrayString){
           inverso = j + inverso
         }
       }
     }) 
     var stringAgain = novoArray.toString();
     return stringAgain;
   }
   https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
   function spinWords(str){
     var arrayString = str.slipt(' ');
     
     let tamanho = arrayString.length;
   
     //fazendo um loop no arrayString para fazer a validacao
     for(var i = 0; i < tamanho; i++){
       // lendo cada palavra
       var palavra = arrayString[i];
       
       //validando para pegar as palavras maiores q 5
        if(palavra.length > 5 ) {
          for(var j = palavra.length - 1; j == 0; j--) {
            
          }
        }
     }
   }
   */
   
   function sim(str){
     var quantidade = str.length;
     var imparOuPar;
     var calculo = quantidade % 2 == 0;
     if(calculo != 0){
       imparOuPar = false;
       
       console.log('impar')
     } else{
       imparOuPar = true;
       console.log('par')
     }
     
     console.log('quantidade:'+ quantidade);
     console.log('-- ' + imparOuPar);
   }
   