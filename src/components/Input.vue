<template>
  <input
    :type="type"
    :id="id"
    :min="min"
    :max="max"
    :required="required"
    v-model="data"
    @change.lazy="transmitValue"
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
    },
    min: Number,
    max: Number,
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: ''
    };
  },
  methods: {
    transmitValue(event) {
      const value = this._props.type === 'number' ? parseInt(event.target.value, 10) : event.target.value;
      this.$emit('inputBlur', {
        id: event.target.id,
        value
      });
    }
  }
}
</script>

<style>
</style>
