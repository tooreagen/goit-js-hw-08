import VimeoPlayer from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new VimeoPlayer(iframe);


player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.on('timeupdate', function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(`Видео на ${data.seconds}`);
    console.log("Прочитано из хранилища = ", localStorage.getItem("videoplayer-current-time"));
});






// player.on('timeupdate', function(data) {
//     // player.getCurrentTime().then(function (seconds) {
//          console.log(`Видео на ${data.seconds}`);
//     // });
// });