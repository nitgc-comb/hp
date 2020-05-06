# nitgc-comb
岐阜高専コンピュータ倶楽部のWebサイトです。

![github-pages](https://github.com/nitgc-comb/hp/workflows/github-pages/badge.svg)

## 概要
- Vue.jsで作成しました
- GUIでメンテナンス等が可能なvue-cliでプロジェクトを作り、それを基礎としています
- `master`ブランチにプッシュもしくはプルリクエストからのマージをすると、GitHub上で自動ビルドを行います(GitHub Actions)
  - 生成されたファイルは`gh-pages`ブランチに置かれ、GitHub Pagesにて公開しています

## 今後の更新について
基本的にコンピュータ倶楽部の部員であれば誰でも更新ができます。是非コンピュータ倶楽部のOrganizationに参加してください！参加方法は @junki-gnct や @lalaso2000 , @prismistim などに聞いてください。

## 使い方 / 開発の仕方
事前にgitで本リポジトリをクローンし、Node.jsとyarnをインストールしてください。このリポジトリではvue-cliのGUIを起動して、Web上で下記のコマンドの実行などができます。起動する場合はあらかじめvue-cliをグローバルでインストールし
```bash
vue ui
```
とコマンドシェル上で入力して起動してください。

### 依存パッケージのインストール (初回のみ)
```bash
yarn install
```

### ローカルサーバの起動とホットリロード (ファイル変更時に自動的に更新)
```bash
yarn serve
```

### 公開用にビルド
```bash
yarn build
```

### ESLintによる構文チェック
```bash
yarn lint
```