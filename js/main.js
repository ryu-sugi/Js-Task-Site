 // エラーチェック厳密化の記述
'use strict'

{
 // アコーディオンメニューに関する記述
 const menu = document.querySelectorAll(".js-menu"); // クリックする3つの要素js-menuというクラスを取得

 function toggle() { // toggle関数を定義(toggleはクラスを付けたり外したりしてくれる。)
  const content = this.nextElementSibling;
  this.classList.toggle("is-active"); // クラスが含まれている場合クラスを削除
  content.classList.toggle("is-open"); // クラスが含まれていなければクラスを追加
 }


for (let i = 0; i < menu.length; i++) { // for文で要素にクリックイベントをつける
      menu[i].addEventListener("click",toggle);
    }
}
 // アコーディオンメニューに関する記述


// ハンバーガーメニューに関する記述
{
const open = document.getElementById("open");

// querySelectorを使用する事でCSSセレクタを取得してくる
const overlay = document.querySelector('.overlay');

// HTMLから'close'IDを取得してくる
const close = document.getElementById('close');

 // クリックする事でイベント発火させる為の記述
 open.addEventListener('click', () => {
   overlay.classList.add('show'); //overlayのshowクラスを指定
   open.classList.add('hide'); //openのhideクラスを指定
 });

 close.addEventListener('click', () => {
  overlay.classList.remove('show'); 
  open.classList.remove('hide'); 
});
}
// ハンバーガーメニューに関する記述

// スライドショーに関する記述
{
  const next = document.getElementById('next');
  const ul = document.querySelector('.image ul');
  const prev = document.getElementById('prev');

  next.addEventListener('click', () => {
    ul.style.transform = 'translateX(-100%)';
  });

  prev.addEventListener('click', () => {
    ul.style.transform = 'translateX(100%)';
  });
}