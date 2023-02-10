import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";


player.on('timeupdate', throttle(handlePlay, 1000))
setCurrentTime();

function handlePlay(currentTime) {
  localStorage.setItem(STORAGE_KEY, currentTime.seconds.toString());
};

function setCurrentTime() {
  const currentTimeObj = localStorage.getItem(STORAGE_KEY);
  if (!currentTimeObj) {
    return;
  }
  player.setCurrentTime(currentTimeObj);
}



