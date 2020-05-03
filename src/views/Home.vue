<template lang="pug">
  div
    section.swing
      h3.section-title
        font-awesome-icon(icon="info-circle")
        | どんな部活？
      .carousel
        transition-group(mode="out-in" name="fade" tag="div")
          .carousel-inner(v-for="(image, index) in images" v-if="currentImage == index" :key="index")
            img.carousel-img(:src="images[currentImage]")
      ul.point
        li.list-item
          span.highlight プログラミング
          | をして様々なことに取り組む部活です
        li.list-item 活動は
          span.highlight 月・水
          | の放課後で週2回です
          span.highlight (兼部も可能です)
        li.list-item
          span.highlight 情報処理センター2F
          | で活動しています (工事中は2号館1F奥の実験室を活動場所、2号館3Fゼミナール室を部室としています)
        li.list-item プログラミングについて
          span.highlight 何も分からなくても大丈夫！部員が丁寧に教えます
        li.list-item
          span.highlight プログラミング以外の創作活動
          | も行っています
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
import ToAboutBtn from '../components/ToAboutBtn'
import info from '../assets/data.json'

export default {
  data: () => ({
    currentImage: 0,
    timer: 0
  }),
  components: {
    ToAboutBtn
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.nextImage()
      }, 3000)
    })
  },
  computed: {
    images: () => [
      require('@/assets/images/members_2.jpg'),
      require('@/assets/images/plate.jpg'),
      require('@/assets/images/typing.jpg')
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
