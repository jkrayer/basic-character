<template>
  <div class="flex flex-wrap flex-hc flex-vc">
    <h1 class="f-headline lh-solid">Basic D&D Character Creator</h1>
    <p>Enter scores to begin.</p>
    <ScoreForm />
    <p>Version 1.1.0</p>
  </div>
</template>

<script>
  import ScoreForm from '@/components/ScoreForm';

  export default {
    name: 'home',
    components: {
      ScoreForm
    }
  }
</script>
