<template>
  <section class="profile">
    <div class="container-fluid text-light">
      <h1>Fullstack Web and Android Developer</h1>
      <p>First draft of my porfolio page created using vue.js and bootstrap.</p>
      <img
        alt="Vue logo"
        class="rounded-circle profile-pic"
        src="@/assets/stupid-face-200.png"
      />
      <!-- <button
        type="button"
        class="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target=".contact-modal"
      >Contact</button> -->
    </div>
  </section>
</template>

<style scoped>
.profile {
  background: #000000 url('../assets/desk-background.png') 100% 0 no-repeat fixed;
  height: 100vh;
  padding-top: 10%;
  padding-bottom: 10%;
}

.profile-pic {
  height: 200px;
  width: auto;
}
</style>
