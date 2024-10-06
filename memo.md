# 開発メモ

## ファイルについて

### unitName.json

ユニット名→表示名をするための変換用

名前の一貫性を保つ(正規化の)ためにも使われている？

例:

```
"レジェンドデイズ": "レジェンドデイズ",
"合言葉はスタートアップ！": "レジェンドデイズ",
"LTH01": "レジェンドデイズ",
```

### idolData.json

imageは使ってない

名前とscreenNameが異なるのはエミリーのみ(キー名はエミリースチュアート)

## 展望

### 問題

- App.jsの肥大化
- マジックナンバーが多い
- データ取り出しの方法に一貫性がない
- データにルールがない
- 今は主流ではないClass Componentな書き方
- Booleanでいいところで使っていない

ほかにもいろいろ