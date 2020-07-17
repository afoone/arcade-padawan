<template>
  <div>
    <!-- <h1>{{ Usuario }}</h1> -->
    <label for="Nombre:">{{this.nombre}}</label>
    <br>
    <label for="Apellidos:">{{this.apellidos}}</label>
    <label for="Nick:">{{this.nickmame}}</label>
  </div>
</template>

<script>
export default {
  name: "Usuario",
  data() {
    return {
      nombre: String,
      apellidos: String,
      nickmame: String,
      password: String
    };
  },

  props: {
    msg: String
  },
  methods: { },
  mounted(){
     this.nombre = "Army";
      this.apellidos = " Uno";
      this.nickmame = "Iamgroot";
      this.password = "****";

  }
};

</script>

<style>
</style>