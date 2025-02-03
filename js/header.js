const header = document.getElementById('header');
if( header != null) {
    header.innerHTML = `
    <div><a href="/math/index.html" id="title">Mathematics</a></div>
    <ul>
        <li><a href="/math/calculus.html"><div class="field">calculus</div>解析学</a></li>
        <li><a href="/math/algebra.html"><div class="field">algebra</div>代数学</a></li>
        <li><a href="/math/probability-and-statistics.html"><div class="field">probability and statistics</div>確率と統計</a></li>
        <li><a href="/math/set-theory.html"><div class="field">set theory</div>集合論</a></li>
        <li><a href="/math/machine-learning.html"><div class="field">machine learning</div>機械学習</a></li>
    </ul>`
}
