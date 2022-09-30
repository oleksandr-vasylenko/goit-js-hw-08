import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (data) {
  let timeData = Math.round(data.seconds);
  localStorage.setItem('videoplayer-current-time', timeData);
});
