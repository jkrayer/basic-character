<template>
  <form id="score-form" class="mh2 mv4 flex flex-wrap" action="index.html" method="post">
    <div class="w-third-l pa1">
      <label for="Strength" class="db">Strength</label>
      <input
        type="number"
        id="Strength"
        name="Strength"
        min="3"
        max="18"
        required
        v-model="scores.Strength"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Intelligence" class="db">Intelligence</label>
      <input
        type="number"
        id="Intelligence"
        name="Intelligence"
        min="3"
        max="18"
        required
        v-model="scores.Intelligence"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Wisdom" class="db">Wisdom</label>
      <input
        type="number"
        id="Wisdom"
        name="Wisdom"
        min="3"
        max="18"
        required
        v-model="scores.Wisdom"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Dexterity" class="db">Dexterity</label>
      <input
        type="number"
        id="Dexterity"
        name="Dexterity"
        min="3"
        max="18"
        required
        v-model="scores.Dexterity"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Constitution" class="db">Constitution</label>
      <input
        type="number"
        id="Constitution"
        name="Constitution"
        min="3"
        max="18"
        required
        v-model="scores.Constitution"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Charisma" class="db">Charisma</label>
      <input
        type="number"
        id="Charisma"
        name="Charisma"
        min="3"
        max="18"
        required
        v-model="scores.Charisma"
      />
    </div>
    <div class="w-third-l pa1">
      <button
        type="submit"
        @click.prevent="getClasses"
      >Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ScoreForm',
  data() {
    return {
      scores: {
        Strength: '',
        Intelligence: '',
        Wisdom: '',
        Dexterity: '',
        Constitution: '',
        Charisma: ''
      }
    };
  },
  methods: {
    // Mixins Here?
    getClasses() {
      const server = 'https://becmi-api.herokuapp.com/api/scores?';
      let headers = new Headers();
      headers.append('Accept', 'application/json');

      function serialize(obj) {
        const str = Object.keys(obj).reduce(
          (acc, key) => acc += `${key}=${obj[key]}&`, ''
        );

        return str.substring(0, str.length - 1)
      }

      function handleResponse(response) {
        if (response.status !== 200) {
          // throw past then?
        }
        return response.json();
      }

      fetch(`${server}${serialize(this.scores)}`, { method: 'GET', headers: headers })
        .then(handleResponse)
        .then(json => this.$emit('characterResponse', json))
    }
  }
}
</script>

<style>
</style>
