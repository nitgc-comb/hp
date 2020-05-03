<template lang="pug">
  #app.fadeIn
    .header
      .menubar
        .site-title
          h1 nitgc-comb
        .navi-bar
          router-link.navi-item(to="/") Home
          router-link.navi-item(to="/about") About
          // router-link.navi-item(to="/works") Works
    .jumbotron
      h2.jumbotron-text Welcome to
        br
        | NITGC Computer Club
    .container
      transition(mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut")
        router-view
    .footer
      .copyright ©{{ nowYear }} 岐阜高専 コンピュータ倶楽部
</template>

<script>
const day = new Date()

export default {
  data () {
    return {
      nowYear: day.getFullYear()
    }
  }
}
</script>
