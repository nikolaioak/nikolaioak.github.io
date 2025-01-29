let navMenuHTML = `
    <p>navigation</p>
    <ul>
        <li><a href="index.html">home</a></li>
        <li><a href="about.html">about</a></li>
        <li><a href="beer.html">beer</a></li>
        <li><a href="tinkering.html">tinkering</a></li>
        <li><a href="wordle.html">wordle4fun</a></li>
        <li><a href="credits.html">credits</a></li>
    </ul>
`;
document.getElementById("nav-menu").innerHTML = navMenuHTML;

let footerHTML = `
    <div class="footer-links">
        <ul>
            <li><a href="https://untappd.com/user/Nikolaioak" rel="me">Untappd</a></li>
            <li><a href="https://github.com/nikolaioak" rel="me">GitHub</a></li>
            <li><a href="https://my-place.social/profile/n7" rel="me">Friendica</a></li>
            <li><a href="https://pixelfed.social/@noakfield" rel="me">Pixelfed</a></li>
            <li><a href="https://todon.eu/@noakfield" rel="me">Mastodon</a></li>
            <li><a href="mailto:hello@nikolaimakes.beer" rel="me">Email</a></li>
            <li><img src="./img/nikolaimakesbeer-favicon-2.ico"/></li>
            <li><img src="./img/nikolaimakesbeer-favicon-2.ico"/></li>
        </ul>
    </div>
`;
document.getElementById("page-footer").innerHTML = footerHTML;