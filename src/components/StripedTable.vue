<template>
  <table class="collapse ba br2 b--black-10 pv2 ph3 mh2 mv2">
    <thead>
      <tr>
        <th
          v-for="head in header"
          class="pv2 ph3 f6 fw6 ttu br b--moon-gray"
        >
          {{head}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="striped--light-gray"
        v-for="bod in body"
      >
        <th class="pv2 ph3 f6 br b--moon-gray tl">{{bod.name}}</th>
        <td
          v-if="bod.ac || bod.damage"
          class="pv2 ph3 f6 br b--moon-gray tc"
        >
          {{bod.ac || bod.damage}}
        </td>
        <td class="pv2 ph3 f6 br b--moon-gray tc">{{bod.cost}} gp.</td>
        <td
          v-if="header.indexOf('Notes') > -1"
          class="pv2 ph3 f6 tl"
        >
          {{bod.notes}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'StripedTable',
  props: {
    header: Array,
    body: Array
  }
}
</script>

<style>
</style>
