<template>
  <section id="about" class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-5">
          <img
            alt="author thumbnail"
            class="rounded-circle profile-pic"
            src="@/assets/stupid-face-200.png"
          />
        </div>
        <div class="col-md-8 about-content">
          <h1 class="about-title">Hi, I'm Lars. Nice to meet you!</h1>
          <p>I am a self-taught developer, constantly learning, and enjoying every minute of it.</p>
          <h2>My tech stack:</h2>
          <p>JavaScript, Java, MERN Stack, Vue.js, JQuery, Android Studio, Jakarta EE, SQL,
            and more... </p>
          <h2>Other tools and libraries I use regularly:</h2>
          <p>Redux, Bootstrap, Github, Visual Code Studio, IntelliJ IDEA, Chrome Dev Tools, Dagger,
            Anroid Architecture Components, and more...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding-top: 10%;
  padding-bottom: 10%;
}

.about-content {
  text-align: left;
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
