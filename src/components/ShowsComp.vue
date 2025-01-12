<template>
  <div class="text-h4 text-pink q-mb-lg">SHOW DATES</div>
  <div v-if="shows.length" class="show-dates-container">
    <div v-for="show in shows" :key="show.id" class="show-card">
      <div class="date-box">
        <div class="date-month">{{ show.date.month }}</div>
        <div class="date-day">{{ show.date.day }}</div>
      </div>
      <div class="show-info">
        <div class="show-title">{{ show.city }}: {{ show.venue }}</div>
        <div class="show-time">
          <span class="show-icon">📅</span>
          <span>{{ show.date.full }}</span>
        </div>
      </div>
      <a :href="show.link" target="_blank" class="get-tickets-btn">Tickets</a>
    </div>
  </div>
  <div v-else class="no-shows">No upcoming concerts or festivals.</div>
</template>

<script setup>
import { ref } from "vue";

const shows = ref([
  {
    id: 1,
    city: "London",
    venue: "The Victoria Dalston",
    date: {
      day: "27",
      month: "NOV",
      full: "Wed 27 Nov 2024",
    },
    link: "https://dice.fm/event/v386o6-neko-own-world-27th-nov-the-victoria-london-tickets",
  },
]);
</script>

<style scoped>
.show-dates-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.show-card {
  display: flex;
  background-color: #333333;
  border-radius: 8px;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.date-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  color: #333333;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
}

.date-month {
  font-size: 0.8rem;
}

.date-day {
  font-size: 1.5rem;
}

.show-info {
  flex-grow: 1;
  min-width: 250px;
}

.show-title {
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
}

.show-time {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #cccccc;
  margin-top: 0.25rem;
}

.show-icon {
  margin-right: 0.5rem;
}

.get-tickets-btn {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.get-tickets-btn:hover {
  background-color: #ffffff;
  color: #333333;
}

.no-shows {
  font-size: 1.1rem;
  color: #ffffff;
}
</style>
