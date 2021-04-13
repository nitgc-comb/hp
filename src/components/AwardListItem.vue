<template lang="pug">
  .event-card
    .event-title
      a(:href="url" target="block")
        | {{ title }}
        font-awesome-icon(icon="external-link-alt")
      .event-date {{ date }}
    .event-card-item(v-for="item in this.result")
      .item-category {{ item.category }}
      .item-award {{ item.award }}
      .event-card-item-title {{ item.title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    },
    result: {
      type: Array,
      default: () => []
    },
    url: {
      type: String,
      default: null
    }
  }
}
</script>
