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
          .item-value {{ clubInfo.members }}名
        .club-info-item(v-for="item in clubInfo.advisor")
          .item-title {{ item.type }}
          .item-value {{ item.name }} ({{ item.department }})
</template>

<script>
import AppealPoint from '@/components/AppealPoint.vue'
import NewsCard from '@/components/NewsCard.vue'
import ToAboutBtn from '@/components/ToAboutBtn.vue'
import info from '../assets/data.json'

export default {
  components: {
    AppealPoint,
    ToAboutBtn,
    NewsCard
  },
  data () {
    return {
      currentImage: 0,
      timer: 0
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.nextImage()
      }, 4000)
    })
  },
  computed: {
    images: () => [
      {
        id: 1,
        img: require('@/assets/images/members.jpg')
      },
      {
        id: 2,
        img: require('@/assets/images/plate.jpg')
      },
      {
        id: 3,
        img: require('@/assets/images/typing.jpg')
      }
    ],
    clubInfo: () => info.info
  },
  methods: {
    nextImage () {
      if (this.currentImage === this.images.length - 1) {
        this.currentImage = 0
      } else {
        this.currentImage++
      }
    }
  }
}
</script>
