<template>
  <table class="w100 mh1">
    <thead>
      <tr>
        <th
          v-for="(head, index) in header"
          class="underline cell"
          :class="index === 0 ? 'txt-left' : ''"
          :key="head"
        >
          {{head}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="bod in body"
        :key="bod.id"
      >
        <th class="txt-left weight-400 cell">{{bod.name}}</th>
        <td
          v-if="bod.ac || bod.damage"
          class="txt-center cell"
        >
          {{bod.ac || bod.damage}}
        </td>
        <td class="txt-center cell">{{bod.cost}} gp.</td>
        <td
          v-if="header.indexOf('Notes') > -1"
          class="txt-center cell"
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
