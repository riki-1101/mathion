const sidebar = document.getElementById('sidebar');
if( sidebar != null) {
    sidebar.innerHTML = `
    <div id="sidebar-toc"></div>
    `
}

//　目次作成
document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.getElementById("sidebar-toc");
    if (!tocContainer) return;

    const tocTitle = document.createElement("figcaption");
    tocTitle.textContent = "目次";
    tocContainer.appendChild(tocTitle);

    const tocList = document.createElement("ul");

    // sectionタグでidを持つ要素を全部取得
    document.querySelectorAll("section[id]").forEach(section => {
        const sectionId = section.id;
        // そのsection内のh2を取得（1つだけ想定）
        const h2 = section.querySelector("h2");
        if (!h2) return; // h2がなければスキップ

        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#" + sectionId;          // sectionのidをリンク先に
        link.textContent = h2.textContent;    // h2のテキストをリンクに

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    tocContainer.appendChild(tocList);
});