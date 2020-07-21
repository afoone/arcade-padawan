<template>
    <div>
      <Usuario/>
      
      <!-- <User msg="Hola, soy un SUPER USUARIO  Me llamo Groot"/>
        <h2> Vista Usuarios</h2> -->
    </div>
    
</template>
<script>
// @ is an alias to /src
import Usuario from '@/components/Usuario.vue'

export default {
  name: 'UserList',
  components: {
    Usuario
  }
}
</script>
