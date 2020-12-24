<template>
  <b-form
    class="container d-flex flex-column justify-content-between pt-3"
    @submit.stop.prevent="onSubmit"
  >
    <div>
      <b-form-group
        label="Name:"
        label-for="contact-name"
      >
        <b-form-input
          id="contact-name"
          type="text"
          v-model.trim="name"
          :state="validateState('name')"
          aria-describedby="contact-name-error-feedback"
          @blur="$v.name.$touch()"
          required
        />
        <b-form-invalid-feedback id="contact-name-error-feedback">
          *Required. Please provide your name.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Email:"
        label-for="contact-email"
      >
        <b-form-input
          id="contact-email"
          type="email"
          v-model.trim="replyTo"
          :state="validateState('replyTo')"
          aria-describedby="contact-email-error-feedback"
          @blur="$v.replyTo.$touch()"
          required
        />
        <b-form-invalid-feedback id="contact-email-error-feedback">
          *Required. Please provide an email to which I can reply to.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Message:"
        label-for="contact-message"
      >
        <b-form-textarea
          id="contact-message"
          v-model.trim="message"
          :state="validateState('message')"
          aria-describedby="contact-message-error-feedback"
          @blur="$v.message.$touch()"
          rows="3"
          max-rows="6"
          required
        />
        <b-form-invalid-feedback id="contact-message-error-feedback">
          *Required. Please type a message.
        </b-form-invalid-feedback>
      </b-form-group>
    </div>

    <b-button
      type="submit"
      variant="primary"
      :disabled="$v.$invalid"
      block
    >
      Send Message
    </b-button>
  </b-form>
</template>

<script>
import axios from 'axios';
import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      name: '',
      replyTo: '',
      message: '',
    };
  },
  validations: {
    name: { required },
    replyTo: { required, email },
    message: { required },
  },
  methods: {
    onSubmit() {
      const contactUrl = 'https://sbm3t5b7od.execute-api.us-east-1.amazonaws.com/dev/contact';
      const { name, replyTo, message } = this;

      this.$v.$touch();
      if (!this.$v.$invalid) {
        axios
          .post(contactUrl, {
            name,
            reply_to: replyTo,
            message,
          })
          .then(() => {
            this.$emit('submissionSuccess', true);
          })
          .catch((err) => {
            this.$emit('submissionSuccess', false, err);
          });
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    },
  },
};
</script>
