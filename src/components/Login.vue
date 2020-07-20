<template>
    <div class="container">
    <div>
      <h1  v-bind:style="{'background-image':'url(https://www.nationalgeographic.com.es/medio/2018/04/24/la-nebulosa-de-la-vela_95bb392a.jpg)'}">Login</h1>
    </div>
    <div>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Usuario</label>
    <input type="text" class="form-control" id="usuario">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-secondary btn-lg">Login</button>
</form>
    </div>
  </div>
</template>

<script>
export default {

    name: 'Login'
    

  }

</script>

<style scoped>
    h1 {
        font-size: 600%;
        /* font-family:Verdana, Geneva, Tahoma, sans-serif; */
        font-family: comic,fantasy;
        color: darkred;
        font-weight: bolder;
        margin: 50px 0px 20px 0px;
        width: 100%;
        

    }
    label {
        font-size: xx-large;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    input {
        margin: 10px 0px 10px 0px;
    }
</style>