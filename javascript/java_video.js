var button = document.getElementById('btn_header');
var header = document.getElementById('header');
var navigation = document.getElementById('navigation');
var main = document.getElementById('cor');
var footer =document.getElementById('footer');
var container = document.getElementById('container');
var sidebar = false;

function openSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        navigation.style.marginLeft = '-70vw';
        navigation.style.animationName = 'openSidebar';
        main.style.filter = 'blur(2px)';
        footer.style.filter = 'blur(2px)';
    } else {
        navigation.style.marginLeft = '-135vw';
        navigation.style.animationName = 'closeSidebar';
        main.style.filter = '';
        footer.style.filter = '';
    }
}

function closeSidebar() {
    if (sidebar) {
        openSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (this.window.innerWidth > 768 && sidebar) {
        openSidebar();
    }
});
