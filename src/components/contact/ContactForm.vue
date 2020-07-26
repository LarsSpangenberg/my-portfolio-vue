<template>
  <b-form class="container" @submit="onSubmit">
    <b-form-group
      label="Name:"
      label-for="contact-input-name"
    >
      <b-form-input
        id="contact-input-name"
        type="text"
        v-model="contact.name"
        placeholder="Enter your name"
        required
      />
    </b-form-group>

    <b-form-group
      label="Email:"
      label-for="contact-input-email"
    >
      <b-form-input
        id="contact-input-email"
        type="email"
        v-model="contact.email"
        placeholder="Enter your email"
        required
      />
    </b-form-group>

    <b-form-group
      label="Message:"
      label-for="contact-input-message"
    >
      <b-form-textarea
        id="contact-input-message"
        v-model="contact.message"
        placeholder="Write a message"
        rows="3"
        max-rows="6"
        required
      />
    </b-form-group>

    <b-button
      type="submit"
      variant="primary"
      size="lg"
      block
    >
      Send Message
    </b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    onSubmit() {
      // validating the form
      if (this.contact.email !== '' && this.contact.message !== '') {
        // send details to email
      } else {
        alert('All fields are required');
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0 3% 3%;
}
</style>
