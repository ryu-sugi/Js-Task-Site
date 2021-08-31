 // エラーチェック厳密化の記述
'use strict'
 
 const menu = document.querySelectorAll(".js-menu"); // クリックする3つの要素js-menuというクラスを取得

 function toggle() { // toggle関数を定義(toggleはクラスを付けたり外したりしてくれる。)
  const content = this.nextElementSibling;
  this.classList.toggle("is-active"); // クラスが含まれている場合クラスを削除
  content.classList.toggle("is-open"); // クラスが含まれていなければクラスを追加
 }


for (let i = 0; i < menu.length; i++) { // for文で要素にクリックイベントをつける
      menu[i].addEventListener("click",toggle);
    }
