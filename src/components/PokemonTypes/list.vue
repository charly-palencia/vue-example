<template>
  <ul class="list-group">
    <li v-for="pokemonType in pokemonTypes" class="list-group-item">
      <router-link :to="{ name: 'pokemonsByType', params: { typeId: pokemonType.name }}" > {{ pokemonType.name }} </router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PokemonTypesList',
  computed: mapGetters({
    pokemonTypes: 'allPokemonTypes',
  }),
  created() {
    this.$store.dispatch('getPokemonTypes');
  },
};
</script>

<style>
</style>
