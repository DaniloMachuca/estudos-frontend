<script setup>
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
</script>

<template>
  <h1>Olá {{ dizOla('Paula') }}</h1>
  <img v-if="gostaDoLink" v-bind:src="enderecoImgLink" alt="capa de zelda" />
  <img v-else-if="gostaDaZelda" :src="enderecoImgZelda" alt="" />
  <h2 v-else>Não curte the legend of zelda</h2>

  <button :disabled="botaoEstaDesabilitado">enviar msg</button>
</template>

<style scoped>
img {
  width: 400px;
}
</style>
