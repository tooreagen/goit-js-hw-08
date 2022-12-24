import VimeoPlayer from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new VimeoPlayer(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.on('pause', function() {
    console.log('PAUSED!');
    player.getCurrentTime().then(function (seconds) {
        console.log(`Видео остановлено на ${seconds}`);
    });
});
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

