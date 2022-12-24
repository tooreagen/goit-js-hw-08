import VimeoPlayer from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new VimeoPlayer(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.pause().then(console.log("PAUSED"));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});