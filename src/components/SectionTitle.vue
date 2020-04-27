<template lang="pug">
  h3.section-title
    font-awesome-icon(:icon="icon")
    | {{ title }}
</template>

<script>
export default {
  props: [
    'icon',
    'title'
  ]
}
</script>
