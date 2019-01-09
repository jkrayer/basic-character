<template>
  <div>
    <h1>Basic D&amp;D Character Creator</h1>
    <div v-if="scores.length === 0">
      <p class="mb1">{{ message }}</p>
      <ScoreForm
        @submit="handleSubmit"
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
  </div>
</template>

<script>
  import ScoreForm from '@/components/ScoreForm';
  import server from '@/helpers/server';
  import valid from '@/helpers/validators';

  function getScores(query) {
    if (valid.isValidScoreObject(query)) {
      server.getScores(query)
        .then(response => {
          response.message !== 'success'
            ? this.message = response.message
            : this.scores = response.data.scores;
        });
    }
  }

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
      handleSubmit(scores) {
        if (valid.isValidScoreObject(scores)) {
          this.$router.push({
            path: '/basic/create',
            query: scores
          });

          getScores.call(this, scores);

        } else {
          this.message = 'Invalid Scores. You should have 6 scores with values from 3 - 18.';
        }
      },
      listClasses() {
        this.$router.push({
          path: '/basic/characters',
          query: this.scores.reduce((acc, score) => (acc[score[0]] = score[1], acc), {})
        });
      }
    },
    created() {
      getScores.call(this, this.$route.query);
    }
  }
</script>
