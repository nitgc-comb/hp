<template lang="pug">
  .section-content(:class="{ 'img-l': left, 'img-r': right}")
    img.section-content-img(
      v-if="images[image]"
      :src="images[image]"
    )
    .content-explain
      h4.sub-section-title
        font-awesome-icon(:icon="icon")
        slot(name="title")
      p.description
        slot(name="description")
</template>

<script>
import { filename } from 'pathe/utils'

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
  },
  computed: {
    images: () => {
      const glob = import.meta.glob(`@/assets/images/*.jpg`, { eager: true })

      return Object.fromEntries(
        Object.entries(glob).map(([key, value]) => [filename(key), value.default])
      )
    }
  }
}
</script>
