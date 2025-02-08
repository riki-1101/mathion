
window.MathJax = {
    options: {
        enableMenu: false
    }
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hamburger").addEventListener("click", function() {
      // メニューの開閉状態を切り替える
      document.querySelector("nav").classList.toggle("open");
  
      // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
      this.classList.toggle("active");
    });
});
  