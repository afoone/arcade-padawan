<template>
  <div>
    <div class="relleno">
    <h1>Lista usuarios</h1>
    </div>
    
    <div class="container grilla">
      <div class="card margin" v-for=" (item,index)  in usuarios" :key="index">
        <div class="card-header">Usuario</div>
        <div class="container">
          <div class="card-body">
            <label for="Nombre:">Nombre:</label>
            <h5 class="card-title">{{item.name}}</h5>
            <label for="Nombre:">NickName:</label>
            <p class="card-text">{{item.nickName}}</p>
            <!-- <p class="card-text">{{item.password}}</p> -->
            <router-link v-bind:to="`usuario/editar/${item._id}`">Editar usuario</router-link>
            <button
              class="btn btn-primary ancho"
              v-on:click.prevent="borraUser(item._id)"
            >Borrar usuario</button>
          </div>
        </div>
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
      id: "",
      usuarios: [],
    };
  },
  props: {},
  methods: {
    borraUser(identificador) {
      const borro = confirm("Desea Borrar usuario");
      console.log("respuesta: " + borro + " " + identificador);
      if (borro) {
        axios
          .delete("http://localhost:4000/api/user/" + identificador)
          .then(
            () =>
              (this.usuarios = this.usuarios.filter(
                (i) => i._id !== identificador
              ))
          );
      }
    },
  },

  mounted() {
    axios.get("http://localhost:4000/api/user").then((res) => {
      //sobre un array puedo volcar res.data
      this.usuarios = res.data;

      // console.log(this.usuarios);
      // console.log(this.usuarios[1]._id)
    });
  },
};
</script>

<style scoped>
.grilla {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.margin {
  margin: 5px 5px 5px 5px;
}

.ancho {
  width: 5rem;
}
a {
  color: black;
}

h1 {
  font-size: 4.5rem;
  text-shadow: #555 4px 4px 4px;
}
.relleno {
  /* position: absolute; */
  display: block;
  background: linear-gradient(to right,rgb(98, 0, 128), #EBEDEE 70%);
  width: 100%;
  height: 9rem;
}
</style>