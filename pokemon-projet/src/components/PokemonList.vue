<template>
  <div class="row g-3">
    <div id="pok" class="center container">>
      <img :src="'/images/image-1.png'" alt="logo.png" class="center">

    </div>
    
    <input
      type="search"
      class="form-control form-control-lg"
      id="searchInput"
      placeholder="Rechercher"
      v-model="$store.state.search"
    />
    <Pokemon
      v-for="pokemon in filters"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import Pokemon from "./Pokemon";
import { mapGetters } from "vuex";

export default {
  name: "pokemon-list",
  components: {
    Pokemon,
  },


  computed: {
    ...mapGetters({
      pokemons: "pokemons",
      filters: "filters",
    }),
  },
};
</script>

<style scoped>
img{
 width: 20rem;
 align-items:center;
}

</style>
