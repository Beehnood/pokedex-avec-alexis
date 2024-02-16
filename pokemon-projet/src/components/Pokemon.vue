<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 m4">
    <div
      class="card"
      role="pokemon-card-panel"
      :class="pokemon.type1"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div class="card-body">
          <h4 class="card-title">{{ pokemon.name }}</h4>
        <div class="center">
          <img
            role="pokemon"
            v-bind:src="'/images/pokimage/' + pokemon.image_url.toLowerCase() + '.png'"
            :alt="pokemon.name"
            class="img-fluid"
          />
        </div>
        <div class="d-flex align-items-center justify-content-around">
          <div class="glassy-badge">HP: {{ pokemon.hp }}</div>
          <div class="glassy-badge">{{ pokemon.type1 }}</div>
        </div>
        <router-link
          role="pokemon-btn"
          :to="{ name: 'pokemon-view', params: { name: pokemon.name } }"
        >
          <button v-if="hover" class="btn btn-primary btn-sm">VOIR LE POKEMON</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PoKemon",
  props: ["pokemon"],

  data() {
    return {
      type: null,
      hover: false,
    };
  },
};
</script>

<style scoped>
div[role="pokemon-card-panel"] {
  position: relative;
  border: none;
}
[role="pokemon-btn"] {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
img[role="Type1"] {
  width: 80px;
}
button {
  animation: buttonshow 0.4s;
}
button:hover {
  transition: 0.4s;
}
@keyframes buttonshow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
