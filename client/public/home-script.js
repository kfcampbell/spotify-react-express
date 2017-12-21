var mainContainer = document.getElementById('js-main-container'),
    loginContainer = document.getElementById('js-login-container'),
    loginButton = document.getElementById('js-btn-login'),
    background = document.getElementById('js-background');

var spotifyPlayer = new SpotifyPlayer({
  exchangeHost: 'http://localhost:5000'
});

var template = function (data) {
  return `
    <div class="main-wrapper">
      <img class="now-playing__img" src="${data.item.album.images[0].url}">
      <div class="now-playing__side">
        <div class="now-playing__name">${data.item.name}</div>
        <div class="now-playing__artist">${data.item.artists[0].name}</div>
        <div class="now-playing__status">${data.is_playing ? 'Playing' : 'Paused'}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${data.progress_ms * 100 / data.item.duration_ms}%"></div>
        </div>

        <button onClick="toggleMusic()" class="btn btn--login btn--play">&#9658;</button>
      </div>
    </div>
    <div class="background" style="background-image:url(${data.item.album.images[0].url})"></div>
  `;
};

var isPlaying = false;
spotifyPlayer.on('update', response => {
  mainContainer.innerHTML = template(response);
  isPlaying = response.is_playing;
});

spotifyPlayer.on('login', user => {
  if (user === null) {
    loginContainer.style.display = 'block';
    mainContainer.style.display = 'none';
  } else {
    loginContainer.style.display = 'none';
    mainContainer.style.display = 'block';
  }
});

// login button is null cause of react stuff.
// need to put this inside a component.
// and convert the view engine somehow
loginButton.addEventListener('click', () => {
    spotifyPlayer.login();
});

spotifyPlayer.init();

function toggleMusic() {
  spotifyPlayer.toggleMusic(isPlaying);
}