# JavaScript Core

* Linguagem de programação que roda no Navegador do usuário (front-end)
    * Se você clicar em algum botão de página e aparece uma janela. Isso é o
    JavaScript
    * Alteração do site do aplicativo, confrome a intereção do usuário

* Roda também no computador (back-end)

## O que podemos fazer ?

* Podemos criar aplicações web, mobile (React Native), desktop (Electron)
* Empresa famosas que usam
    * Facebook  (Instagram, Whatsapp)
    * Google (Youtube, Gmail, Drive)
    * Uber
    * Netflix
    * Tiktok

* 99.99% dos sites na web usam javaScript
* Linguagem obrigatória para quem program o Front-end WEB

## Como vai Funcionar a dinâmica do curso?

- Treino de futebol
- Treino de artes marciais

* Conceitos e fundamentos
* Prática
* Revisão


# A importância da Sintaxe

* Toda linguagem tem
* Uma boa comunicação necessita de uma boa sintaxe
* 82% dos erros para iniciantes programação

```js
    console.log("Hello World!")
```

# Comentar codigo

Para comentar seu código no JS, pode se usar // antes da linha,
para definir aquela linha inteira, para comentar mais de uma linha,
pode se usar /* no começo do comentario e um */ no final. comentarios
não são executados, mas são mostrados para quem visualiza o código.

```js
   // Aqui temos um comentario 
   
   console.log("Hello World!!")

    /* console.log("hellow")
    console.log("hello2") */ 
```

# Tipos de dados

* Gramática
    * Elementos da linguagem e suas combinações
    * A arte de falar e escrever corretamente

* Vocabulário
    * Conjunto de termos e expressões
    * Agrupamento de palavras

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos Continuar aprendendo, para crescer nosso vocabulário.

## Como vai ser a dinâmica do aprendizado ?

* Conceitos e escrita 

> Vamos aprender os tipos de dados mais utilizados na linguagem
    * Você sabia que é possivel de aprender 80% de uma lingua nova, com
    cerca de 20% do vocabulário? (até menos)


# Tipos de dados

Conforme o ECMAScript standard temos 9 tipos de dados:

* Data type
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

## Primitivos

* String
* Number
* Boolean
* undefined
* Syboml
* BigInt

## Estruturais

* Object
    * Array
    * Map
    * Set
    * Date
    * ...
* Function

## Primitivo Estrutural / Structural Root Primitive

* null

## String

* O tipo de dados String consiste em uma cadeia de caracteres, ou seja textos.
    * Para denotar string no JS são usados aspas duplas (""), aspas simples('')
    template literals ou template strings (``)

* Template literals permitem textos multilinhas e expressões de linguagem com os caracteres ${}.

Exemplo:

```js
    console.log(`A soma de duas unidades é ${1+1}`)
```

Já as outras não, por exemplo:

```js
    console.log("Isso é um texto")
```

## Number

* No JS temos 4 tipos de números, os inteiros (8), os reais ou float (83.1), o Not a Number (NaN) e o infinito (infinity).

```js
    console.log(33)

    console.log(12.5 + 12)

    console.log(12.5 / 12)

    console.log(12.5 * 12)

    console.log(12.5 * "asdf")

    console.log(infinity)
```

## Boolean

* No JS, um dado boolean pode ter apenas 2 valores, sendo eles, verdadeiro (true) e falso (false).

```js
    console.log(false)
    console.log(true)
```

## Undefined vs Null

* No JS temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos. A difrença dos dois é que undefined é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.

```js
    console.log(null)

    console.log(undefined)
```

## Object

* O tipo de dados Object é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado com os caracteres {}, atributos e métodos com nome:valor . Por exemplo {nome: "João", idade: 20}.

```js
    console.log({
        name: "revolt",
        idade: 37,
        andar: function() {
            console.log('andar')
        }
    })
```

## Array (Vetores)

