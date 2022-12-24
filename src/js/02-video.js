import VimeoPlayer from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new VimeoPlayer.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

    console.log(player);