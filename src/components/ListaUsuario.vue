<template>
  <div class="container">

    <div class="card" v-for=" (item,index)  in usuarios" :key="index" >
      

      <div class="card-header">Usuario</div>
      <div class="card-body">
        <label for="Nombre:">Nombre: </label>
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">{{item.nickName}}</p>
        <!-- <p class="card-text">{{item.password}}</p> -->
        <router-link v-bind:to="`usuario/editar/${item._id}`"> Editar usuario</router-link>
        
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
      id:"",
      usuarios: []
    };
  },
  props: {},
  methods: {},

  mounted() {
    axios.get("http://localhost:4000/api/user").then(res => {
      //sobre un array puedo volcar res.data
      this.usuarios = res.data;
      
      // console.log(this.usuarios);
      // console.log(this.usuarios[1]._id)
    });
  }
};
</script>

<style>
</style>