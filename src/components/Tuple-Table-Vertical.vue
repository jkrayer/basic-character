<template>
  <table>
    <thead>
      <tr>
        <th v-for="d in data" :key="hash(0, d)">{{ d[0] }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="n in size()" :key="n">
        <td v-for="d in data" :key="d[n]">{{ d[n] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'TupleTableVerticle',
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    methods: {
      size() {
        return this.data[0].length - 1;
      },
      hash(v, arr) {
        return [v].concat(arr).join('');
      }
    }
  };
</script>
