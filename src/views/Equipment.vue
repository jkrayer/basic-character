<template>
  <div>
    <h1 class="mh1">Arms and Equipment</h1>
    <div class="mh1">
      <!-- TODO: Select Component -->
      <select
        v-if="response != null"
        v-on:change="handleFilter"
      >
        <option value="">Show All</option>
        <option
          v-for="val in classes"
          :value="val"
          :key="val"
          :selected="selected === val"
        >
          {{ val }}
        </option>
      </select>
    </div>
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

  function getEquipment(query) {
    this.selected = query.name;

    server.getEquipment(query)
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
        weapons: [],
        selected: '',
        classes: ['Cleric', 'Dwarf','Elf', 'Fighter', 'Halfling', 'Magic-User', 'Thief'] // TODO get this list from the server
      };
    },
    methods: {
      handleFilter(event) {
        this.$router.push({
          path: '/basic/equipment',
          query: event.target.value ? { name: event.target.value } : {}
        });
      }
    },
    created() {
      getEquipment.call(this, this.$route.query);
    },
    beforeRouteUpdate(to, from, next) {
      getEquipment.call(this, to.query);
      next();
    }
  };
</script>