* O tipo de dados Array, ou vetor, também é estrutural, consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [], por exemplo: ["Leite", "Ovos", "Manteiga", 1,2]

```js
    console.log([
        "Leite",
        "Ovos",
        "Manteiga",
        1,
        2,
        3
    ])
```

# Variáveis

* Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou indentificadores. Para criar uma variavel, podemos usar uma das palavras reservadas: var, let e const, por exemplo:

```js
    var clima = "quente"
```

onde var é a palavra que simboliza a criação da variável, clima é o nome da variavel, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" pode ter seu valor mudado, já a const não

* Nomes simbólicos para receber algum valor
* atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    8 const

```js
    var clima = "quente"
    //Reatribuição de valor VVVV
    clima = "frio"
    console.log(clima)


    let clima = "quente"
    clima = "frio"
    console.log(clima)

    const altura = "media"
    //const tem seu valor imutavel, logo não pode ser alterado posterior mente
    console.log(altura)
```

## Tipos dinâmicos

O JS é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da varável

# Scope

* O Scope ou Escopo determina a visibilidade de uma variável em um código, e para enteder scope precisamos primeiramente enteder block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variáveç declarada com var poderá ser usada em todo o código.

* Escopo determina a visibilidade de alguma variavel no JS

# Block statement

```js
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var

* var é global e, também local
* hoisting, elevação

```js
    //var é global e poderá funcionar fora de um escopo de bloco
    console.log('> existe x antes do bloco? ', x)

    {
        var x = 0
    }

    console.log ('> existe x depois do bloco? ', x)
```

## let e const

* Diferente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode ser alterar o valor em um escopo e o valor irá persistir no escopo de criação.

```js

    {  
        let y = 0 
        console.log('> existe y antes do block? ', y)
    }
```

## Para criar nomes

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especias: $ -
    * Iniciar com letras
    * Colocar acentos
    * Letras maísculas e minúsculas fazem diferença

- Não posso:
    * Inicair com números
    * Colocar espaços vazios no nome

- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês


## Concatenando e interpolando variáveis

* É possível concatenar strings com o operador +, por exemplo: console.log('o ' + name + ' tem ' + age + ' anos.') desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código. Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, usando crase para o texto e ${} para denotar uma variável, por exemplo console.log(O ${name} tem ${age} anos.) o resultado deste comando será o mesmo texto do anterior.

# Revisando para exercicio 

```js
// Variáveis e tipos de dados
// declaração or declaration
var name

// assignment or atribuição de valores
name = "Benjamim"

// que tipo de dado foi colocado na variavel

console.log(typeof name)

// agrupamento de declarações 
let age, isHuman

age = 40
isHuman = true

// multiplos argumentos na função
// console.log(name, age, isHuman)

// escirta de texto + variáveis
// cocatenando 

console.log('o ' + name + ' tem ' + age + ' anos. ')
```



 * interpolando valores com template literals or template strings
```js

   
    console.log(`o ${name} tem ${age} anos.`)
```

```js

    // Object

const person = {
  name: 'benjamim',
  age: 24,
  weight: 80,
  isAdmin: true
}

console.log(person)
console.log(person.age)
console.log(`${person.name} tem ${person.age} anos`)

```


## Arrays revisão

* Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo: const animals = [ "Lion", "Monkey" ], para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: console.log(animals[0]). Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, por exemplo: animals.length.

```js

    const animals = [
  'benjamim',
  'lion',
  'bat'
]

    console.log(animals[1])
    console.log(animals.length)
```


# Functions

* Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à ser executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.

Exemplo:

```js
    //Criar um aplicativo de frases motivacionais
    
    //declaration - declaração da função
    // function statement
    

```

* Para fazer utilização da função, precisamos chamar ela dentro do codigo para ser executada.

    //executar a função
    //rodar, chamar, invocar
    // execute, run, call, invoke

```js
    function createPhrases() {
        console.log('Estudar é muito bom')
        console.log('amem fé em deus')
        console.log('100 massagem')
    }
    
    createPhrases()

