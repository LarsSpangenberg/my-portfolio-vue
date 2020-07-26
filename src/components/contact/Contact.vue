<template>
  <section id="contact">
      <b-modal
        id="contact-modal"
        title="Contact Me"
        size="lg"
        header-bg-variant="light"
        header-text-variant="dark"
        centered
        hide-footer
      >
        <contact-form />
      </b-modal>
    </section>
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  name: 'contact',
  components: {
    ContactForm,
  },
};
</script>
