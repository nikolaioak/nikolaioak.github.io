let navMenuHTML = `
    <p>navigation</p>
    <ul>
        <li><a href="index">home</a></li>
        <li><a href="about">about</a></li>
        <li><a href="beer">beer</a></li>
        <li><a href="tinkering">tinkering</a></li>
        <li><a href="blurbs">blurbs</a></li>
        <li><a href="wordle">wordle4fun</a></li>
        <li><a href="credits">credits</a></li>
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