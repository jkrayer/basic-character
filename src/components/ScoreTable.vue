<template>
  <table class="collapse ba br2 b--black-10 pv2 ph3 mh2 mv2">
    <thead>
      <tr>
        <th class="pv2 ph3 f6 fw6 ttu br b--moon-gray"></th>
        <th class="pv2 ph3 f6 fw6 ttu br b--moon-gray">Score</th>
        <th class="pv2 ph3 f6 fw6 ttu br b--moon-gray">Modifier</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="striped--light-gray"
        v-for="score in scores"
      >
        <th class="pv2 ph3 f6 br b--moon-gray tr">{{score[0]}}</th>
        <td class="pv2 ph3 f6 br b--moon-gray tc">{{score[1]}}</td>
        <td class="pv2 ph3 f6 br b--moon-gray tl">{{(score[2] > 0 ? '+' : '') + score[2]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ScoreTable',
  props: {
    scores: Array
  }
}
</script>

<style>
</style>
