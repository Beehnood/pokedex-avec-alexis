<template>
  <div class="row">
    <div id="bol" class="center container">
        <img :src="'/images/image-10.png/'" alt="logo">
    </div>
   
    <div class="col">
      <div class="card py-4" v-for="pokemon in getPokemon" :key="pokemon.name" :class="pokemon.type1">
        <div class="center">
          <img
            v-bind:src="
              '/images/pokimage/' + pokemon.image_url.toLowerCase() + '.png'
            "
            alt="logo"
          />
        </div>
        <h2>{{ pokemon.name }}</h2>
        <h4 class="mt-2">japanese_name: {{ pokemon.japanese_name }}</h4>
        <h3>{{ pokemon.type1 }}</h3>
        <h4>{{ pokemon.type2 }}</h4>
        <h4> hp:{{ pokemon.hp }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pokemon-list",

  data() {
    return {
      params: this.$route.params.name,
    };
  },
  computed: {
    getPokemon() {
      return this.$store.state.pokemons.filter((p) => {
        return p.name.includes(this.params);
      });
    },
  },
};
</script>

<style scoped>

img {
  width: 200px;
}
</style>
