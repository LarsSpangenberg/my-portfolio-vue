<template>
  <div class="container">
    <h2>Contact Me</h2>
    <form action="mailto:lazerus88@gmail.com" method="post" enctype="text/plain">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          v-model="contact.name"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          v-model="contact.email"
          placeholder="Enter your email"
        />
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          v-model="contact.message"
          rows="3"
          placeholder="Write a message"
        />
      </div>
      <button type="button" @click="submit" class="btn btn-primary btn-lg">Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submit() {
      // validating the form
      if (this.contact.email !== '' && this.contact.message !== '') {
        // send details to email
      } else {
        alert('All fields are required');
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10%;
}
</style>