```

## Argumentos e parâmetros

* Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

```js
    // function expression
    // funciton anonymous

    // parametros (paraments)
    const sum = function(number1, number2) {
        console.log(number1 + number2)
    }

    sum(2, 3)
```

## Retornando valores dentro da função

* Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

```js
    // function expression
    // funciton anonymous

    // parametros (paraments)
    const sum = function(number1, number2) {
        let total = number1 + number2
        return total
    }

    let number1 = 52 
    let number2 = 10241 

    console.log(`o número 1 é ${number1}`)
    console.log(`o numero 2 é ${number2}`)
    console.log(`a soma é ${sum(number1, number2)}`)
```

## Outra maneira de entender funções 

* Uma outra forma de entender funções por meio de um exemplo de liquidificador.

```js

// função como se fosse o liquidificador

    function fazerSuco(fruta1, fruta2) {
        // Vai me retorna os dois elementos juntos
        return fruta1 + fruta2
    }

    // lugar onde vai ser jogado o "suco"

    const copo = fazerSuco('banana', 'maçã')

    // Onde o "suco" irá aparecer 

    console.log(copo)
```

## Function scope

* Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

```js
    let subject = 'create video'
    function createThink(subject) {
        subject = 'study'
        return subject
    }
    
    console.log(createThink(subject))
    console.log(subject)
```

## Function Hoisting

* O JS possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declaração de funções. Porém isso não acontece dentro variáveis.

```js
    sayMyName();

    function sayMyName() {
        console.log('Benjamim')
    }
```

## Arrow Function

* Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: () => { código a ser executado }, chamada de Arrow Function.

```js
    const callMyName = (name) => {
        console.log(name)
    }

    callMyName('Benjamim')
```

## Callback Function

* Uma callback function é uma função que está sendo passada para outra função como parâmetro.

```js 
    function thisIsMyName(name) {
        name()
    }

    thisIsMyName(
        () => {
            console.log('benjamim')
        }
    )
```

## Function() constructor

* Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas caracteristicas que são criadas na função, usando a palavras reservada this para se referir ao objeto sendo criado, por exemplo:

* Expressão new
* criar um novo objeto
* this keyword

```js
    function Person(name) {
        this.name = name
        this.walk = () => {
            return this.name + " está andando"
        }
    }
    const benjamim = new Person("Benjamim")

    console.log(benjamim.walk()) 
```

# Prototype

* O JS possui uma caracteristica chamada Prototype, que é uma série de funcionalidades e atribuitos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

* prototype-based language
* prototype chain
* __proto__

# Type conversion vs Type coersion

* Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com método Number(), já type coersion é uma mudança de tipos feita pelo próprio JS, implicitamente, por exemplo quando você tenta swomar um número na forma string com um número do tipo número.

```js
    // Type coersion
    console.log('9' + 5)
    // Type conversion
    console.log(Number('9') + 5)
```

## Strings em números

* É possivel transformar números em formato de string através do método Number() e números em formato number em string usando o método String().

```js
    // De string para number
    let string = "123"
    console.log(Number(string))
    // De number para string
    let number = 321
    console.log(String(number))
```

## Contando caracteres e digitos

* Para contar a quantidade de caracteres em uma string é possivel usar o método length(), também é possíve contar a quantidade de algarismo em um número transformando o número em string e usando o mesmo método.

```js
    let word = "paralelepipedo"
    console.log(word.length)

    let numero = 341
    console.log(String(numero).length)
```

## Casas decimais

* Para determinar uma quantia de casas decimais de numero pode-se usar o metodo toFixed() colocando como argumento quantas casas decimais o numero tera. Para mudar a formatação do numero de separado por ponto para separado por virgula é possivel usar o metodo replace(".", ","). O resultado final sera do tipo string, e a conversão para o tipo numero não sera possivel por que a virgula não é considerada parte de um numero.

```js
    let numerin = 101.3123
    console.log(numerin.toFixed(2).replace(".", ","))
