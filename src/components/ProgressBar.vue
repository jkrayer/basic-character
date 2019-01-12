<template>
  <div class="mb1">
    <span
      v-for="(step, index) in steps"
      :key="step"
      :class="index === activeKey ? 'active' : index < activeKey ? 'strike' : 'txt-gray'"
    >{{ step }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    steps: {
      type: Array,
      required: true
    },
    activeKey: Number
  }
};
</script>
