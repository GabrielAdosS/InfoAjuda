var button = document.getElementById('btn_header');
var header = document.getElementById('header');
var navigation = document.getElementById('navigation');
var banner = document.getElementById('banner');
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');
var footer = document.getElementById('footer');
var quadro = document.getElementById('quadro');
var sidebar = false;

function openSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        navigation.style.marginLeft = '-70vw';
        navigation.style.animationName = 'openSidebar';
        banner.style.filter = 'blur(2px)';
        section2.style.filter = 'blur(2px)';
        section3.style.filter = 'blur(2px)';
        footer.style.filter = 'blur(2px)';
        cor.style.filter = 'blur(2px)';
    }else {
        navigation.style.marginLeft = '-135vw';
        navigation.style.animationName = 'closeSidebar';
        banner.style.filter = '';
        section2.style.filter = '';
        section3.style.filter = '';
        footer.style.filter = '';
        cor.style.filter = '';
    }
}
function closeSidebar() {
    if (sidebar) {
        openSidebar()
    }
}

window.addEventListener('resize', function (event) {
    if (this.window.innerWidth > 768 && sidebar) {
        openSidebar();
    }
})