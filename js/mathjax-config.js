// Safariブラウザを判別
function isSafari() {
  return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
}

window.MathJax = {
    options: {
      enableMenu: false,
      renderActions: {
        addMenu: []
      }
    },
    tex: {
      packages: { '[+]': ['ams'] }  // amsパッケージ追加
    }
};

// Safariの場合のみSVGレンダリングモードに設定
if (isSafari()) {
  window.MathJax.SVG = {
    scale: 100,
    minScale: 50,
    linebreaks: { automatic: true }
  };
}