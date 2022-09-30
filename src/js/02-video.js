import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let timeData = JSON.parse(localStorage.getItem('videoplayer-current-time'));

currentTimeChecker();

function currentTimeChecker() {
  if (timeData) {
    player.setCurrentTime(timeData);
  }
}

player.on('timeupdate', function (data) {
  timeData = Math.round(data.seconds);
  localStorage.setItem('videoplayer-current-time', timeData);
});
