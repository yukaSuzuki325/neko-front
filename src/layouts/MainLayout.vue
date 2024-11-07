<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <!-- Home Section -->
      <section id="home" class="bg-image">
        <q-toolbar>
          <!-- Hamburger button for mobile screens -->
          <q-btn
            flat
            dense
            round
            icon="menu"
            v-if="$q.screen.lt.md"
            @click="showMenu = !showMenu"
          />
          <!-- Render toolbar buttons directly on larger screens -->
          <q-toolbar-title v-if="!$q.screen.lt.md">
            <q-btn
              v-for="section in sections"
              :key="section.id"
              flat
              :label="section.title"
              @click="scrollTo(section.sec)"
            />
          </q-toolbar-title>
        </q-toolbar>

        <!-- Dropdown menu for screens smaller than 1024px -->
        <div v-if="showMenu && $q.screen.lt.md" class="dropdown-menu">
          <q-list>
            <q-item
              v-for="section in sections"
              :key="section.id"
              clickable
              @click="navigateToSection(section.sec)"
            >
              <q-item-section>{{ section.title }}</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="home-content">
          <img
            src="/photos/NEKO-LOGO-black.png"
            alt="band logo"
            class="logo-img"
          />
          <div>
            <!-- Icons for social media links -->
            <q-btn
              class="social-icon"
              flat
              icon="mdi-instagram"
              @click="goTo('https://www.instagram.com/nekonekoband/?hl=en')"
            />
            <q-btn
              class="social-icon"
              flat
              icon="mdi-spotify"
              @click="
                goTo(
                  'https://open.spotify.com/artist/4KuIyNoadsNfMfXjk991XC?si=w61MhS-BQsaCvZN1cVaiAQ'
                )
              "
            />
            <q-btn
              class="social-icon"
              flat
              icon="mdi-facebook"
              @click="goTo('https://www.facebook.com/nekonekoband/')"
            />
            <q-btn
              class="social-icon"
              flat
              icon="mdi-youtube"
              @click="goTo('https://www.youtube.com/@nekobanduk/featured')"
            />
          </div>
        </div>
      </section>

      <div class="middle">
        <!-- News Section -->
        <section id="news" class="q-pa-xl">
          <NewsComp />
        </section>

        <!-- Shows Section -->
        <section id="shows" class="q-pa-xl q-my-xl text-white text-center">
          <ShowsComp />
        </section>

        <!-- Video Section -->
        <section id="videos" class="q-pa-xl q-my-xl">
          <VideosComp />
        </section>

        <!-- Discography Section -->
        <section id="discography" class="q-pa-xl q-my-xl text-white">
          <DiscographyComp />
        </section>

        <!-- Merch Section -->
        <section id="merch" class="q-pa-xl q-my-xl text-white">
          <MerchComp />
        </section>

        <!-- About Section -->
        <section id="about" class="q-pa-xl q-my-xl text-white">
          <AboutComp />
        </section>

        <!-- Contact Section -->
        <section id="contact" class="q-pa-xl text-white text-center">
          <ContactComp />
        </section>
      </div>
    </q-page-container>

    <!-- Footer -->
    <q-toolbar class="justify-center bg-dark">
      <q-toolbar-title class="text-white"
        >© 2024 NEKO. All Rights Reserved.</q-toolbar-title
      >
    </q-toolbar>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import NewsComp from "../components/NewsComp.vue";
import ShowsComp from "../components/ShowsComp.vue";
import VideosComp from "../components/VideosComp.vue";
import DiscographyComp from "../components/DiscographyComp.vue";
import MerchComp from "../components/MerchComp.vue";
import AboutComp from "../components/AboutComp.vue";
import ContactComp from "../components/ContactComp.vue";

const $q = useQuasar();
const showMenu = ref(false);

const sections = [
  { id: 1, sec: "home", title: "Home" },
  { id: 2, sec: "news", title: "News" },
  { id: 3, sec: "shows", title: "Shows" },
  { id: 4, sec: "videos", title: "Videos" },
  { id: 5, sec: "discography", title: "Discography" },
  { id: 6, sec: "merch", title: "Merch" },
  { id: 7, sec: "about", title: "About" },
  { id: 8, sec: "contact", title: "Contact" },
];

// Scroll function that uses `getElementById` to locate section by `id`
const scrollTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Function for dropdown items to navigate and close the menu
const navigateToSection = (sectionId) => {
  scrollTo(sectionId);
  showMenu.value = false;
};

const goTo = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
.logo-img {
  width: 50%;
  height: auto;
}

.social-icon {
  font-size: medium;
}

.bg-image {
  background-image: url("/photos/pic11.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.middle {
  background-image: url("/photos/pic12.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.home-content {
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

#news,
#videos,
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Style for the dropdown menu */
.dropdown-menu {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: #333;
  z-index: 1000;
  padding: 1rem;
}

.dropdown-menu .q-item {
  color: #eeeeee;
}

@media (max-width: 1024px) {
}
</style>
