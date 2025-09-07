<template>
  <div id="app">
    <Header v-if="!hideLayout" />
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/structure/Header.vue'
import Footer from './components/structure/Footer.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const hideLayout = computed(() => route.name === 'Login')
</script>