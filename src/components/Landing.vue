<template>
  <div>
    <navigation />
    <profile />
    <about />
    <portfolio />
    <section id="contact">
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
    <main-footer />
  </div>
</template>

<script>
import Navigation from './common/Navigation.vue';
import Profile from './Profile.vue';
import About from './About.vue';
import Portfolio from './portfolio/Portfolio.vue';
import Contact from './Contact.vue';
import MainFooter from './common/Footer.vue';

export default {
  name: 'Landing',
  components: {
    Navigation,
    Profile,
    About,
    Portfolio,
    Contact,
    MainFooter,
  },
};
</script>
