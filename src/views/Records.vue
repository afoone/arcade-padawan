<template>
  <div>
    <Usuario />
    <div>
      <h1>Record de puntuaciones</h1>
    </div>
    <div class="container">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Posición</th>
            <th scope="col">Usuario</th>
            <th scope="col">Ahorcado</th>
            <th scope="col">Memory</th>
            <th scope="col">Palabra</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in usuarios" :key="index">
            <th scope="row">{{index+1}}</th>
            <th scope="row">{{item.nickName}}</th>
            <th scope="row">
              {{
              item.score.reduce( (acc, act) => {
              if (act.game === "Memory" && act.score > acc) {
              return act.score} else {return acc;};}, 0)
              }}
            </th>
            <th scope="row">
              {{
              item.score.reduce( (acc, act) => {
              if (act.game === "Ahorcado" && act.score > acc) {
              return act.score} else {return acc;};}, 0)
              }}
            </th>
            <th scope="row">
              {{
              item.score.reduce( (acc, act) => {
              if (act.game === "Palabras" && act.score > acc) {
              return act.score} else {return acc;};}, 0)
              }}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Records",
  data() {
    return {
      usuarios: [],
    };
  },
  components: {},
  props: {},
  methods: {},
  mounted() {
    axios.get("http://localhost:4000/api/user").then((res) => {
      this.usuarios = res.data;
      console.log(this.usuarios);
    });
  },
};
</script>

<style>
h1 {
  font-size: 4rem;
  color: #ff420e;
  font-style: italic;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>