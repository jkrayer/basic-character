<template>
  <div>
    <h1>See the console for life cycle</h1>
    <ul>
      <li>{{ compProp }}</li>
      <li
        v-for="(lc, index) in lifecycle"
        :key="index"
        >{{ lc }}</li>
    </ul>
  </div>
</template>

<script>
let count = 0;

export default {
  name: 'lifecycle',
  data() {
    return {
      lifecycle: []
    };
  },
  computed: {
    compProp() {
      console.log('computed');
      this.lifecycle = this.lifecycle.concat('computed');
      return 'computedProps may be available very early';
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
    // this.lifecycle = this.lifecycle.concat('beforeCreate');
  },
  created() {
    console.log('created');
    this.lifecycle = this.lifecycle.concat('created: this value was pushed to the data object');
  },
  beforeMount() {
    console.log('beforeMount');
    this.lifecycle = this.lifecycle.concat('beforeMount');
  },
  mounted() {
    console.log('mounted');
    this.lifecycle = this.lifecycle.concat('mounted');
  },
  beforeUpdate() {
    console.log(`beforeUpdate ${count}`);
    this.lifecycle = this.lifecycle.concat(`beforeUpdate ${count}`);
  },
  updated() {
    console.log(`updated ${count}`);
    if (count === 0) this.lifecycle = this.lifecycle.concat(`updated 1: triggers beforeUpdate 1`);
    ++count;
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    this.lifecycle = this.lifecycle.concat('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
    this.lifecycle = this.lifecycle.concat('destroyed');
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    // this.lifecycle = this.lifecycle.concat('beforeRouteEnter')
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    this.lifecycle = this.lifecycle.concat('beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to, from, leave) {
    console.log('beforeRouteLeave');
    this.lifecycle = this.lifecycle.concat('beforeRouteLeave');
    next();
  },
};
</script>
