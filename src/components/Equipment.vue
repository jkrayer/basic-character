<template>
  <div>
    <h1 class="f2 serif lh-title mh2 mv2">Arms and Eqipment</h1>
    <p class="mh2 mv2 f5 lh-copy sans-serif">You begin with {{equipment.startingMoney}} gp.</p>
    <h2 v-if="equipment.armor.length > 0">Armor</h2>
    <StripedTable
      v-if="equipment.armor.length > 0"
      :header="['Name', 'AC', 'Cost']"
      :body="equipment.armor"
    />
    <h2>Weapons</h2>
    <StripedTable
      :header="['Name', 'Damage', 'Cost', 'Notes']"
      :body="equipment.weapons"
    />
    <h2>Equipment</h2>
    <StripedTable
      :header="['Name', 'Cost']"
      :body="equipment.equipment"
    />
  </div>
</template>

<script>
  import StripedTable from './StripedTable';

  export default {
    name: 'Equipment',
    components: {
      StripedTable
    },
    props: {
      equipment: {
        armor: [],
        equipment: [],
        startingMoney: null,
        weapons: []
      }
    }
  }
</script>

<style>
</style>
