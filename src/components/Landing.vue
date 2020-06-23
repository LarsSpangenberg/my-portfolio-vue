<template>
  <div>
    <section class="profile">
      <div class="container-fluid">
        <img
          alt="Vue logo"
          class="rounded-circle profile-pic"
          src="https://cdn.pixabay.com/photo/2020/06/04/12/55/emoji-5258611_960_720.png"
        />
        <h1>Software Developer</h1>
        <p>First draft of my porfolio page created using vue.js and bootstrap.</p>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >Contact</button>
      </div>
    </section>
    <section class="portfolio">
      <h1>Portfolio</h1>
      <p>These are supposed to be sample projects</p>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="rounded-circle portfolio-img"
                  src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg"
                />
                <h2>web project</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Donec sed odio dui.
                  Etiam porta sem malesuada magna mollis euismod.
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                  Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Praesent commodo cursus magna.
                </p>
                <button type="button" class="btn btn-outline-secondary">More</button>
              </div>
            </div>
            <br />
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="rounded-circle portfolio-img"
                  src="https://i.pinimg.com/originals/4a/70/56/4a70563234301578c158dc142384a1c3.png"
                />
                <h2>web project</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                  cursus magna.
                </p>
                <button type="button" class="btn btn-outline-secondary">More</button>
              </div>
            </div>
            <br />
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="rounded-circle portfolio-img"
                  src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg"
                />
                <h2>web project</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                  cursus magna.
                </p>
                <button type="button" class="btn btn-outline-secondary">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- modal for contact -->
    <section class>
      <div
        class="modal fade bd-example-modal-lg"
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
import Contact from './Contact.vue';

export default {
  name: 'Landing',
  components: {
    Contact,
  },
};
</script>

<style scoped>
.profile {
  padding-top: 10%;
  padding-bottom: 10%;
}

.profile-pic {
  height: 220px;
  width: auto;
}

.portfolio {
  background-color: #34345238;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}

.portfolio-img {
  width: 140px;
  height: 140px;
  margin-top: 15px;
}
</style>
