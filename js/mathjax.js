// Safari 判定（Chrome on iOS を除外）
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// MathJax 設定
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        packages: { '[+]': ['ams'] }  // amsパッケージ追加
    },
    svg: { fontCache: 'global' },
    options: {
        enableMenu: false,
        renderActions: {
            addMenu: []
        }
    }
};

// Safari → SVG（tex-mml-svg.js）
// それ以外 → CHTML（tex-mml-chtml.js）
const script = document.createElement('script');
script.defer = true;
script.src = isSafari
  ? '../mathjax/es5/tex-mml-svg.js'
  : '../mathjax/es5/tex-mml-chtml.js';
document.head.appendChild(script);