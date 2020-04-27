<template lang="pug">
  .section-content
    img.section-content-img(v-if="imageLeft" :src="require(`@/assets/images/${imageLeft}.jpg`)")
    .content-explain
      h4.sub-section-title
        font-awesome-icon(:icon="icon")
        slot(name="title")
      p.description
        slot(name="description")
    img.section-content-img(v-if="imageRight" :src="require(`@/assets/images/${imageRight}.jpg`)")
</template>

<script>
export default {
  props: [
    'icon',
    'imageLeft',
    'imageRight'
  ]
}
</script>
