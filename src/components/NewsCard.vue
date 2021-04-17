<template lang="pug">
  .card
    .card-title 入部希望の方へ
    .card-subtitle 2020-04-17
    .card-text
      | コンピュータ倶楽部では、入部を希望する方をいつでも募集しています！
      ul
        li 入部したいけど方法が分からない
        li 入部を検討しているけど、詳しく話を聞いておきたい
        li 体験講座でプログラミングを触ってみたい
      | などありましたら、リンク先のフォームに必要事項を入力し送信してください！
    .card-actions
      a.btn.router-btn(
        target="blank"
        href="https://forms.gle/scp9VBHBzX1G9oc68"
      )
        font-awesome-icon.icon-detail(icon="angle-double-right")
        | 問い合わせフォーム
</template>
