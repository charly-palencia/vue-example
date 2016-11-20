<template>
  <ul class="list-group">
    <li v-for="monster in pokemon" class="list-group-item">
      <router-link :to="{ name: 'pokemonShow', params: { name: getName(monster) }}" > {{ getName(monster) }} </router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'PokemonList',
  props: ['pokemon', 'pokemonType'],
  components: {
  },
  methods: {
    getName(monster) {
      return monster.pokemon.name;
    },
  },
};
</script>

<style>
</style>
