<template>
  <div
    class="home fondo"
    :style="{'background-image':'url(https://www.nationalgeographic.com.es/medio/2018/04/24/la-nebulosa-de-la-vela_95bb392a.jpg)'}"
  >
    <h1>Arcade Padawan Tu Universo GaMeR</h1>
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
      <div :style="{'margin':'6rem'}">
        <img alt="Vue logo" src="../assets/img/arcade.png" />
      </div>
    </div>

    <h1></h1>
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
  color: #80bd9e;
  font-size: 600%;
  text-shadow: 1px 1px #666, 2px 2px #86D6D3, 3px 3px #666, 4px 4px #86D6D3;
}
.fondo {
  background-size: cover;
  height: 850px;
  
}

.listaJuegos {
  display: grid;
  grid-template-columns: 50% auto;
}
ul {
  margin-top: 10rem;
}
li a {
  text-shadow: 0 0 20px #fefcc9, 2px -2px 3px #feec85, -4px -4px 5px #ffae34,
    5px -10px 6px #ec760c, -5px -12px 8px #cd4606, 0 -15px 20px #973716,
    2px -15px 20px #451b0e;
  font-size: 4rem;
  color: #f98866;
}
</style>
