<template>
  <div class="container">

    <div class="card" v-for=" (item,index)  in usuarios" :key="index" >

      <div class="card-header">Usuario</div>
      <div class="card-body">
        <label for="Nombre:">Nombre: </label>
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">{{item.nickName}}</p>
        <!-- <p class="card-text">{{item.password}}</p> -->
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
//import  Usuario  from "./Usuario";
import axios from "axios";
export default {
  name: "ListaUsuarios",
  data() {
    return {
      usuarios: []
    };
  },
  props: {},
  methods: {},

  mounted() {
    axios.get("http://localhost:4000/api/user").then(res => {
      //sobre un array puedo volcar res.data
      this.usuarios = res.data;
      console.log(this.usuarios);
    });
  }
};
</script>

<style>
</style>