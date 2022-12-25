import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new VimeoPlayer(iframe);


player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
},1000));