const header = document.getElementById('header');
if( header != null) {
    header.innerHTML = `
    <div><a href="/mathion/index.html" id="title">MathIon</a></div>
    <nav>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li><a href="/mathion/index.html">ホーム</a></li>
        </ul>
    </nav>
    `
}