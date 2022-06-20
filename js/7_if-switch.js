// 算術演算子を使った場合の戻り値の出力
console.log(45 + 18);
// 比較演算子を使った場合の戻り値の出力
console.log(45 > 18);
// 等価演算子を使った場合の戻り値の出力
console.log('5' == 5);
// 厳密等価演算子を使った場合の戻り値の出力
console.log('5' === 5);
// 変数numに0〜4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);
// 変数numを出力する（確認用）
console.log(num);
// 変数numの値が4であれば、「大当たりです」という文字列を戻り値として出力
if (num === 4){
    console.log('大当たりです');
}
// 変数numの値が3であれば、「当たりだよ」という文字列を戻り値として出力
else if (num === 3) {
    console.log('当たりだよ');
}
// 変数numの値が3,4以外であれば、「はずれです」という文字列を戻り値として出力
else {
    console.log('はずれです');
}
// 変数numに0〜4までのランダムな整数を代入する
num = Math.floor(Math.random() * 5);
// 変数numの値を出力する（確認用）
console.log(num);
// 変数numの値によって、出力する文字列を切り替える（switch）case=この値の時はこうする！default=case以外のパターン（例外）がでたらこうなる！
switch (num) {
    case 2:
        console.log('小吉です');
        break;
    case 3:
        console.log('中吉です');
        break;
    case 4:
        console.log('大吉です');
        break;
    default:
        console.log('凶ですがんばれ')
        break;
}