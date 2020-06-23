<template>
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
</template>

<style scoped>
.profile {
  padding-top: 10%;
  padding-bottom: 10%;
}

.profile-pic {
  height: 220px;
  width: auto;
}
</style>
