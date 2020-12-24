<template>
  <section id="contact">
      <b-modal
        id="contact-modal"
        :title="modalTitle"
        size="lg"
        header-bg-variant="light"
        header-text-variant="dark"
        centered
        hide-footer
      >
        <div class="body d-flex" :class="bodyHeight">
          <contact-form v-if="!formSubmitted" @submissionSuccess="onSubmit" />
          <confirmation v-if="formSubmitted" :data="confirmationData" />
        </div>
      </b-modal>
    </section>
</template>

<script>
import ContactForm from './ContactForm.vue';
import Confirmation from './SubmitConfirmation.vue';

export default {
  name: 'contact',
  components: {
    ContactForm,
    Confirmation,
  },
  data() {
    return {
      formSubmitted: false,
      confirmationData: null,
    };
  },
  computed: {
    bodyHeight() {
      return this.formSubmitted ? 'body__shrink' : '';
    },
    modalTitle() {
      if (this.formSubmitted) {
        if (this.confirmationData.isSuccessful) return 'Success!';
        if (this.confirmationData.error) return 'Error...';
      }
      return 'Contact Me';
    },
  },
  methods: {
    onSubmit(isSuccessful, err) {
      const confirmationData = { isSuccessful };
      this.formSubmitted = true;

      if (!isSuccessful) {
        confirmationData.error = err;
      }

      this.confirmationData = confirmationData;
    },
    resetModal() {
      this.formSubmitted = false;
      this.confirmationData = null;
    },
  },
  mounted() {
    this.$root.$on('bv::modal::hidden', this.resetModal);
  },
};
</script>

<style scoped>
.body {
  min-height: 425px;
  padding: 0 3% 3%;
  transition: all .3s ease-in-out;
}

.body__shrink {
  min-height: 200px;
}
</style>
