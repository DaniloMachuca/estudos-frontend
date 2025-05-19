<script setup>
import { reactive } from 'vue'

const nome = 'gian'
const meuObj = {
  nome: 'gian',
  filmeFavorito: 'Rocky',
}

function dizOla(nome) {
  return `${nome} diz oi`
}

const enderecoImgLink =
  'https://upload.wikimedia.org/wikipedia/pt/1/10/Link_arte_Hyrule_Warriors_Age_of_Calamity.png'

const enderecoImgZelda =
  'https://upload.wikimedia.org/wikipedia/pt/7/7d/Princesa_Zelda_arte_Hyrule_Warriors_Age_of_Calamity.png'

const botaoEstaDesabilitado = true

const gostaDoLink = false
const gostaDaZelda = false

const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
})

function incrementar() {
  estado.contador++
}
function decrementar() {
  estado.contador--
}

function alteraEmail(event) {
  estado.email = event.target.value
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado
  return saldo - transferindo
}

function validarTransferencia() {
  const { saldo, transferindo } = estado
  return saldo >= transferindo
}
</script>

<template>
  <h1>Olá {{ dizOla('Paula') }}</h1>
  <img v-if="gostaDoLink" v-bind:src="enderecoImgLink" alt="capa de zelda" />
  <img v-else-if="gostaDaZelda" :src="enderecoImgZelda" alt="" />
  <h2 v-else>Não curte the legend of zelda</h2>

  <button :disabled="botaoEstaDesabilitado">enviar msg</button>

  <br />
  <hr />

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}

  <input type="email" @keyup="alteraEmail" />

  <br />
  <hr />

  saldo: {{ estado.saldo }}
  <br />
  transferindo: {{ estado.transferindo }}
  <br />
  saldo depois da transferencia:{{ mostraSaldoFuturo() }}
  <br />
  <input
    :class="{ invalido: !validarTransferencia() }"
    @keyup="estado.transferindo = $event.target.value"
    type="number"
    placeholder="quantia para transferir"
  />
  <br />
  <button v-if="validarTransferencia()">Transferir</button>
  <span v-else>Valor insuficiente</span>
</template>

<style scoped>
img {
  width: 400px;
}

.invalido {
  outline-color: red;
}
</style>
