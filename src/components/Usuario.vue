<template>
  <div>
    <!-- <h1>{{ Usuario }}</h1> -->
    <label for="Nombre: ">{{this.nombre}}</label>
    <br>
    <!-- <label for="Apellidos:">{{this.apellidos}}</label> -->
    <label for="Nick:">{{this.nickName}}</label
    ><br>
    <label for="Passwd:" type="password">{{this.password}}</label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Usuario",
  data() {
    return {
      nombre: String,
      apellidos: String,
      nickName: String,
      password: String
    };
  },

  props: {
    msg: String
  },
  methods: {
    

      
    }

   ,
  mounted(){
   
   
   axios.get('http://localhost:4000/api/user').then(
        res =>{
          // console.log(res.data)
            this.nombre = res.data[0].name;
            this.nickName = res.data[0].nickName;
            this.password = res.data[0].password;
          }

      )

     

  },
  computed:{

  }
};

</script>

<style>
</style>