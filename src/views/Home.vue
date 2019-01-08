<template>
  <div>
    <h1>B<span class="txt-gray">ECMI</span> Character Creator</h1>
    <router-link :to="{ name: 'create-character' }">New Character</router-link>
    <pre>
      Class
        Cleric
        Dwarf
        Elf
        Fighter
        Halfling
        Magic-User
        Thief
    </pre>
    <router-link :to="{ name: 'equipment' }">Equipment</router-link>
    <pre>
      Spells
    </pre>
    <p class="txt-smaller txt-right mt1">Version 1.1.0</p>
  </div>
</template>

<script>
  export default {
    name: 'home-view'
  }
</script>
