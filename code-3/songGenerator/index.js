// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
const requestURL = './songs.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let songsJSON;
request.onload = function() {
  songsJSON = request.response;
}

const getRandomInt = max => {
  return Math.floor(Math.random() * max);
}

const getRandomSong = () => {
  const { songs } = songsJSON;
  const randomNumber = getRandomInt(songs.length);
  const song = songs[randomNumber];
  console.log('song:', song)
  document.getElementById('song-title').innerHTML = "Song: " + song.title;
  document.getElementById('song-author').innerHTML = "Artist: " + song.artist;
}
