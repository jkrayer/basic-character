<template>
  <table class="collapse ba br2 b--black-10 pv2 ph3 mh2 mv2">
    <thead>
      <tr class="striped--light-gray">
        <th
          v-for="d in data"
          class="pv2 ph3 f6 fw6 ttu"
        >{{d[0]}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          v-for="d in data"
          class="pv2 ph3 tc f6 br b--light-gray"
        >{{d[1]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TupleTableVerticle',
  props: {
    data: Array
  }
}
</script>

<style>
</style>
