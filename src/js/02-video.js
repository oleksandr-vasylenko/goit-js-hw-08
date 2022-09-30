import throttle from 'lodash.throttle';
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

player.on('timeupdate', throttle(timeCapture, 1000));

function timeCapture(data) {
  localStorage.setItem('videoplayer-current-time', Math.round(data.seconds));
}
