# データ更新の方法

前提となるソフトウェアはDeno  
バージョンは何でもいいはず

2. `src/data/unitName.json` を開いて、更新する
1. `src/data/idolToUnit.json` を開いて、更新する
2. `src/data/idolToUnit.json` を `scripts/`にコピーする
3. カレントディレクトリを`scripts/`にする
4. `deno run ReverseResolitionize.ts`をする
5. 生成した`scripts/unitToIdol.json` を `src/data/unitToIdol.json` に上書きコピー
