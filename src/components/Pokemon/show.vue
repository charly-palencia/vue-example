<template>
  <article v-if="pokemon" class="panel panel-default row">
    <header>
      <h1> #{{pokemon.id}} {{ pokemon.name }} </h1>
    </header>

    <main>
      <div class="col-md-6">
        <img :src="pokemon.sprites.front_default" alt="">
      </div>
      <div class="col-md-6">
        <h4> Description </h4>
        <ul class="list-group">
          <li class="list-group-item">
            Weight : {{ pokemon.weight }}
          </li>
          <li class="list-group-item">
            Height: {{ pokemon.height }}
          </li>
        </ul>
        <div id="abilities">
          <h4>Abilities</h4>
          <span v-for="item in pokemon.abilities" class="tag tag-default">
            {{ item.ability.name }}
          </span>
        </div>
        <div id="versions" class="panel panel default"></div>
        <div id="type" class="bd-example">
          <h4>Types</h4>
          <span class="tag tag-success" v-for="type in pokemon.types">
            {{ type.type.name }}
          </span>
        </div>
        <div>
          <h4>Stats</h4>
          <div class="progress" v-for="stat in pokemon.stats">
            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style="{ width: stat.base_stat + '%' }">
              <span>{{ stat.stat.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>
    </footer>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Pokemon',
  computed: mapGetters({
    pokemon: 'pokemon',
  }),
  components: {
  },
  created() {
    this.$store.dispatch('getPokemon', this.$route.params.name);
  },
};
</script>

<style>
.tag-success {
  background-color: #5cb85c;
}

.tag-default {
  background-color: #5bc0de;
}

.tag {
  margin-right: 10px;
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
}

.bd-example {
    /* position: relative; */
    padding: 1rem;
    margin: 1rem -1rem;
    /* border: solid #f7f7f9; */
    /* border-width: .2rem 0 0; */
}
</style>
