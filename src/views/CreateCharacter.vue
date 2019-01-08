<template>
  <div>
    <h1>Basic D&amp;D Character Creator</h1>
    <div v-if="scores.length === 0">
      <p class="mb1">{{ message }}</p>
      <ScoreForm
        @scoresError="handleScoresError"
        @scores="handleScores"
      />
    </div>
    <div v-if="scores.length > 0">
      <table>
        <thead>
          <tr>
            <td></td>
            <th>Score</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="score in scores"
            :key="score[0]"
          >
            <th class="txt-left weight-400">{{ score[0] }}</th>
            <td class="txt-center">{{ score[1] }}</td>
            <td>{{ (score[2] > 0 ? '+' : '') + score[2] }}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        class="bg-blue txt-white weight-700 caps pad1 br"
        @click="listClasses"
      >
        List Classes
      </button>
    </div>
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
      return {
        message: 'Enter scores to begin.',
        scores: []
      }
    },
    methods: {
      handleScoresError(response) {
        this.message = response.message;
      },
      handleScores(response) {
        this.scores = response.scores;
      },
      listClasses() {
        this.$router.push({
          path: '/basic/characters',
          query: this.scores.reduce((acc, score) => (acc[score[0]] = score[1], acc), {})
        });
      }
    }
  }
</script>