<template>
  <div class="ahorcado-container container">
    
    <div class="bg-1">
      <h1 class="t-stroke t-shadow">Ahorcado</h1>
    </div>
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
    contadorVictorias: ContadorVictorias
  },
  data() {
    return {
      palabra: "",
      puntuacion: 0,
      victoriasRecord: 0
    };
  },
  methods: {
    getPalabra() {
      axios
        .get("http://localhost:4000/api/palabra/")
        .then(
          res =>
            (this.palabra = res.data
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""))
        );
    },
    subirRecord() {
      console.log(this.victorias);
      axios
        .put(
          "http://localhost:4000/api/user/" +
            localStorage.getItem("id") +
            "/addScore",
          { game: "Ahorcado", score: this.victorias }
        )
        .then(res => {
          console.log("updateado", res);
        });
    }
  },
  created() {
    this.getPalabra();
    bus.$on("Ahorcado", () => {
      this.getPalabra();
    });
    bus.$on("PalabraCompletada", () => {
      this.getPalabra();
      this.victorias++;
    });
  }
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