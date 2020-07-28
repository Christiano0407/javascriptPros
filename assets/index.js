import MediaPlayer from  "./MediaPlayer.js";
import Autoplay from  "./plugins/Autoplay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({el: video, plugins:[
    new Autoplay()
]});

const button = document.querySelector("button");
button.onclick = () => player.play(); 