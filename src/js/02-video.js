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
  const currentTimeSeconds = parsedCurrentTime.seconds;
  console.log(currentTimeSeconds);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
};

player.setCurrentTime(currentTimeSeconds).then(function (seconds) {
  // seconds = the actual time that the player seeked to
}).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});

