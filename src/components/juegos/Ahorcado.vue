<template>
  <div class="ahorcado-container">
    <h1>Ahorcado</h1>
    <contadorVictorias :record="victorias" />
    <vidas />
    <palabra :palabra="palabra" />
    <letras />
    <div clas="container">
      <button type="button" class="btn btn-outline-info" v-on:click="subirRecord()">Subir Record</button>
    </div>
  </div>
</template>

<script>
import Vidas from "./Vidas";
import Letras from "./Letras";
import Palabra from "./Palabra";
import ContadorVictorias from "./ContadorVictorias";
import axios from "axios";
import bus from "../../bus";

export default {
  components: {
    letras: Letras,
    palabra: Palabra,
    vidas: Vidas,
    contadorVictorias: ContadorVictorias,
  },
  data() {
    return {
      palabra: "",
      puntuacion: 0,
      victoriasRecord: 0,
    };
  },
  methods: {
    getPalabra() {
      axios
        .get("https://www.aleatorios.com/random-words?dictionary=2&words=1")
        .then(
          (res) =>
            (this.palabra = res.data.records[0]
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""))
        );
    },
    subirRecord() {
      console.log(this.victoriasRecord);
      axios
        .put(
          "http://localhost:4000/api/user/" +
            localStorage.getItem("id") +
            "/addScore",
          { game: "Ahorcado", score: this.victoriasRecord }
        )
        .then((res) => {
          console.log("updateado", res);
        });
    },
  },
  created() {
    this.getPalabra();
    bus.$on("Ahorcado", () => {
      this.getPalabra();
    });
    bus.$on("PalabraCompletada", () => {
      this.getPalabra();
      this.victoriasRecord++;
    });
  },
};
</script>

<style>
.ahorcado-container {
  display: grid;
}
button {
  margin-top: 2rem;
  height: 2rem;
  width: 13rem;
  text-align: center;
}
</style>