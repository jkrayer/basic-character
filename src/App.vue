<template>
  <div>
    <ScoreForm @characterResponse="handleCharacterResponse" />
    <ScoreTable
      v-if="scores.length > 0"
      :scores="scores"
    />
    <Characters
      v-if="characters.length > 0"
      @equipmentResponse="handleEquipmentResponse"
      :characters="characters"
    />
    <div ref="equipment" id="equipment">
      <Equipment
        v-if="equipment.returned"
        :equipment="equipment"
      />
    </div>
  </div>
</template>

<script>
import ScoreForm from './components/ScoreForm';
import ScoreTable from './components/ScoreTable';
import Characters from './components/Characters';
import Equipment from './components/Equipment';

export default {
  name: 'app',
  components: {
    Characters,
    Equipment,
    ScoreForm,
    ScoreTable
  },
  data() {
    return {
      scores: [],
      characters: [],
      equipment: {
        armor: [],
        equipment: [],
        startingMoney: '',
        weapons: [],
        returned: false
      }
    }
  },
  methods: {
    handleCharacterResponse(res) {
      this.scores = res.data.scores;
      this.characters = res.data.characters;
    },
    handleEquipmentResponse(res) {
      this.equipment = res.data;
      this.equipment.returned = true;

      const { equipment } = this.$refs;

      window.scrollBy(0, equipment.getBoundingClientRect().y);
    }
  }
}
</script>

<style>
</style>
