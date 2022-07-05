if ($request.headers["Cookie"]) {
  var headerBooks = $request.headers["Cookie"];
  var lpkBooks = headerBooks.indexOf("lpk=");
  if (lpkBooks > 0) {
    $done();
  } else {
    $persistentStore.write(headerBooks, "CookieBooks");
    $notification.post("📗 博客來 Cookie 保存成功 🎉", "", "");
  }
} else {
  $notification.post("📗 博客來 Cookie 保存失敗‼️", "", "請重新登入");
}
$done();
