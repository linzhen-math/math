/* 林貞數學 轉接頁設定
   課程網站上線後，把網址填進下面的引號裡，所有節次會一起改好。 */
var COURSE_SITE = '';

(function () {
  var m = location.pathname.match(/\/(\d{3})\/([\w-]+)\/[^\/]*$/);
  var ver = m ? m[1] : '', sec = m ? m[2] : '';
  var item = (location.hash || '').replace('#', '');
  if (!/^[kl]\d+$/.test(item)) item = '';
  var name = item ? (item[0] === 'k' ? '講解 ' : '類題 ') + item.slice(1) : '教學影片';
  var G = {'7a':'七上','7b':'七下','8a':'八上','8b':'八下','9a':'九上','9b':'九下'};
  var sm = sec.match(/^(\d[ab])-(.+)$/);
  var secName = sm ? (G[sm[1]] || sm[1]) + ' ' + sm[2] : sec;
  var go = COURSE_SITE ? COURSE_SITE + '#v' + ver + '-' + sec + (item ? '-' + item : '') : '';

  document.title = '林貞數學　' + secName + ' ' + name;
  var css = 'body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f4f6f9;color:#1d2433;' +
    'font:16px/1.6 "PingFang TC","Microsoft JhengHei",system-ui,sans-serif;padding:24px}' +
    '.box{background:#fff;border:1px solid #dde3ec;border-radius:18px;padding:32px 24px;max-width:420px;width:100%;text-align:center}' +
    '.brand{font-weight:700;color:#20314f;font-size:20px;letter-spacing:.05em}' +
    'h1{color:#20314f;font-size:26px;margin:14px 0 6px;border-bottom:3px solid #ffd23f;display:inline-block}' +
    'p{color:#5d6b82;margin:8px 0 0}a{color:#20314f;font-weight:700}';
  var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);

  var box = document.createElement('div'); box.className = 'box';
  box.innerHTML = '<div class="brand">林貞數學</div><h1>' + secName + '　' + name + '</h1>' +
    (go ? '<p>正在開啟影片…</p><p><a href="' + go + '">沒有自動跳轉？點這裡</a></p>'
        : '<p>影片準備中</p><p>錄好之後，掃同一個 QR code 就能看。</p>');
  document.body.appendChild(box);
  if (go) location.replace(go);
})();
