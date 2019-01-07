<template>
  <div>
    <h1> Basic D&amp;D Character Creator</h1>
    <p>Enter scores to begin.</p>
    <ScoreForm />
    <p class="txt-small txt-right mt1">Version 1.1.0 (B<span class="txt-gray">ECMI</span>)</p>
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
