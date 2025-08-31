# Element e Node
 
* As tags HTML, quando usadas pela DOM, podemos chamar de **node** (nô) ou de **element** (elemento)
 
```js

// Pegando um elemento
const h1 = document.querySelector('h1') // HTML Element

// Pegando vários elementos
const links = document.querySelectorAll('a') // NodeList

```

## Recebendo e modificando valores

Podemos pegar qualquer valor das tags e, também, alterar eles.

```js

// innerText
console.log(h1.innerText)

// innerHTML
console.log(h1.innerHTML)

// alterando o texto (ou o HTML)
h1.innerText = "Novo título"

```

## Alterando estilos

* Podemos alterar estilos ou adicionar classes em elementos

```js

// alterando o estilo
h1.style.backgroundColor = "red"

// adicionando classes
h1.classList.add('hide')

// removendo classes
h1.classList.remove('hide')

// alterando entre classes
h1.classList.toggle('hide')

```

## Event-driven

* A DOM é direcionada a eventos `Event-driven`. Significa que ela poderá reagir a qualquer tipo de evento relacionado á página.

* Podemos entender em 2 fases
    * A ocorrência do evento e reação à ocorrência

### Eventos

* Ações que acontecem na página, site ou aplicação 

* Carregamento do documento, aparição de elementos na tela

* Modificação de propriedades da página (Largura, altura, scroll)

* Interação com sons, imagens, vídeos

* Outros

### Reações

* O sistema poderá executar reações às ações. Executar uma função sempre que determinada ação acontecer 

**EXEMPLO**

```js

const button = document.querySelector()

```

# ES6 Modules

* Sintaxe que entrou no JS no EcmaScript 6 (ES6)

* Disponibilizar qualquer tipo de dado entre arquivos

* Separar código em diversos arquivos

* Isolar escopo de código

## Preparando o ambiente para usar ES Modules

* Numa nova pasta, vamos criar os arquivos

    `index.html, main.js, utils.js`

* Prepare o index.html

    Crie a estrutura e adicione o `main.js` com a tag `<script>`

* Habilite a tag <**script**> para utilizar a sintaxe

    Adicionaremos o atributo `type="module"` á tag script

```js

// para usa, precisamos adicionar o atributo
// type="module" no nosso script principal

<script src="main.js" type="module"></script>

```

## Import e export simples

* Podemos importar qualquer arquivo e ele será executado imediatamente, como uma função é executada. 

```js

// utils.js
const message = "mensagem" //essa variavel fica isolada nesse arquivo
alert(message)

// main.js
import './utils.js' // nessa linha ele importa e ja executa o arquivo

```

## Default import e export

* Exportamos qualquer tipo de dado e, ao importar, podemos dar qualquer nome.

```js

// utils.js
export default "algum dado"

// ou, para um dado já existente 
const text = 'alguma coisa'
export default text

// main.js 
import qualquerNome from './utils.js'

```
    Somente 1 `default` por arquivo.


## Named export

* Exportamos uma variável ou função e, ao importar, devemos colocar o mesmo nome.

```js

// utils.js
export const today = Date.now()

// exportando um valor já existente
const double = number => number * 2
export { double }

// exportando diversos
// export { today, double }

// main.js
import { today } from './utils.js'

```
    É possivel ter múltiplos exports

## Misto (named e default)

* Poderemos usar um default export por arquivo e um (ou mais) named export.

```js

//utils.js
const date = new Date()
const greeting = name => `hello ${name}`

export default function (argument) {
    console.log(date, greeting(argument))
}
export { date, greeting }

// main.js
import funcaoPadrao, { date, greeting } from './utils.js

```

## import as

* É possível renomear um ou mais dados que foram exportados.

```js

// utils.js
export function sum(a, b) {
return a + b
}

// main.js
import { sum as soma } from './utils.js'

```

## import * as

* Podemos importar todos os named exports e dar um nome padrão.

```js

//utils.js
export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b

// ou
// export { sum, multiply, subtract, divide }

//main.js
import * as calculator from './utils.js'

```
