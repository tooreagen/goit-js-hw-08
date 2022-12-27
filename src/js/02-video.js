import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new VimeoPlayer(iframe);
const CURRENT_TIME_KEY = "videoplayer-current-time";

if (localStorage.getItem(CURRENT_TIME_KEY)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
}

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
},1000));