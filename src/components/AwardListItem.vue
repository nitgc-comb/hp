<template lang="pug">
  .event-card
    .event-title {{ title }}
      .event-date {{ date }}
    .event-card-item(v-for="item in this.result")
      .item-category {{ item.category }}
      .item-award {{ item.award }}
      .event-card-item-title {{ item.title }}
</template>

<script>
export default {
  props: [
    'title',
    'date',
    'url',
    'result'
  ]
}
</script>
