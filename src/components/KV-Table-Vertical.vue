<template>
  <table class="collapse ba br2 b--black-10 pv2 ph3 mh2 mv2">
    <thead>
      <tr class="striped--light-gray">
        <th
          v-for="key in Object.keys(data)"
          class="pv2 ph3 f6 fw6 ttu"
        >{{key}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          v-for="val in Object.values(data)"
          class="pv2 ph3 tc f6 br b--light-gray"
        >{{val}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'KvTableVerticle',
  props: {
    data: Object
  }
}
</script>

<style>
</style>
