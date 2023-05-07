<script setup>
  import { RouterView } from 'vue-router'
  import Navbar from '@/components/Navbar.vue';
  import MobileMenu from '@/components/MobileMenu.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />
  <MobileMenu />

  <main>
    <RouterView />
  </main>

  <Footer />

</template>
