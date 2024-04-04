<template lang="pug">
  .fadeIn
    Header
    Jumbotron
    .container
      router-view(v-slot="{ Component }")
        transition(mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut")
          keep-alive
            component(:is="Component")
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
