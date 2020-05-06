<template lang="pug">
  #app.fadeIn
    Header
    Jumbotron
    .container
      transition(mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut")
        router-view
    Footer
</template>

<script>
import Header from '@/components/common/Header.vue'
import Jumbotron from '@/components/common/Jumbotron.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  components: {
    Header,
    Jumbotron,
    Footer
  }
}
</script>
