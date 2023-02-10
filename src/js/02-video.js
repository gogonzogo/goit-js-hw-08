import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (currentTime) {
  let vimeoCurrentTime = JSON.stringify(currentTime);
  localStorage.setItem("videoplayer-current-time", vimeoCurrentTime);
});


try {
  const currentTimeObj = localStorage.getItem("videoplayer-current-time");
  const parsedCurrentTime = JSON.parse(currentTimeObj);
  var currentTimeSeconds = parsedCurrentTime.seconds;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
};


console.log(currentTimeSeconds);
player.setCurrentTime(currentTimeSeconds);


