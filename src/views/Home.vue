<template>
  <div>
    <h1>Basic D&amp;D Character Creator</h1>
    <p class="mb1">{{ message }}</p>
    <ScoreForm
      @scoresError="handleScoresError"
    />
    <p class="txt-smaller txt-right mt1">Version 1.1.0 (B<span class="txt-gray">ECMI</span>)</p>
  </div>
</template>

<script>
  import ScoreForm from '@/components/ScoreForm';

  export default {
    name: 'home',
    components: {
      ScoreForm
    },
    data() {
      return { message: 'Enter scores to begin.' }
    },
    methods: {
      handleScoresError(response) {
        this.message = response.message;
      }
    }
  }
</script>
