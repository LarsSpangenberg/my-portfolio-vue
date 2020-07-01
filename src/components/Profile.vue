<template>
  <section class="profile">
    <div class="container-fluid">
      <img
        alt="Vue logo"
        class="rounded-circle profile-pic"
        src="@/assets/stupid-face-200.png"
      />
      <h1>Software Developer</h1>
      <p>First draft of my porfolio page created using vue.js and bootstrap.</p>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target=".contact-modal"
      >Contact</button>
    </div>
  </section>
</template>

<style scoped>
.profile {
  padding-top: 10%;
  padding-bottom: 10%;
}

.profile-pic {
  height: 200px;
  width: auto;
}
</style>
