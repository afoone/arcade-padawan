<template>
    <div>
      <User msg="Hola, soy un SUPER USUARIO  Me llamo Groot"/>
        <h2> Vista Usuarios</h2>
    </div>
</template>
<script>
// @ is an alias to /src
import User from '@/components/Usuario.vue'

export default {
  name: 'User',
  components: {
    User
  }
}
</script>