```

## Maiúsculas e minúsculas

* Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.

```js
    let word = "Programar é top"
    console.log(word.toLowerCase())
```

## Separando strings

* Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

```js
    let phrase = "Eu quero viver o Amor!"
    let myArray = phrase.split(" ")
    let phraseWithUnderScore= myArray.join("_")
    console.log(phraseWithUnderScore)
```

## Encontrando palavras em frases

* Para verificar se um texto possui uma palavra especifica, podemos usar o modetodo includes(), passando como agrumento a palavra a ser verficada, que retorna um valor true se encontrar palavra, e falso se nao, lembrando sempre que o metodo é case sensitive.

```js
    let phrase = "Eu quero viver o amor!"
    console.log(phrase.includes("amor"))
```

## Criando array com construtor

Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

```js
    let myArray = new Array('a', 'b', 'c')
    console.log(myArray.length)
```

## Strings para arrays

* Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer")).

```js
    let word = "dedo"
    console.log(Array.from(word))
```

## Manipulando arrays

* Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

```js
    let techs = ["html", "css", "js"]

    // Adicionar um item no fim
    techs.push("nodejs")
    // adicionar um item no começo
    techs.unshift("sql")
    //romever do fim
    techs.pop()
    // remover do começo
    techs.shift()
    //pegar somente alguns elementos do array
    console.log(techs.slice(1, 3))
    // remover 1 ou mais itens em qualquer posição do array
    techs.splice(1, 2)
    // encontrar a posição de um elemento no array
    let index = techs.indexOf('css')
    tech.splice(index, 1)


console.log(techs)
```

# Expressões e operadores

* Expresssões são bem tranquilas, porque expressões são qualquer linha de código que resolve alguma coisa no JavaScript, um exemplo é a expressão:

```js
    let number
```
Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.

* Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula), o final de uma expressão é facultativa, mas em algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

* Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:

```js
    let number = 1
    (function(){
        console.log('alo')
    })()
```
Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

* Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.

```js
    /* unário */
    let number = 1

    console.log(++number)

    // Binario
    let number = 1

    console.log(number + 1)

    // ternario
    console.log(true ? 'alo' : 'nada')
```
Como você pode observar, temos no unário um elemento, no binário dois elementos e no ternário três elementos.

## New

* A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

Um exemplo de seu uso é:

```js
    let date = new Date('2020-12-01')
    console.log(date.__proto__)
```

## Typeof delete

* Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

Exemplos de uso:

```js
    const person = {
        name: 'benjamim',
        age: 24,
    }

    delete person.age

    console.log(person)
```
Nesse caso estamos deletando a propriedade age do objeto person.

```js
    console.log(typeof "benjamim")
```

## Operadores aritméticos

* Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

O operador de multiplicação é o * (asterisco);

O operador de divisão é a / (barra);

O operador de soma é o + (positivo);

O operador de subtração é o - (negativo).

Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

```js
    // resto da divisão: sinal %
    let remainder
    remainder = 11 % 9
    console.log(remainder)

    // incremento; sinal ++
    let increment = 0

    console.log(++increment)
    console.log(increment)

    // decremento: sinal --
    let decrement = 0
    decrement--
    console.log(decrement)

    // exponencial: sinal **
    console.log(2 ** 3)
```

```js
    // Multiplicação
    console.log(3.2 * 5)

    // divisão
    console.log(32 / 2)

    // soma
    console.log(23 + 312)

    //subtração
    console.log(2002 - 2312)
```

## Grouping operator

* Vamos falar sobre um operador que agrupa expressões, os parênteses.

* Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

```js
    let total = 2 + 3 * 5
    console.log(total)
    //com essa precedência, nosso resultado é 17.

    let total = (2 + 3) * 5
    console.log(total)
    // o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.
```

## Operadores de comparação igual a e diferente de

* Operadores de comparação, irá comparar valores e retornar um Boolean como resposta á comparação.

```js
    let one = 1
    let two = 2
