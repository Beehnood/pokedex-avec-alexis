import { createStore } from "vuex";
import pokemons from "@/components/data.js";

const store = createStore({
  state: {
      pokemons,
      search: "",
  },
  getters: {
    pokemons(state) {
      return state.pokemons;
    },

    filters(state) {
      return state.pokemons.filter((a) => {
        return a?.name?.toLowerCase().includes(state?.search?.toLowerCase());
      });
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
