<template>
  <div class="container">
    <div class="bg-1">
      <h1 class="t-stroke t-shadow">Elige las palabras</h1>
    </div>
    <template v-if="!estado.comenzado">
      <div class="alert alert-danger" role="alert" v-if="estado.error">{{estado.error}}</div>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block centrar"
        v-on:click="estado.comenzado = true"
      >Comenzar</button>
    </template>
    <template v-else>
      <div>Puntuacion actual: {{palabras.length}}</div>
      <addPalabra v-bind:palabras="palabras" v-bind:estado="estado"></addPalabra>

      <listaPalabras v-bind:palabras="palabras" />
    </template>
  </div>
</template>

<script>
import ListaPalabras from "./ListaPalabras";
import AddPalabra from "./AddPalabra";

export default {
  components: {
    listaPalabras: ListaPalabras,
    addPalabra: AddPalabra,
  },
  data() {
    return {
      palabras: [],
      estado: {
        comenzado: false,
        error: null,
      },
    };
  },
};
</script>

<style scoped>
button {
  height: 50px;
}

.bg-1{
   background: linear-gradient(to right, rgb(97, 67, 133), rgb(81, 99, 149));
   height: 30vh;
   padding-top: 50px;
}

.t-stroke {
  color: transparent;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-width: 2px;
  -moz-text-stroke-color: #000000;
  -webkit-text-stroke-color: #ffffff;
}

.t-shadow {
  text-shadow: 7px 7px #8dffcd;
}

</style>