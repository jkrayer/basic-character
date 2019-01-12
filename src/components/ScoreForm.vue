<template>
  <form id="score-form" action="index.html" method="get">
    <div class="flex flex-hc">
      <label for="Strength" class="col-50">Strength</label>
      <div class="col-50 txt-center">
        <Input
          @inputBlur="handleInputUpdate"
          type="number"
          id="Strength"
          class="txt-center"
          :class="isNaN(scores.Strength) ? 'bb border-black' : ''"
          :min="3"
          :max="18"
          :required="true"
          :autofocus="true"
        />
      </div>
    </div>
    <div class="flex flex-hc">
      <label for="Intelligence" class="col-50">Intelligence</label>
      <div class="col-50 txt-center">
        <Input
          @inputBlur="handleInputUpdate"
          type="number"
          class="txt-center"
          :class="isNaN(scores.Intelligence) ? 'bb border-black' : ''"
          id="Intelligence"
          :min="3"
          :max="18"
          :required="true"
        />
      </div>
    </div>
    <div class="flex flex-hc">
      <label for="Wisdom" class="col-50">Wisdom</label>
      <div class="col-50 txt-center">
        <Input
          @inputBlur="handleInputUpdate"
          type="number"
          class="txt-center"
          :class="isNaN(scores.Wisdom) ? 'bb border-black' : ''"
          id="Wisdom"
          :min="3"
          :max="18"
          :required="true"
        />
      </div>
    </div>
    <div class="flex flex-hc">
      <label for="Dexterity" class="col-50">Dexterity</label>
      <div class="col-50 txt-center">
        <Input
          @inputBlur="handleInputUpdate"
          type="number"
          class="txt-center"
          :class="isNaN(scores.Dexterity) ? 'bb border-black' : ''"
          id="Dexterity"
          :min="3"
          :max="18"
          :required="true"
        />
      </div>
    </div>
    <div class="flex flex-hc">
      <label for="Constitution" class="col-50">Constitution</label>
      <div class="col-50 txt-center">
        <Input
          @inputBlur="handleInputUpdate"
          type="number"
          class="txt-center"
          :class="isNaN(scores.Constitution) ? 'bb border-black' : ''"
          id="Constitution"
          :min="3"
          :max="18"
          :required="true"
        />
      </div>
    </div>
    <div class="flex flex-hc">
      <label for="Charisma" class="col-50">Charisma</label>
      <div class="col-50 txt-center">
        <Input
          @inputBlur="handleInputUpdate"
          type="number"
          class="txt-center"
          :class="isNaN(scores.Charisma) ? 'bb border-black' : ''"
          id="Charisma"
          :min="3"
          :max="18"
          :required="true"
        />
      </div>
    </div>
    <div class="flex">
      <button
        class="txt-white weight-700 caps pad1 br"
        :class="submitDisabled ? 'bg-gray' : 'bg-blue'"
        type="submit"
        @click.prevent="validateScores"
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
          Strength: NaN,
          Intelligence: NaN,
          Wisdom: NaN,
          Dexterity: NaN,
          Constitution: NaN,
          Charisma: NaN
        },
        submitDisabled: true
      };
    },
    methods: {
      validateScores() {
        // TODO Actually Validate the form
        // if (valid) {
        //   this.$emit('submit', this.scores);
        // } else {
        //   manage input errors
        // }
        this.$emit('submit', this.scores);
      },
      handleInputUpdate(res) {
        this.scores[res.id] = res.value;
        this.submitDisabled = Object.values(this.scores).find(isNaN) !== undefined;
      }
    }
  };
</script>
