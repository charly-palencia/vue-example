<template>
  <div id="app">
    <TypesHeader></TypesHeader>
  </div>
</template>

<script>
import TypesHeader from './components/TypesHeader';

export default {
  name: 'app',
  components: {
    TypesHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
