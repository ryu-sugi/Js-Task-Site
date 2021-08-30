 const menu = document.querySelectorAll(".js-menu"); // クリックする3つの要素js-menuというクラスを取得

 function toggle() { // toggle関数を定義
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-opem");
 }

