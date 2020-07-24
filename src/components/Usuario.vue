<template>
<div class="container">
 <div class="form-group">
    <label for="Nombre Usuario">Nombre:  </label>
    <input type="text" class="form-control" id="nombre"  placeholder="Entre Nombre" v-model="nombre">
  </div>
  <div class="form-group">
    <label for="NickName">NickName:  </label>
    <input type="text" class="form-control" id="nick"  placeholder="Entre NickName" v-model="nickName">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password: </label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  
  <button type="submit" class="btn btn-primary" v-on="grabar">Grabar</button>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Usuario",
  data() {
    return {
      nombre: String,
      nickName: String,
      password: String
    };
  },
  props: {  },
  methods: {
    
       
    }

   ,
  mounted(){
   
   
   axios.get('http://localhost:4000/api/user').then(
        res =>{
           console.log(res.data)
  //           this.nombre = res.data[0].name;
  //           this.nickName = res.data[0].nickName;
  //           this.password = res.data[0].password;
          }

      )   

  },
  grabar(){
    const user={
    name : this.nombre,
  nickName: this.nickName,
  password: this.password

    }
  axios.post('http://localhost:4000/api/user',user).then(
    res =>{
      console.log(res)
    }
  )


  },

  computed:{

    
  }
};

</script>

<style>
.enlaces a{display: block;}
</style>