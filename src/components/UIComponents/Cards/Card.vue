<template>
  <div class="card">
    <div
      class="card-image"
      v-if="$slots.image"
    >
      <slot name="image"/>
    </div>
    <div
      class="card-header"
      v-if="$slots.header"
    >
      <slot name="header"/>
    </div>
    <div class="card-body">
      <slot/>
    </div>
    <div
      class="card-footer"
      v-if="$slots.footer"
    >
      <hr>
      <slot name="footer"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card"
};
</script>
<style>

</style>
