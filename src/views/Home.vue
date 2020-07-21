<template>
  <div
    class="home fondo"
    :style="{'background-image':'url(https://www.nationalgeographic.com.es/medio/2018/04/24/la-nebulosa-de-la-vela_95bb392a.jpg)'}"
  >
    <h1>Arcade Padawan</h1>
    <div class="listaJuegos">
      <div>
        <ul>
          <li>
            <router-link to="/juegos/ahorcado">Ahorcado</router-link>
          </li>
          <li>
            <router-link to="/juegos/palabras">Palabras</router-link>
          </li>
          <li>
            <router-link to="/juegos/memory">Memory</router-link>
          </li>
        </ul>
      </div>
      <div>
        <img alt="Vue logo" src="../assets/img/arcade.png" />
      </div>
    </div>

    <h1>Tu universo gamer</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      /* image: {backgroundImage: "url(./assets/img/bk.jpg)"} */
    };
  },
  components: {}
};
</script>

<style scoped>
h1 {
  color: chartreuse;
  font-size: 600%;
}
.fondo {
  background-size: cover;
}

.listaJuegos{
  display: grid;
  grid-template-columns: 50% auto;
}
</style>
