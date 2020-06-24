<template>
  <div>
    <profile />
    <portfolio />
    <!-- modal for contact -->
    <section>
      <div
        class="modal fade contact-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="contactModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <contact />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Profile from './Profile.vue';
import Portfolio from './portfolio/Portfolio.vue';
import Contact from './Contact.vue';

export default {
  name: 'Landing',
  components: {
    Profile,
    Portfolio,
    Contact,
  },
};
</script>
