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
            src="@/assets/stupid-face-200.png"
          />
        </b-col>
        <b-col class="text-md-left" md="8">
          <h1 class="about-title">Hi, I'm Lars. Nice to meet you!</h1>
          <p>I am a self-taught developer, constantly learning, and enjoying every minute of it.</p>
          <h2>My tech stack:</h2>
          <p>JavaScript, Java, MERN Stack, Vue.js, JQuery, Android Studio, Jakarta EE, SQL,
            and more... </p>
          <h2>Other tools and libraries I use regularly:</h2>
          <p>Redux, Bootstrap, Github, Visual Code Studio, IntelliJ IDEA, Chrome Dev Tools, Dagger,
            Anroid Architecture Components, and more...</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style scoped>
.container {
  padding-top: 15%;
  padding-bottom: 15%;
  min-height: 100vh;
}

h1 {
  font-size: 1.75rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 8%;
}

p {
  margin-top: 2%;
}
</style>
