<template lang="pug">
  .history
    AwardListItem(
      v-for="item in awardData"
      :key = "item.id"
      :date = "item.date"
      :title = "item.title"
      :url = "item.url"
      :result = "item.result"
    )
</template>

<script>
import award from '../assets/data.json'
import AwardListItem from './AwardListItem.vue'

export default {
  data () {
    return {
      awardData: award.award[this.year]
    }
  },
  props: ['year'],
  components: {
    AwardListItem
  }
}
</script>
