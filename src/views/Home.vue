<template lang="pug">
  div
    section.swing
      h3.section-title
        font-awesome-icon(icon="info-circle")
        | どんな部活？
      el-carousel(v-if="images" height="350px" :interval="5000" trigger="click")
        el-carousel-item(v-for="item in images" :key="item")
          img.section-content-img(:src="require(`@/assets/images/${item}.jpg`)")
      ul.point
        li.list-item
          span.highlight プログラミング
          | をして様々なことに取り組む部活です
        li.list-item 活動は
          span.highlight 月・水
          | の放課後で週2回です
          span.highlight (兼部も可能です)
        li.list-item 基本、
          span.highlight 情報処理センター2F第3演習室
          | で活動しています
        li.list-item プログラミングについて
          span.highlight 何も分からなくても大丈夫！部員が丁寧に教えます
        li.list-item
          span.highlight プログラミング以外の創作活動
          | も行っています
      .control-zone
        router-link.btn.router-btn(to="/about")
          font-awesome-icon.icon-detail(icon="angle-double-right")
          | 詳細を見る
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
import info from '../assets/data.json'

export default {
  computed: {
    images: () => ['members_2', 'plate', 'typing'],
    clubInfo: () => info.info
  }
}
</script>
