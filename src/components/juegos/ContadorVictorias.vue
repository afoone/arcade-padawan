<template>
  <div class="container">
    <div class="alert alert-success" role="alert">Victorias: {{victorias}}</div>
    <div class="alert alert-danger" role="alert">Derrotas: {{derrotas}}</div>
  </div>
</template>

<script>
import bus from "../../bus";

export default {
  data() {
    return {
      victorias: 0,
      derrotas: 0,
    };
  },
  methods: {
    record() {
      bus.$emit("Record", this.victorias);
      
    },
  },
  created() {
    bus.$on("PalabraCompletada", () => {
      this.victorias++;
    });
    bus.$on("Ahorcado", () => {
      this.derrotas++;
    });
  },
};
</script>

<style>
</style>