<template>
  <footer>
    <b-container class="footer-container bg-dark" fluid>
      <b-button
          class="contact-button mx-auto"
          variant="info"
          block
          v-b-modal.contact-modal
      >
        Contact Me
      </b-button>

      <small class="d-block text-light mt-5">Lars Spangenberg © 2020</small>
    </b-container>
  </footer>
</template>

<style scoped>
  .footer-container {
    padding-top: 6%;
    padding-bottom: 4%;
  }

  .contact-button {
    max-width: 500px;
  }
</style>
