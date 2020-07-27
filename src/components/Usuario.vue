<template>
  <div class="container">
    <div class="form-group">
      <label for="Nombre Usuario">Nombre:</label>
      <input
        type="text"
        class="form-control"
        id="nombre"
        placeholder="Entre Nombre"
        v-model="nombre"
      />
    </div>
    <div class="form-group">
      <label for="NickName">NickName:</label>
      <input
        type="text"
        class="form-control"
        id="nick"
        placeholder="Entre NickName"
        v-model="nickName"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password:</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <button type="submit" class="btn btn-primary" v-on:click.prevent="grabar()">Grabar</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Usuario",
  data() {
    return {
      id: null,
      nombre: "",
      nickName: "",
      password: ""
    };
  },
  props: {},
  methods: {
    grabar() {
      const user = {
        name: this.nombre,
        nickName: this.nickName,
        password: this.password
      };
      if (this.id == null) {
        axios.post("http://localhost:4000/api/user", user).then(res => {
          console.log(res);
        });
      } else {
        axios
          .put("http://localhost:4000/api/user/" + this.id, user)
          .then(res => {
            console.log("updateado", res);
          });
      }
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id) {
      axios.get("http://localhost:4000/api/user/" + this.id).then(res => {
        console.log(res.data);
        this.nombre = res.data.name;
        this.nickName = res.data.nickName;
        this.password = res.data.password;
      });
    }
  },
  computed: {}
};
</script>

<style>
.enlaces a {
  display: block;
}
</style>