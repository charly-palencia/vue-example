<template>
  <div>
    <h1> Pokemon type: {{ $route.params.typeId }}</h1>
    <PokemonList :pokemon="pokemonList" :pokemon-type="pokemonType"><PokemonList>
  </div>
</template>

<script>
import PokemonList from '../Pokemon';

export default {
  name: 'PokemonTypes',
  data() {
    return {
      pokemonList: [],
    };
  },
  computed: {
    pokemonType() { return this.$store.getters.pokemonType; },
  },
  watch: {
    pokemonType(pokemonType) {
      this.pokemonList = pokemonType.pokemon;
    },
  },
  components: {
    PokemonList,
  },
  created() {
    this.$store.dispatch('getPokemonType', this.$route.params.typeId);
  },
};
</script>

<style>
</style>
