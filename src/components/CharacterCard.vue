<template>
  <article class="mh1 pos-rel">
    <header>
      <h1>{{character.name}}</h1>
      <p class="txt-small pos-abs right" style="top: 6px;">{{character.xpAdjustMent}}% X.P. bonus</p>
    </header>
    <p>{{character.specialAbilities.description}}</p>
    <div v-show="show">
      <p><span class="weight-700">Hit Points:</span> You start with {{ character.hitDie }} + Con. modifier H.P. and gain 1d{{ character.hitDie }} + Con. modifier H.P. every level thereafter.</p>
      <p><span class="weight-700">Armor:</span> {{character.armor.description}}</p>
      <p><span class="weight-700">Weapons:</span> {{character.weapons.description}}</p>
      <div class="mh1">
        <h2 class="head-small">Saving Throws</h2>
        <table>
          <tbody>
            <tr
              v-for="(value, key) in character.savingThrows"
              :key="key"
            >
              <th class="txt-left">{{ key | titleCase }}</th>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mh1">
        <h2 class="head-small">Hit Table</h2>
        <TableVerticle :data="character.hitRollTable" />
      </div>
    </div>
    <button
      type="button"
      class="bg-blue txt-white weight-700 caps pad1 br mv1"
      @click="toggleDetails">
      {{ show ? 'Hide' : 'Show' }} Details
    </button>
    <slot></slot>
  </article>
</template>

<script>
  import TableVerticle from '@/components/TableVerticle';

  export default {
    name: 'CharacterCard',
    components: {
      TableVerticle
    },
    props: {
      character: {
        type: Object,
        required: true
      }
    },
    data() {
      return { show: false };
    },
    methods: {
      toggleDetails() {
        this.show = !this.show;
      }
    },
    filters: {
      titleCase(str) {
        return str.replace(/[A-Z]/g, a => ' ' + a).replace(/^[a-z]/, a => a.toUpperCase());
      }
    }
  };
</script>
