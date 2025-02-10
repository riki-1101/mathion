
window.MathJax = {
    options: {
        enableMenu: false
    }
};

// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active"); // ハンバーガーアイコンの変化
        nav.classList.toggle("open"); // ナビゲーションメニューの開閉
    });
});

//　目次作成
document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.getElementById("table-of-contents");

    if (!tocContainer) return; // 既存の要素がない場合は処理しない
    
    const tocTitle = document.createElement("div");
    tocTitle.textContent = "目次";
    tocContainer.appendChild(tocTitle);

    const tocList = document.createElement("ol");

    document.querySelectorAll("h2[id]").forEach((element) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#" + element.id;
        link.textContent = element.textContent;

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    tocContainer.appendChild(tocList);
});
