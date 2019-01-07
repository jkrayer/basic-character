<template>
  <form id="score-form" class="mh2 mv4 flex flex-wrap" action="index.html" method="post">
    <div class="w-third-l pa1">
      <label for="Strength" class="db">Strength</label>
      <Input
        @inputBlur="handleInputUpdate"
        type="number"
        id="Strength"
        :min="3"
        :max="18"
        :required="true"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Intelligence" class="db">Intelligence</label>
      <Input
        @inputBlur="handleInputUpdate"
        type="number"
        id="Intelligence"
        :min="3"
        :max="18"
        :required="true"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Wisdom" class="db">Wisdom</label>
      <Input
        @inputBlur="handleInputUpdate"
        type="number"
        id="Wisdom"
        :min="3"
        :max="18"
        :required="true"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Dexterity" class="db">Dexterity</label>
      <Input
        @inputBlur="handleInputUpdate"
        type="number"
        id="Dexterity"
        :min="3"
        :max="18"
        :required="true"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Constitution" class="db">Constitution</label>
      <Input
        @inputBlur="handleInputUpdate"
        type="number"
        id="Constitution"
        :min="3"
        :max="18"
        :required="true"
      />
    </div>
    <div class="w-third-l pa1">
      <label for="Charisma" class="db">Charisma</label>
      <Input
        @inputBlur="handleInputUpdate"
        type="number"
        id="Charisma"
        :min="3"
        :max="18"
        :required="true"
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
import Input from './Input';

export default {
  name: 'ScoreForm',
  components: {
    Input
  },
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
    getClasses() {
      this.$router.push({
        path: '/basic/characters',
        query: this.scores
      });
    },
    handleInputUpdate(res) {
      this.scores[res.id] = res.value;
    }
  }
}
</script>
