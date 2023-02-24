// 音乐绑定事件
function musicBindEvent() {
    document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
        lune.musicTelescopic();
    });
    document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
        lune.musicToggle(false);
    });
}