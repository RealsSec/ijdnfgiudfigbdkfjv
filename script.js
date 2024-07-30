function enterSite() {
    document.getElementById('warning').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
    var audio = document.getElementById('background-music');
    audio.volume = 0.20;
    audio.play();
}
