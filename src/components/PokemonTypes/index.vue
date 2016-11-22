<template>
  <div>
    <h1>Pokemon Types</h1>
    <PokemonTypesList></PokemonTypesList>
  </div>
</template>

<script>
import PokemonTypesList from './list';

export default {
  name: 'PokemonTypes',
  components: {
    PokemonTypesList,
  },
};
</script>

<style>
</style>
