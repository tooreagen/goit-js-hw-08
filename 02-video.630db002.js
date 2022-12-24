const e=document.querySelector("#vimeo-player"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),console.log(o);
//# sourceMappingURL=02-video.630db002.js.map