```

== Igual A:

```js
    console.log( two == 1 )
    console.log( one == "1" )
```

!= Diferente de:

```js
    console.log(one != two)
    console.log(one != 1)
    console.log(one != "1")
```

## Operadores de comparação estritamente igual e estritamente diferente

* Ele irá comparar os valores e tipos do elemento

```js
    let one = 1
    let two = 2
```

=== Estritamente igual A:

```js
    console.log( one === "1")
    console.log(one === 1)
```

!== Estritamente Diferente de:

```js
    console.log( two !== "2")
    console.log( two !== 2 )
```

## Operadores de comparação maior e menor (igual)


* > Maior que
```js
    let one = 1
    let two = 2

    console.log(one > two)
```

* >= Maior igual a 
```js
    let one = 1
    let two = 2

    console.log(one >= 1)
    console.log(two >= 2)
```

* < Menor que
```js
    let one = 1
    let two = 2

    console.log(one < two)
```

* <= Menor igual a
```js
    let one = 1
    let two = 2

    console.log(one <= two)
    console.log(one <= 1)
    console.log(one <= 0)
```

## Operadores de atribuição

* Veremos nesta aula sobre operadores de atribuição. Quando falamos em atribuição, queremos na verdade dizer assignment, que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.

```js

    // Operadores de atribuição (Assignment)
    let x

    // assignment normal:
    x = 1

    // addition assignment (adição):
    x += 2

    // subtraction assignment (subtração):
    x -= 1

    // multiplication assignment (multiplacação):
    x *= 2

    // division assignment (divisão):
    x /= 2

    // exponetiation assignment (exponenciação):
    x **= 2

    // remainder assignment (resto de divisão):
    x %= 2
    
    console.log(x)

```

## Operadores lógicos

* - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

Operadores: 

And &&
Or ||
Not !


```js

let pao = true
let queijo = true

console.log(pao && queijo) //se sim para os dois itens(True em ambas variaveis), retorna TRUE, caso não houver(false em qualquer uma das variaveis) 1 item resulará em FALSE


console.log(pao || queijo) // Se houver(True em algum) 1 ou outro, retorna em TRUE, caso não houver(False em ambos) nenhum dos dois retorna em FALSE

console.log(!pão) // Se o valor for true, se torna false apartir do momento que você nega ela(!)

```

## Operador condicional ternário

* Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

Funciona da seguinte forma;

```js

// condição ? valor1 : valor2

let pao = true
let queijo = true

const niceBreakFast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakFast)

```

```js

let age = 24
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

```

## Operadores para string

* Temos também os string operators, os operadores de string, e nós até já vimos um desses antes, o comparison operator, ou ==, para os mais íntimos.

Agora vamos ver sobre a concatenação, que é o retorno da união de duas strings.

Seu símbolo é o de + (positivo), e seu uso é simples, algo próximo de:

```js

console.log('a' + 'a')
// nesse caso, o retorno da string seria aa.

```

## Falsy e truthy

* O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

```js

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( NaN ? 'verdadeiro' : 'falso' )

```

* já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

```js

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' )

```

## Precedência dos operadores

* Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

```js

// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 

```

# Controle de fluxo da aplicação

* Nas próximas aulas falaremos sobre o controle de fluxo de nossa aplicação. O fluxo padrão vai linha a linha executando todas as linhas, mas nós podemos alterar isso com o que vamos aprender neste módulo.

## If e Else

*Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

Sua sintaxe é simples, como pode ver a seguir:

```js

if (condição) {
    //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}

```

* O exemplo utilizado pelo professor no vídeo é o seguinte, acompanhe para poder visualizar o processo até chegarmos nesse código.

```js

let temperature = 36.5

if(temperature >= 37.5) {
    console.log('febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('febre moderada')
} else {
    console.log('Saudável')
}


```

## Switch

* Vamos usar uma declaração chamada switch, que tem um papel muito similar ao if e ao else if, vistos na aula passada, porém a estrutura é bem diferente, e aqui veremos essa estrutura.

```js

let expression = 'a'

switch (expression) {
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo para b
        console.log('b')
        break
    default:
        console.log('default')
        break
}



```

* Temos também a calculadora que o professor construiu no vídeo:

```js

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))

