const header = document.getElementById('header');
if( header != null) {
    header.innerHTML = `
    <div><a href="calculus/index.html" id="title">Calculus</a></div>
    <nav>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li><a href="calculus/index.html">ホーム</a></li>
            <li><a href="">TOPIC</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </nav>
    `
}