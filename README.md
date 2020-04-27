# nitgc-comb
岐阜高専 コンピュータクラブのWebサイトです。

## 使ったもの
- Node.js
- Vue.js
- Webpack
- pug
- sass

## 使い方 / 開発の仕方
事前にgitで本リポジトリをクローンし、Node.jsとyarnをインストールしてください。このリポジトリではvue-cliのGUIを起動して、Web上で下記のコマンドの実行などができます。起動する場合はあらかじめvue-cliをインストールし
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
