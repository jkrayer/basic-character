<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="d in data"
        >{{d[0]}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          v-for="d in data"
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
