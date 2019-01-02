<template>
  <div>
    <article
      v-for="character in characters"
      class="mv4"
    >
      <header class="flex items-center">
        <h1 class="f2 serif lh-title mh2 mv2">{{character.name}}</h1>
        <a
          href="#equipment"
          class="selector"
          :data-class-name="character.name"
          @click.prevent="getEquipment"
        >
          Select
        </a>
      </header>
      <p class="mh2 mv2 f5 lh-copy sans-serif">A {{character.name}} attains Second Level at {{character.xpForNextLevel}} experience points. You gain a {{character.xpAdjustMent}}% bonus to experience points gained.</p>
      <p class="mh2 mv2 f5 lh-copy sans-serif">{{character.specialAbilities.description}}</p>
      <p class="mh2 mv2 f5 lh-copy sans-serif">{{character.armor.description}}</p>
      <p class="mh2 mv2 f5 lh-copy sans-serif">{{character.weapons.description}}</p>
      <h2 class="f3 serif lh-title mh2 mv2">Saving Throws</h2>
      <KvTableVerticle :data="character.savingThrows"/>
      <h2 class="f3 serif lh-title mh2 mv2">Hit Table</h2>
      <TupleTableVerticle :data="character.hitRollTable" />
    </article>
  </div>
</template>

<script>
  import KvTableVerticle from './KV-Table-Vertical';
  import TupleTableVerticle from './Tuple-Table-Vertical';
  import server from '../helpers/server';

  export default {
    name: 'Characters',
    components: {
      KvTableVerticle,
      TupleTableVerticle
    },
    props: {
      characters: Array
    },
    methods: {
      getEquipment(event) {
        const path = 'equipment?name=';
        const { className } = event.target.dataset

        fetch(`${server.server}${path}${className}`, { method: 'GET', headers: server.getHeaders() })
          .then(server.handleResponse)
          .then(json => this.$emit('equipmentResponse', json));
      }
    }
  }
</script>

<style>
</style>
