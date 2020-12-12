<template>
  <section id="about" class="about">
    <b-container>
      <b-row>
        <b-col
          class="align-content-center justify-content-center d-flex pb-5 pr-md-5 pr-lg-3"
          md="4"
        >
          <img
            alt="author thumbnail"
            class="rounded-circle my-auto"
            src="@/assets/profile-pic.png"
          />
        </b-col>
        <b-col class="text-md-left px-5 px-md-3" md="8">
          <h1 class="about-title">Hi, I'm Lars. Nice to meet you!</h1>
          <p>
            I am a self-taught developer, always learning and keeping up to date with the latest
            technologies.
          </p>

          <h2>Technologies I use frequently:</h2>
          <p>
            <strong class="d-block d-md-inline">JavaScript:</strong>
            React, Vue.js, Node.js and Express, JQuery, Redux...
          </p>
          <p>
            <strong class="d-block d-md-inline">Java/Android:</strong>
            Spring, Android Studio, Dagger, Android Architecture Components, JavaFX...
          </p>
          <p>
            <strong class="d-block d-md-inline">Databases/Back-end:</strong>
            SQL, MongoDB and Mongoose, AWS...
          </p>
          <p>
            <strong class="d-block d-md-inline">Other:</strong>
            HTML/CSS, Bootstrap, SASS, Webpack, Adobe Illustrator...
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style scoped>
.container {
  padding-top: 10%;
  padding-bottom: 15%;
  min-height: 100vh;
}

h1 {
  font-size: 1.75rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 6%;
}

p {
  margin-top: 2%;
}
</style>
