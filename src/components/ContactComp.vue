<template>
  <div class="text-h4 text-pink q-mb-lg">CONTACT</div>
  <div class="contact-form-container q-pb-sm">
    <form @submit.prevent="sendMessage" class="contact-form">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        class="form-input"
        required
      />

      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        class="form-input"
        required
      />

      <label for="message" class="form-label">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        class="form-textarea"
        required
      ></textarea>

      <button type="submit" class="form-button">Send Message</button>
    </form>

    <div v-if="statusMessage" :class="statusClass" class="status-message">
      {{ statusMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const statusMessage = ref("");
const statusClass = ref("");

const sendMessage = async () => {
  try {
    const response = await fetch("https://neko-back.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });
    if (response.ok) {
      statusMessage.value = "Your message was sent successfully!";
      statusClass.value = "bg-positive text-white";
      form.value = { name: "", email: "", message: "" };
    } else {
      statusMessage.value = "There was a problem sending your message.";
      statusClass.value = "bg-negative text-white";
    }
  } catch (error) {
    statusMessage.value = "An error occurred. Please try again later.";
    statusClass.value = "bg-negative text-white";
  }
};
</script>

<style scoped>
.contact-form-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: #333333;
  padding: 2rem;
  border-radius: 8px;
}

.form-label {
  display: block;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #555555;
  border-radius: 4px;
  background-color: #444444;
  color: #ffffff;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #cccccc;
}

.form-textarea {
  resize: vertical;
  height: 120px;
}

.form-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #00bcd4;
  background: transparent;
  border: 2px solid #00bcd4;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
}

.form-button:hover {
  background-color: #00bcd4;
  color: #ffffff;
}

.status-message {
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
}

.bg-positive {
  background-color: #4caf50;
  color: #ffffff;
}

.bg-negative {
  background-color: #f44336;
  color: #ffffff;
}
</style>
