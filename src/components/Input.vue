<template>
    <input
      :type="type"
      :id="id"
      v-model.lazy="data"
      @change="transmitValue"
    />
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return { data: '' };
  },
  methods: {
    transmitValue() {
      this.$emit('inputBlur', {
        id: this.id,
        value: this.data
      });
    }
  }
};
</script>

<style>
</style>
