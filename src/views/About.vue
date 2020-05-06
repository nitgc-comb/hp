<template lang="pug">
  div
    section
      SectionTitle(icon="check-circle" title="活動内容")
      SectionContent(icon="laptop-code" image="members" :left="true")
        template(#title) C言語講座
        template(#description)
          | 4月から9月にかけて、新たに入った人を対象にC言語を用いたプログラミング講座を行っています。
          | この講座で、プログラミングを基礎の基礎から分かりやすく、
          | 丁寧に説明し、全員がある程度プログラミングスキルを習得できることを目指しています。
      SectionContent(icon="gamepad" image="typing" :right="true")
        template(#title) ゲーム制作
        template(#description)
          | C言語講座が終わると、得た知識を生かして各々でゲームの制作を行い始めます。ゲームのジャンルや制作環境などに制約はなく、それぞれ作りたいものを作ります。そして、
          | 部内イベント「マスダヤモンの戦い」にて制作した作品を用いてコンテストを行います。さらに今度はその作品を来年度の高専祭にて展示し、
          | 学内の学生や来場される一般の方々に試遊していただいています。
      SectionContent(icon="users" image="procon_2019" :left="true")
        template(#title) 「高専プロコン」への参加
        template(#description)
          | 全国の高専規模で行われる大会はロボコンだけではありません。プログラミングの技術、発想を競う「全国高専プログラミングコンテスト」というものも毎年開催されています。
          | プログラミングコンテスト(プロコン)では、プログラミングの技術を競う競技部門に加え、テーマについて新しいプロダクトを提案する課題部門、自由な発想で新しいプロダクトを提案する自由部門の3部門あり、
          | 岐阜高専コンピュータ倶楽部は毎年各部門に参加しています。コンテストは、競技や発表以外にも、他高専の学生との交流もでき、参加した学生からは毎年とても充実していたと聞きます。
    section
      SectionTitle(icon="award" title="コンテスト参加・受賞歴")
      h4.year-section-title 2019
      AwardList(year="2019")
      h4.year-section-title 2018
      AwardList(year="2018")
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue'
import SectionContent from '../components/SectionContent.vue'
import AwardList from '../components/AwardList.vue'

export default {
  components: {
    SectionTitle,
    SectionContent,
    AwardList
  }
}
</script>
