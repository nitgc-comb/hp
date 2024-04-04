<template lang="pug">
  div
    section
      h3.section-title
        font-awesome-icon(icon="info-circle")
        | お知らせ
      NewsCard
    section.swing
      h3.section-title
        font-awesome-icon(icon="question-circle")
        | どんな部活？
      .carousel
        img.carousel-img(src="@/assets/images/top.jpg")
      AppealPoint
      ToAboutBtn
    section
      h3.section-title
        font-awesome-icon(icon="user-circle")
        | 部員と顧問
      .club-info
        .club-info-item
          .item-title 部員数
          .item-value {{ clubStatus.members }}名
        .club-info-item(v-for="item in clubStatus.advisor")
          .item-title {{ item.type }}
          .item-value {{ item.name }} ({{ item.department }})
</template>

<script>
import AppealPoint from '@/components/AppealPoint.vue'
import NewsCard from '@/components/NewsCard.vue'
import ToAboutBtn from '@/components/ToAboutBtn.vue'
import clubData from '@/assets/data.json'

export default {
  components: {
    AppealPoint,
    ToAboutBtn,
    NewsCard
  },
  computed: {
    clubStatus: () => clubData.info
  },
}
</script>
