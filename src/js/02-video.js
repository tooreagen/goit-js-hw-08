import VimeoPlayer from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new VimeoPlayer(iframe);

player.on('timeupdate', function(seconds) {
    // player.getCurrentTime().then(function (seconds) {
         console.log(`Видео на ${seconds}`);
    // });
});