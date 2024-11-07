<template>
  <div class="text-center">
    <div class="text-h4 text-pink-3">ABOUT</div>
    <div class="bio text-center q-ma-lg">
      <div class="desc-container">
        <p class="q-pa-xl descriptions">
          Refreshed from a year's meditation and fuelled by a lethal combination
          of extra strong coffee and those lotus biscuits with the cream in the
          middle, Neko, the premier act to emerge from Bristol's thriving
          Japanese language post rock/electronica micro scene (population 1),
          are set to release Windfall, their second EP, on 22 November 2024,
          following on from 2023 debut King Louie. Like most second releases,
          it's a more mature collection of songs than its predecessor (fewer
          songs about 5 a side football, more songs about complicated IT jobs
          and desperate attempts to avoid middle aged spread) that sees the
          band, now with vocalist Yuka Suzuki as a full time member, polish and
          develop their distinctive sound. Teaming up again with producer Dom
          Mitchison, the EP's four tracks are a vibrant melting pot of styles
          and ideas. Yuka Suzuki's ethereal vocals are the one constant, through
          the dreamy Stack Overflow and Kleshas to the moody guitar lines and
          Donna Summer style synths of Almost Forgotten. Slow building title
          track Windfall brings the EP to a pounding, cathartic conclusion.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.desc-container {
  width: 80%;
  z-index: 1;
}
.bio {
  position: relative;
  max-width: 700px;
  padding: 2rem;
  text-align: center;
  color: #eeeeee;
}

.bio::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/photos/Neko-Band1.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  z-index: 0.5;
  border-radius: inherit;
}

.descriptions {
  z-index: 2;
  text-align: left;
}

@media (max-width: 414px) {
  .desc-container {
    width: 100%;
  }
  .bio {
    padding: 0px;
  }
}
</style>
