<template>
  <div>
      <h1>
          El mensaje es: {{mensaje}}
      </h1>
  </div>
</template>

<script>
import { getMensaje } from '../api/mensajes';

export default {
    data(){
        return {
            mensaje: ""
        };
    },

    created() {
        getMensaje().then(
            res => (this.mensaje = res.data.mensaje)
        ).catch(
            err => console.error(err)
        )
    }
}
</script>

<style>

h1 {
    color: red;
}

</style>