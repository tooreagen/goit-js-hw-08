import VimeoPlayer from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new VimeoPlayer(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.pause('play', function() {
    console.log('PAUSE!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});