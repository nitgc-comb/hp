<template lang="pug">
  .section-content(:class="{ 'img-l': left, 'img-r': right}")
    img.section-content-img(
      v-if="image"
      :src="require(`@/assets/images/${image}.jpg`)"
    )
    .content-explain
      h4.sub-section-title
        font-awesome-icon(:icon="icon")
        slot(name="title")
      p.description
        slot(name="description")
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>