```

## Throw e Try/Catch

* Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

```js

function sayMyName(name= '') {
    if (name === '') {
        throw 'nome é obrigatorio'
    }

    console.log('depois do erro')
}


try {
    sayMyName('benjamim')

} catch(e) {
    console.log(e)
}
```

## For

* A estrutura de repetição for tem a seguinte sintaxe:

```js

// for(inicialização de uma variável; condição de continuação para o loop; expressão final)

//break - para a execução do loop
//continue - pula a execução do momento

for(let i = 0; i < 10; i++) {
    console.log(i)
}

```

## While

* A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.



```js

let i = 0;

while(i < 10) {
    console.log(i)

    i++;
}

```

## For of

* O loop for...of percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

```js

let name = "benjamim"
let names = ["benjamin", "benjamim", "benjamin15"]

for(let char of name) {
    console.log(char)

}

```

## For in

```js

let person = {
    name: "benjamim",
    age: 24,
    weight: 424
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}

```


# Revisão 

## Sintaxe e boas praticas


```js
    // ponto e virgula é facultativo
    const myConst = "constante";

    // escrever com calmelCase
    const myConst2 = "constante2"

    // procurar escrever código inglês
    // parar treinar, aumentar as oportunidades futuras

    function doSomething(myArgument) {}
```
## Variáveis

Const = não reatribui valor
let = pode mudar
var 

## Tipos de dados

String
Number
boolean
Undefined
null

## Estrutura de dados

```js

// array
const myArray = [1, 2, "a", "b", true]

// Obeject
const myObjetc = { property: "value" }

```

## Funções 

```js

// 1. criação e tipos de funções
// name
function myFunction() {}

// Anonymous
const myFunction = function() {}

// Arrow
const myFunction = () => {}

// arguments & return
function sum(a, b) {
    return a + b
}

const sum = (a, b) => a + b

// 2. execução
myFunction()
sum(1, 2)

```

## Fluxo de aplicação

```js

// if, else if, else
const isRainning = true
if (true) {
    alert("tachovendo")
} else {
    alert("dia limpo")
}

// switch
const water = "com gas"
switch(water) {
    case "com gas":
        alert("essa agua é com gas")
        break
    case "sem gas":
        alert("essa agua é sem gas")
        break
    default:
        alert("cade minha agua?")
}

```

## Estrutura de repetição 

```js

let play = true
while(play) {
    // fazer algo até o play ser falso
    // criar uma lógica para o play se tornar falso
    // se não, loop eterno
}

// for (tradicional)
let text = "abc"
for (let i = 0; i < text.length; i++){
    alert(text[i])
}

for (let char of text)
    alert(char)

```

## Operadores

```js

() // group operator 

// matematicos
* // mult
** // exponenciação
/ // divisõo
% // resto da divisão
+ // somar
- // subtrair

// logicos
&& // e lógico
|| // ou logico
! // não logico

// comparação - relacional
> // maior que
< // menor que
>= // maior igual
<= // menor igual
== // igualdade
=== // igual no valor e do mesmo tipo (estritamente igual)
!= // desigualdade 
!== // diferente no valor ou do tipo (estritamente diferente)

// Atribuição
= // atribuição de valor
*= // multiplicação e atribuição de valor 
/= // divisão e atribuição de valor
+= // soma e atribui valor
-= // diminui e atribui


// outros operadores/expressões

typeof // tipo do dado
++ // incremento
-- // decremento
{} // objeto vazio ou bloco de código
[] // array vazio
, // separa elementos de um array, objeto ou criação de multiplas variáveis

```