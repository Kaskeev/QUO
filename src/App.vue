<template>
  <div>
    <Header />
    <div class="w-full h-screen mx-auto pt-4 px-5 bg-gray-100">
      <div class="bg-white">
        <section class="md:max-w-2xl lg:max-w-3xl xl:max-w-screen-xl mx-auto">
          <router-view />
        </section>
      </div>

      <!-- <DateBlock /> -->
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Contacts from './components/Contacts.vue'
export default {
  name: 'App',
  components: {
    Header,
    Contacts,
    // DateBlock,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
