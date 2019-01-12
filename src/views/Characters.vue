<template>
  <div>
    <h1>Available Characters</h1>
    <div v-if="characters.length === 0">
      Loading&hellip;
    </div>
    <CharacterCard
      v-for="character in characters"
      :key="character.name"
      :character="character"
    ></CharacterCard>
  </div>
</template>

<script>
  import CharacterCard from '@/components/CharacterCard';
  import server from '../helpers/server';

  export default {
    name: 'Characters',
    components: {
      CharacterCard
    },
    data() {
      return { characters: [] };
    },
    created() {
      const path = `scores?${server.serialize(this.$route.query)}`;

      server.get(path).then(json => this.characters = json.data.characters);
    }
  };
</script>
