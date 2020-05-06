<template lang="pug">
  footer
    .copyright ©{{ nowYear }} 岐阜高専 コンピュータ倶楽部
</template>

<script>
export default {
  computed: {
    nowYear: () => {
      return new Date().getFullYear()
    }
  }
}
</script>
