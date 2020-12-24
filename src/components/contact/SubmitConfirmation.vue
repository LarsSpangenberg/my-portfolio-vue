<template>
  <div class="confirmation d-flex align-items-center">
    <p v-if="$props.data.isSuccessful">
      Thank you! Your message has been sent. I will get back to you as soon as possible.
    </p>
    <div v-if="!$props.data.isSuccessful">
      <p>Woops! Something went wrong. Please try again later.</p>
      <p>
        <strong>Error {{ $props.data.error.status }}:</strong> {{ $props.data.error.message }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.confirmation {
  padding: 8% 5%;
  font-size: 1.2rem;
}
</style>
