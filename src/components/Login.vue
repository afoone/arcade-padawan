import axios from 'axios';
<template>
  <div class="container">
    <div>
      <h1
        v-bind:style="{'background-image':'url(https://www.nationalgeographic.com.es/medio/2018/04/24/la-nebulosa-de-la-vela_95bb392a.jpg)'}"
      >Login</h1>
    </div>
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Usuario</label>
          <input type="text" class="form-control" id="usuario" v-model="user" placeholder="Usuario"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Contraseña"/>
        </div>
        <button type="submit" class="btn btn-secondary btn-lg" v-on:click.prevent="onSubmit()">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from "../api/login";

export default {

    name: 'Login',
    data() {
      return {
        user: "",
        password: ""
      }
    },
      methods:{
        onSubmit() {
          console.log(login());
          login(this.user, this.password).then(res=>
          localStorage.setItem("token", res.data.token))
        }
    }
  }
  
  

</script>

<style scoped>
h1 {
  font-size: 600%;
  /* font-family:Verdana, Geneva, Tahoma, sans-serif; */
  font-family: comic, fantasy;
  color: darkred;
  font-weight: bolder;
  margin: 50px 0px 20px 0px;
  width: 100%;
}
label {
  font-size: xx-large;
  font-family: Georgia, "Times New Roman", Times, serif;
}
input {
  margin: 10px 0px 10px 0px;
}
</style>