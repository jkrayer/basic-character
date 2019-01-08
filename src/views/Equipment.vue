<template>
  <div>
    <h1 class="mh1">Arms and Equipment</h1>
    <div v-if="response !== 'success'">
      {{ message }}
    </div>
    <div v-if="response === 'success'">
      <h2
        class="caps txt-large"
        v-if="armor.length > 0"
      >
        Armor:
      </h2>
      <StripedTable
        v-if="armor.length > 0"
        :header="['Name', 'AC', 'Cost']"
        :body="armor"
      />
      <h2 class="caps txt-large">Weapons:</h2>
      <StripedTable
        :header="['Name', 'Damage', 'Cost', 'Notes']"
        :body="weapons"
      />
      <h2 class="caps txt-large">Equipment:</h2>
      <StripedTable
        :header="['Name', 'Cost']"
        :body="equipment"
      />
    </div>
  </div>
</template>

<script>
  import StripedTable from '@/components/StripedTable';
  import server from '../helpers/server';

  export default {
    name: 'equipment-view',
    components: {
      StripedTable
    },
    data() {
      return {
        message: 'Loading&hellip;',
        response: null,
        armor: [],
        equipment: [],
        weapons: []
      };
    },
    created() {
      server.getEquipment(this.$route.query)
        .then(res => {
          if (res.message === 'success') {
            this.response = res.message;
            this.armor = res.data.armor;
            this.equipment = res.data.equipment;
            this.weapons =res.data.weapons;
          } else {
            this.message = 'No equipment can be found at this time. Please try again later or select a different filter.';
            this.response = false;
          }
        });
    }
  };
</script>
