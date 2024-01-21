// Refer from: https://qiita.com/nekomimi_360/items/b1e12a8dce18b3a10e98
// TLに投稿する関数
function TLPost() {
  let postURL = "https://misskey.04.si/api/notes/create"
  var headers = {"Content-Type": "application/json",}
  var data = {
    "method": "post",
    "headers": headers,
    'payload': JSON.stringify({
      "i" : "ここにAPIキー",
      "text": "こんにちは～!"
    })
  }
  let responses = UrlFetchApp.fetch(postURL,data)// リクエスト
}
