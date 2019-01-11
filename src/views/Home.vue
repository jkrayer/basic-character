<template>
  <div>
    <h1>B<span class="txt-gray">ECMI</span> Character Creator</h1>
    <router-link :to="{ name: 'create-character' }" class="caps txt-center no-underline block txt-white pad1 br bg-blue mh1">New Character</router-link>
    <router-link :to="{ name: 'equipment' }" class="caps txt-center no-underline block txt-white pad1 br bg-blue mh1">Equipment</router-link>
    <p class="txt-smaller txt-right mt1">Version 1.1.0</p>
  </div>
</template>

<script>
  export default {
    name: 'home-view'
  }
</script>
