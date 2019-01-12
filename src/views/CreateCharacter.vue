<template>
  <div>
    <h1>Basic D&amp;D Character Creator</h1>
    <ProgressBar
      :steps="['1. Enter Scores', '2. Pick a Class', '3. Buy Equipment']"
      :activeKey="activeKey"
    />
    <div v-if="scores.length === 0">
      <p class="mb1">{{ message }}</p> <!-- TODO: move message into form -->
      <ScoreForm @submit="handleSubmit" />
    </div>

    <div v-if="scores.length > 0 && !showCharacters">
      <!-- TODO: Abstract this table into a component -->
      <table>
        <thead>
          <tr>
            <td></td>
            <th>Score</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="score in scores" :key="score[0]">
            <th class="txt-left weight-400">{{ score[0] }}</th>
            <td class="txt-center">{{ score[1] }}</td>
            <td>{{ (score[2] > 0 ? '+' : '') + score[2] }}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="bg-blue txt-white weight-700 caps pad1 br" @click="listClasses">List Classes</button>
    </div>

    <div v-if="showCharacters">
      <CharacterCard
        v-for="character in characters"
        :key="character.name"
        :character="character"
      ></CharacterCard>
    </div>
  </div>
</template>

<script>
  import ScoreForm from '@/components/ScoreForm';
  import CharacterCard from '@/components/CharacterCard';
  import ProgressBar from '@/components/ProgressBar';
  import server from '@/helpers/server';
  import valid from '@/helpers/validators';

  function getScores(query) {
    if (valid.isValidScoreObject(query)) {
      server.getScores(query)
        .then(response => {
          response.message !== 'success'
            ? this.message = response.message
            : Object.assign(this, response.data);
        });
    }
  }

  export default {
    name: 'home',
    components: {
      CharacterCard,
      ScoreForm,
      ProgressBar
    },
    data() {
      return {
        message: 'Enter scores to begin.',
        scores: [],
        characters: [],
        activeKey: 0,
        showCharacters: false
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
        this.showCharacters = true;
        this.activeKey = 1;
      }
    },
    created() {
      getScores.call(this, this.$route.query);
    },
    beforeRouteUpdate(to, from, next) {
      if (Object.keys(to.query).length === 0) {
        this.message = 'Enter scores to begin.';
        this.scores = [];
        this.characters = [];
      } else {
        getScores.call(this, to.query);
      }

      next();
    }
  }
</script>
