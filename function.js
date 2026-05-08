// functionを定義する
export function check(type) {
    console.log(`--- ${type} のテスト ---`);

    if (type === "var") {
        var x = "最初";
        var x = "再定義"; // varは同じ名前で作り直せる
        console.log(x);

    } else if (type === "let") {
        let y = "最初";
        y = "再代入";     // letは中身の書き換えOK
        console.log(y);

    } else if (type === "const") {
        const z = "最初";
        console.log(z);
        try {
            z = "再代入"; // constはここでエラーになる
        } catch (e) {
            console.log("エラー: constは変えられません！");
        }
    } else {
        // どれにも当てはまらなかった場合
        console.log("var, let, const のどれかを入力してください");
    }
}

// // 実行時に渡した引数をそのまま関数に入れる
// check(process.argv[2]);

// // ruqireでexport
// module.exports = { check };
